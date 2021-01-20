import { MDBBtn, MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { useCallback, useMemo } from 'react'
import { useCart } from '../../hooks/cart';

import { CartContainer, CartHeader, Finish, Cart, CartItem, Total } from './styles'

export default function Carrinho({ minwidth, children }) {
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

  const handleFinish = useCallback(() => {
    // Swal.fire({
    //   title: 'Obrigado!',
    //   text: `Você ganhou de volta: R$${Math.round(0.05 * cartTotal) },00 (5%)`,
    //   icon: 'success',
    //   confirmButtonText: 'Comprar mais'
    // })
    document.getElementById('btn').style.display = 'none';
    setEmpty();

  }, [cartTotal, setEmpty,])

  return (

    <div >
      {/* <>{children}</> */}
      <CartHeader bgcolor={"#A239CA"}>
        Carrinho
        <MDBIcon icon="shopping-cart" />
      </CartHeader>

      <MDBTable id="carrinho">
        <MDBTableHead>
          <tr>
            <th className="text-center font-weight-bold white-text">Pokemon</th>
            <th></th>
            <th className="text-center font-weight-bold white-text" >Qtd</th>
            <th className="text-center font-weight-bold white-text">Valor</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredPokemon.map(element => (
            <tr className="text-center white-text">
              <td
                key={`${element.name}-${element.quantity}-${element.price}`}
              >
                <p className="text-uppercase">
                  {element.name}
                </p>
              </td>
              <td>
                <div>
                  <button onClick={() => increment(element.name)}> <MDBIcon icon="plus" /> </button>
                  <button onClick={() => decrement(element.name)}> <MDBIcon icon="minus" /> </button>
                </div>
              </td>
              <td>
                <p>
                  {element.quantity}
                </p>
              </td>
              <td>
                <p className="font-weight-bold white-text">
                  $ {element.price * element.quantity},00
                 </p>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      { cartTotal > 0
        ? <Total>
          <p className="text-center font-weight-bold m-4 text-lg-right">
            Total:  $ {cartTotal},00
        </p>
          <span style={{ textAlign: 'center' }} id="btn">
            <MDBBtn color="purple" onClick={handleFinish} >
              Finalizar Compra
      </MDBBtn>
          </span>
        </Total>
        : null
      }
    </div>

  )
}
