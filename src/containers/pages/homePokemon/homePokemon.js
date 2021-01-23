import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useWindow } from '../../../hooks/window';
import Menu from '../../../components/menu/menu';
import PokemonCard from '../../../components/pokemonCard/pokemonCard';
import styled from 'styled-components';
import { MDBBtn, MDBCol, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBRow } from 'mdbreact';
import Carrinho from '../../../components/carrinho/carrinho'
import './homePokemon.css'

export const Search = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 0 20px;
  height: 50px;
`;

export default function HomePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    async function getPokemon() {
      switch (true) {
        case window.location.pathname === '/agua': {
          const response = await axios.get("https://pokeapi.co/api/v2/type/11/");
          setPokemon(response.data.pokemon);
          return response
        }
        case window.location.pathname === '/fogo': {
          const response = await axios.get("https://pokeapi.co/api/v2/type/10/");
          setPokemon(response.data.pokemon);
          return response
        }
        case window.location.pathname === '/eletrico': {
          const response = await axios.get("https://pokeapi.co/api/v2/type/13/");
          setPokemon(response.data.pokemon);
          return response
        }
        case window.location.pathname === '/pedra': {
          const response = await axios.get("https://pokeapi.co/api/v2/type/6/");
          setPokemon(response.data.pokemon);
          return response
        }
        case window.location.pathname === '/planta': {
          const response = await axios.get("https://pokeapi.co/api/v2/type/12/");
          setPokemon(response.data.pokemon);
          return response
        }
        case window.location.pathname === '/lutador': {
          const response = await axios.get("https://pokeapi.co/api/v2/type/2/");
          setPokemon(response.data.pokemon);
          return response
        }
        default: return;
      }
    }
    getPokemon();
  }, [])

  const [dropdown, setDropdown] = useState("");

  const showDropdown = () => {
   
  }

  const closeDropdown = event => {
    console.log("hidden");
    setDropdown("");
    document.body.removeEventListener("click", closeDropdown);
  };  

  const { windowDimensions } = useWindow();

  return (
    <>
      <MDBRow className="m-5 bg">
        <MDBCol md="8">
          <Menu></Menu>
          <MDBCol>
            <div style={{ display: 'grid', justifyContent: 'center', marginTop: "50px" }}>
              {pokemon ? (
                <input
                  className="form-control"
                  type="text"
                  aria-label="Search"
                  placeholder="Pesquisar Pokemon"
                  value={pokemonName}
                  onChange={(e) => setPokemonName(e.target.value)}
                />
              ) : <h1> POKEMIN DDSDSS</h1>}

              {windowDimensions < 1000 ?
                <>
                  <span style={{ marginTop: "10px" }}>
                    <Carrinho />
                  </span>
                </>
                : null}
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

        {windowDimensions > 1000 ?
          <MDBCol md="4" style={{ marginTop: "50px" }}>
            <Carrinho minwidth="auto" />
          </MDBCol>
          : null}

      </MDBRow>

    
    </>
  );
};
