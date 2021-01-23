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

  const pokemomAgua = () => {
    return (
      <h5 style={{ textDecoration: "none", color: "#3A99F8" }}>
        <MDBIcon
          icon="shopping-basket"
          className='mr-2'
          size='sm'
        />
      comprar
      </h5>
    )
  }
  const pokemomFogo = () => {
    return (
      <h5 style={{ textDecoration: "none", color: "#FE4B27" }}>
        <MDBIcon
          icon="shopping-basket"
          className='mr-2'
          size='sm'
        />
        comprar
      </h5>
    )
  }
  const pokemomPedra = () => {
    return (
      <h5 style={{ textDecoration: "none", color: "#B6AB67" }}>
        <MDBIcon
          icon="shopping-basket"
          className='mr-2'
          size='sm'
        />
      comprar
      </h5>
    )
  }
  const pokemomEltri = () => {
    return (
      <h5 style={{ textDecoration: "none", color: "#D3BF46" }}>
        <MDBIcon
          icon="shopping-basket"
          className='mr-2'
          size='sm'
        />
        comprar
      </h5>
    )
  }
  const pokemomPlanta = () => {
    return (
      <h5 style={{ textDecoration: "none", color: "#9FD97F" }}>
        <MDBIcon
          icon="shopping-basket"
          className='mr-2'
          size='sm'
        />
        comprar
      </h5>
    )
  }
  const pokemomLuta = () => {
    return (
      <h5 style={{ textDecoration: "none", color: "#BF6454" }}>
        <MDBIcon
          icon="shopping-basket"
          className='mr-2'
          size='sm'
        />
        comprar
      </h5>
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
    <MDBRow >
      <MDBCol>
        <MDBCard wide className="card">
          <ImageCardPokemon src={img} />
          <MDBCardBody cascade className='text-center'>
            <MDBCardText >
              <strong className="h5">{name}</strong>
            </MDBCardText>
            <MDBCardText >
              <strong className="h5">$ {price},00</strong>
            </MDBCardText>

            <a
              href='#'
              onClick={() => handleAddToCart(name, price)}
              className='mt-1 d-flex justify-content-end align-items-center'
            >
              {changeColor()}
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}
