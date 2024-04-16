import React, { useState } from 'react';

function InputMayusculas({textoIncial}) {
  const [texto, setTexto] = useState(textoIncial);

  const handleChange = (e) => {
    setTexto(e.target.value.toUpperCase());
  };

  return (
    <div>
      <input type="text" value={texto} onChange={handleChange} />
    </div>
  );
}

export default InputMayusculas;
