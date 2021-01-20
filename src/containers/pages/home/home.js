import React from 'react'
import { history } from '../../../history'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBBtnGroup } from "mdbreact";
import './home.css'
import FooterPage from '../../../components/footer/footer';

export default function Home() {
  const redirectFogo = () => {
    history.push('/fogo')
    window.location.reload()
  }
  const redirectAgua = () => {
    history.push('/agua')
    window.location.reload()
  }
  const redirectElet = () => {
    history.push('/eletrico')
    window.location.reload()
  }
  const redirectPedra = () => {
    history.push('/pedra')
    window.location.reload()
  }
  const redirectGelo = () => {
    history.push('/gelo')
    window.location.reload()
  }
  return (
    <>
      <MDBContainer>
      <p className="h3 text-center">
        <strong className='font-weight-bold'>
          Escolha o tipo de Pokemon:
          </strong>
      </p>
      <MDBCol xl="3" md="12" className="mb-xl-0 mb-5">
        <MDBRow center>
          <MDBBtnGroup vertical className="m-3 mt-5">
            <MDBBtn size="lg" flat color="red" onClick={redirectFogo} className="mt-2">
              <MDBIcon icon="fire-alt" className="mr-2" />
                Fogo
               </MDBBtn>
            <MDBBtn size="lg" flat color="indigo lighten-2" onClick={redirectAgua} className="mt-2">
              <MDBIcon icon="tint" className="mr-2" />
                Água
              </MDBBtn>
            <MDBBtn size="lg" flat color="amber" onClick={redirectElet} className="mt-2">
              <MDBIcon icon="poo-storm" className="mr-2" />
                Elétrico
              </MDBBtn>
            <MDBBtn size="lg" flat color="brown" onClick={redirectPedra} className="mt-2">
              <MDBIcon far icon="hand-rock" className="mr-2" />
                Pedra
              </MDBBtn>
            <MDBBtn size="lg" flat color="mdb-color lighten-2" onClick={redirectGelo} className="mt-2">
              <MDBIcon icon="dice-d6" className="mr-2" />
               Gelo
              </MDBBtn>
          </MDBBtnGroup>
        </MDBRow>
      </MDBCol>
      </MDBContainer>
      <MDBRow center className="fixed-bottom footer">
        <FooterPage></FooterPage>
      </MDBRow>

    </>
  )
}
