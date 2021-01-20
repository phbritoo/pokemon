import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useWindow } from '../../../hooks/window';
import Menu from '../../../components/menu/menu';
import PokemonCard from '../../../components/pokemonCard/pokemonCard';
import styled from 'styled-components';
import { MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdbreact';
import Carrinho from '../../../components/carrinho/carrinho'

import './agua.css'

export const Search = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 0 20px;
  height: 50px;
`;

export default function Agua() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState('');
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    async function getPokemon() {
      const response = await axios.get("https://pokeapi.co/api/v2/type/11/");
      setPokemon(response.data.pokemon);
    }
    getPokemon();
  }, [])

  const { windowDimensions } = useWindow();

  return (
    <>
      <MDBRow className="m-5 bg">
        <MDBCol md="8">
          <Menu></Menu>
          <MDBCol>
            <div style={{ display: 'grid', justifyContent: 'center', marginTop: "50px" }}>
              <input
                className="form-control"
                type="text"
                aria-label="Search"
                placeholder="Pesquisar Pokemon"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
              />
            </div>
          </MDBCol>

          <MDBRow>
            <div className="container">
              {pokemon.filter(eachPokemon => eachPokemon.pokemon.name.includes(pokemonName)).map(filteredPokemon => {
                return (
                  <PokemonCard
                    key={`${filteredPokemon.pokemon.url}-${filteredPokemon.pokemon.name}`}
                    price={filteredPokemon.pokemon.name.length * 50}
                    name={filteredPokemon.pokemon.name}
                    imgUrl={filteredPokemon.pokemon.url}
                  />
                )
              })}
            </div>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" style={{ marginTop: "50px" }}>
          <Carrinho minwidth="auto" />
        </MDBCol>
      </MDBRow>
    </>
  );
};
