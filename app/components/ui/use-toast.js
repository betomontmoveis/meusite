import { useState, useEffect } from 'react';

// Limite de Toasts visíveis na tela
const TOAST_LIMIT = 1;

// Variável para gerar IDs únicos para cada toast
let count = 0;
function generateId() {
	count = (count + 1) % Number.MAX_VALUE;
	return count.toString();
}

// O Store (Armazém) de estado simples para gerenciar a fila de toasts
const toastStore = {
	state: {
		toasts: [],
	},
	listeners: [],

	// Retorna o estado atual
	getState: () => toastStore.state,

	// Atualiza o estado e notifica todos os listeners
	setState: (nextState) => {
		if (typeof nextState === 'function') {
			toastStore.state = nextState(toastStore.state);
		} else {
			toastStore.state = { ...toastStore.state, ...nextState };
		}

		toastStore.listeners.forEach((listener) => listener(toastStore.state));
	},

	// Adiciona um listener para receber atualizações de estado
	subscribe: (listener) => {
		toastStore.listeners.push(listener);
		return () => {
			toastStore.listeners = toastStore.listeners.filter(
				(l) => l !== listener,
			);
		};
	},
};

// Função principal para disparar um novo toast
export const toast = ({ ...props }) => {
	const id = generateId();

	const update = (props) =>
		toastStore.setState((state) => ({
			...state,
			toasts: state.toasts.map((t) => (t.id === id ? { ...t, ...props } : t)),
		}));

	const dismiss = () =>
		toastStore.setState((state) => ({
			...state,
			toasts: state.toasts.filter((t) => t.id !== id),
		}));

	toastStore.setState((state) => ({
		...state,
		toasts: [
			{ ...props, id, dismiss },
			...state.toasts,
		].slice(0, TOAST_LIMIT),
	}));

	return {
		id,
		dismiss,
		update,
	};
};

// Hook personalizado para consumir o estado do toast na aplicação
export function useToast() {
	const [state, setState] = useState(toastStore.getState());

	useEffect(() => {
		// Adiciona o listener para receber o estado atualizado
		const unsubscribe = toastStore.subscribe((state) => {
			setState(state);
		});

		return unsubscribe;
	}, []); // Roda apenas uma vez na montagem do componente

	useEffect(() => {
		// Lógica para remover toasts automaticamente após um tempo
		if (state.toasts.length > 0) {
			const timer = setTimeout(() => {
				const [firstToast] = state.toasts;
				if (!firstToast.autoDismiss || firstToast.autoDismiss === true) {
					firstToast.dismiss();
				}
			}, firstToast.duration || 5000);

			return () => clearTimeout(timer);
		}
	}, [state.toasts]); // Roda quando a lista de toasts muda

	return {
		...state,
		toast, // Exporta a função toast para ser usada em qualquer lugar
	};
}
