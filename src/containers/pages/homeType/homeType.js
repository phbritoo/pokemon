import React from 'react'
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBBtnGroup } from "mdbreact";
import FooterPage from '../../../components/footer/footer';
import { history } from '../../../history'

export default function HomeType() {
  
  const teste = () => {
    history.push('/agua');
    window.location.reload();
  }
  
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
            <MDBBtn onClick={teste} flat className="deep-orange darken-2 mt-2">
              <MDBIcon icon="fire-alt" className="mr-2" />
                Fogo
               </MDBBtn>
            <MDBBtn href="/agua" flat className="light-blue lighten-1 mt-2">
              <MDBIcon icon="tint" className="mr-2" />
                Água
               </MDBBtn>
            <MDBBtn href="/planta" flat className="green lighten-2 mt-2">
              <MDBIcon fab icon="pagelines" className="mr-2"/>
                Planta
               </MDBBtn>
          </MDBBtnGroup>
          <MDBBtnGroup className="m-2 mt-3">
            <MDBBtn href="/eletrico" flat className="amber darken-1 mt-2">
              <MDBIcon icon="poo-storm" className="mr-2" />
                Elétrico
               </MDBBtn>
            <MDBBtn href="/pedra" flat className="brown darken-1 mt-2">
              <MDBIcon icon="hand-rock" className="mr-2" />
                Pedra
               </MDBBtn>
            <MDBBtn href="/lutador" flat className="orange darken-3 mt-2">
              <MDBIcon icon="dumbbell" className="mr-2" />
                Lutador
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
