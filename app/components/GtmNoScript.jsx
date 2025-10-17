// app/components/GtmNoScript.jsx
import React from 'react';

// Seu ID GTM
const GTM_ID = 'GTM-5XC5B7H6'; 

const GtmNoScript = () => {
  return (
    // Usa uma div para simular o noscript e garantir que o HTML seja injetado no início do corpo
    <div style={{ display: 'none', visibility: 'hidden' }}>
      <iframe 
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </div>
  );
};

export default GtmNoScript;