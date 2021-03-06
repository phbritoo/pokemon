import { MDBBtn, MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2'
import { useCart } from '../../hooks/cart';

export const CarrinhoHeader = styled.div`
    width: 100%;
    background-color: ${props => props.bgcolor};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    padding: 8px;
`;
export const TotalCarrinho = styled.div`
  width: 100%;
  font-size:17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Carrinho({ minwidth }) {
  const { increment, decrement, pokemon, setEmpty } = useCart();
  const filteredPokemon = pokemon.filter(element => element.type === window.location.pathname);

  const cartTotal = useMemo(() => {
    const totalArray = filteredPokemon.map(
      element => element.price * element.quantity,
    );

    let total = 0;
    if (totalArray.length > 0) {
      total = totalArray.reduce((a, b) => a + b);
    }

    if (total > 0) {
      return total;
    }
    return 0;
  }, [filteredPokemon]);

  const finalizarCompra = useCallback(() => {
    Swal.fire({
      title: 'Obrigado!!!',
      text: `Você ganhou de volta: R$${Math.round(0.25 * cartTotal)},00 (25%)`,
      icon: 'success',
    })
    document.getElementById('btn').style.display = 'none';
    setEmpty();


  }, [cartTotal, setEmpty,])


  const pokemomAgua = () => {
    return (
      <CarrinhoHeader bgcolor="#3A99F8">
        <MDBIcon icon="shopping-basket" className="mr-3" />
        Cesta
      </CarrinhoHeader>
    )
  }
  const pokemomFogo = () => {
    return (
      <CarrinhoHeader bgcolor="#FE4B27">
        <MDBIcon icon="shopping-basket" className="mr-3" />
          Cesta
      </CarrinhoHeader>
    )
  }
  const pokemomPedra = () => {
    return (
      <CarrinhoHeader bgcolor="#B6AB67">
        <MDBIcon icon="shopping-basket" className="mr-3" />
        Cesta
      </CarrinhoHeader>
    )
  }
  const pokemomEltri = () => {
    return (
      <CarrinhoHeader bgcolor="#D3BF46">
        <MDBIcon icon="shopping-basket" className="mr-3" />
        Cesta
      </CarrinhoHeader>
    )
  }
  const pokemomPlanta = () => {
    return (
      <CarrinhoHeader bgcolor="#9FD97F">
        <MDBIcon icon="shopping-basket" className="mr-3" />
       Cesta
      </CarrinhoHeader>
    )
  }
  const pokemomLuta = () => {
    return (
      <CarrinhoHeader bgcolor="#BF6454">
        <MDBIcon icon="shopping-basket" className="mr-3" />
        Cesta
      </CarrinhoHeader>
    )
  }
  const changeColor = () => {
    switch (true) {
      case window.location.pathname === '/agua':
        return pokemomAgua();
      case window.location.pathname === '/fogo':
        return pokemomFogo();
      case window.location.pathname === '/pedra':
        return pokemomPedra();
      case window.location.pathname === '/eletrico':
        return pokemomEltri();
      case window.location.pathname === '/planta':
        return pokemomPlanta();
      case window.location.pathname === '/lutador':
        return pokemomLuta()
      default:
        return;
    }
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      {changeColor()}
      <MDBTable id="carrinho">
        <MDBTableHead>
          <tr>
            <th className="text-center font-weight-bold">Pokémon</th>
            <th></th>
            <th className="text-center font-weight-bold" >Qtd</th>
            <th className="text-center font-weight-bold">Valor</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredPokemon.map(element => (
            <tr
              className="text-center"
              key={`${element.name}-${element.quantity}-${element.price}`}
            >
              <td>
                <p className="text-uppercase">
                  {element.name}
                </p>
              </td>
              <td>
                <div>
                  <button style={{ marginRight: "5px" }} onClick={() => increment(element.name)}> <MDBIcon icon="plus" /> </button>
                  <button style={{ marginRight: "5px" }} onClick={() => decrement(element.name)}> <MDBIcon icon="minus" /> </button>
                </div>
              </td>
              <td>
                <p>
                  {element.quantity}
                </p>
              </td>
              <td>
                <p className="font-weight-bold">
                  $ {element.price * element.quantity}
                </p>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      { cartTotal > 0
        ? <TotalCarrinho>
          <MDBBtn id="btn" onClick={finalizarCompra} outline color="success" flat className="font-weight-bold">
            <MDBIcon icon="shopping-basket" className="mr-2" />
            Finalizar Compra
           </MDBBtn>
          <p className="text-center font-weight-bold m-4 text-lg-right">
            Total:  $ {cartTotal},00
          </p>
        </TotalCarrinho>
        : null
      }
    </div>

  )
}
