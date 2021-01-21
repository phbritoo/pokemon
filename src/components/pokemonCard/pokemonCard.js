import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useCart } from '../../hooks/cart';
import { MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBIcon, MDBRow } from 'mdbreact';
import styled from 'styled-components';

export const ImageCardPokemon = styled.img`
  width: auto;
  max-height: 220px;
  height: 15rem;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid black;
`;

export default function PokemonCard({ name, price, imgUrl }) {
  const [img, setImg] = useState('');

  const { addToCart } = useCart();

  function handleAddToCart(name, price) {
    const pokemon = { name, price }
    addToCart(pokemon);
  }

  useEffect(() => {
    async function getImg(url) {
      const response = await axios.get(url);
      setImg(response.data.sprites.front_default);
    }

    getImg(imgUrl)
  }, [img, imgUrl])

  return (
    <MDBRow >
      <MDBCol>
        <MDBCard wide className="card">
          <ImageCardPokemon src={img} />
          <MDBCardBody cascade className='text-center'>
            <MDBCardText style={{ color: "#83508B" }} >
              <strong className="h5">{name}</strong>
            </MDBCardText>
            <MDBCardText style={{ color: "#83508B" }} >
              <strong className="h5">$ {price},00</strong>
            </MDBCardText>

            <a
              href='#'
              onClick={() => handleAddToCart(name, price)}
              className='mt-1 d-flex justify-content-end align-items-center'
            >
              <h5>
                Comprar{' '}
                <MDBIcon
                  icon='chevron-right'
                  className='ml-2'
                  size='sm'
                >
                </MDBIcon>
              </h5>
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}
