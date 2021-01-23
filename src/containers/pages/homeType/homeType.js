import React from 'react'
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBBtnGroup } from "mdbreact";
import FooterPage from '../../../components/footer/footer';
import { Link } from 'react-router-dom';

export default function HomeType() {
  return (
    <>
      <img
        width="300rem"
        style={{ marginTop: "-200px" }}
        src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pok%C3%A9mon-Logo-PNG.png"
        alt="pokemon"
      />
      <p className="h3 text-center">
        <strong className='font-weight-bold'>
          Escolha o tipo de Pokemon:
          </strong>
      </p>
      <MDBCol xl="6" md="12">
        <MDBRow center>
          <MDBBtnGroup>
            <MDBBtn type="button" flat className="deep-orange darken-1 mt-2">
              <Link to="/fogo" className="text-white" >
                <MDBIcon icon="fire-alt" className="mr-2" />
                Fogo
               </Link>
            </MDBBtn>
            <MDBBtn type="button" flat className="light-blue lighten-1 mt-2">
              <Link to="/agua" className="text-white" >
                <MDBIcon icon="tint" className="mr-2" />
                Água
                </Link>
            </MDBBtn>
            <MDBBtn type="button" flat className="green lighten-2 mt-2">
              <Link to="/planta" className="text-white">
                <MDBIcon fab icon="pagelines" className="mr-2" />
                Planta
                </Link>
            </MDBBtn>
          </MDBBtnGroup>
          <MDBBtnGroup className="m-2 mt-3">
            <MDBBtn type="button" flat className="amber darken-1 mt-2">
              <Link to="/eletrico" className="text-white">
                <MDBIcon icon="poo-storm" className="mr-2" />
                Elétrico
                </Link>
            </MDBBtn>
            <MDBBtn type="button" flat className="brown darken-1 mt-2">
              <Link to="/pedra" className="text-white">
                <MDBIcon icon="hand-rock" className="mr-2" />
                Pedra
                </Link>
            </MDBBtn>
            <MDBBtn type="button" flat className="orange darken-3 mt-2">
              <Link to="/lutador" className="text-white">
                <MDBIcon icon="dumbbell" className="mr-2" />
                Lutador
                </Link>
            </MDBBtn>
          </MDBBtnGroup>
        </MDBRow>
      </MDBCol>
      <MDBRow center className="fixed-bottom footer">
        <FooterPage></FooterPage>
      </MDBRow>
    </>
  )
}
