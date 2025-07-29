import React, { useState } from 'react';

const Carrinho = () => {
  const [itens, setItens] = useState([
    { id: 1, nome: "Produto 1", preco: 50 },
    { id: 2, nome: "Produto 2", preco: 30 }
  ]);

  const total = itens.reduce((sum, item) => sum + item.preco, 0);

  const pagar = async () => {
    const res = await fetch("http://localhost:3001/pagar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itens })
    });

    const data = await res.json();
    window.location = data.url; // redireciona para checkout do Stripe
  };

  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {itens.map(item => (
          <li key={item.id}>{item.nome} - R${item.preco}</li>
        ))}
      </ul>
      <h3>Total: R${total}</h3>
      <button onClick={pagar}>Pagar</button>
    </div>
  );
};

export default Carrinho;