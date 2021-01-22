import React, { Component } from "react"; import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBContainer
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Menu extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {

    const goBack = () => {
      window.location.href = '/';
    }

    let bgPink;
    const changeColor = () => {

      switch (true) {
        case window.location.pathname === '/agua':
          return bgPink = { backgroundColor: '#3A99F8', margin: "0px", padding: "5px" };
        case window.location.pathname === '/fogo':
          return bgPink = { backgroundColor: '#FE4B27', margin: "0px", padding: "5px" };
        case window.location.pathname === '/pedra':
          return bgPink = { backgroundColor: '#B6AB67', margin: "0px", padding: "5px" };
        case window.location.pathname === '/eletrico':
          return bgPink = { backgroundColor: '#D3BF46', margin: "0px", padding: "5px" };
        case window.location.pathname === '/planta':
          return bgPink = { backgroundColor: '#9FD97F', margin: "0px", padding: "5px" };
        case window.location.pathname === '/lutador':
          return bgPink = { backgroundColor: '#BF6454', margin: "0px", padding: "5px" };
        default:
          return;
      }
    };

    return (
      <MDBContainer>
        <Router>
          <MDBNavbar style={changeColor()} dark expand="md" fixed="top">
            <MDBNavbarBrand>
              <MDBIcon icon="brain" className="m-3" />
              <strong className="white-text h6">Desafio: Pokémon Store</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

              <MDBNavbarNav right>
                <MDBNavItem>
                    <a href="https://github.com/phbritoo/pokemon" target="_blank" style={{textDecoration: "none", color:"white"}} rel="noopener noreferrer" alt="Git" >
                      <MDBIcon fab icon="github"  size="2x" className="mr-3" />
                    </a>
                </MDBNavItem>
                <MDBNavItem>
                <a href="https://www.linkedin.com/in/phbritoo/" target="_blank" style={{textDecoration: "none", color:"white"}} rel="noopener noreferrer" alt="Git" >
                      <MDBIcon fab icon="linkedin"  size="2x" className="mr-3" />
                    </a>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem >
                  <MDBNavLink to="/" onClick={goBack} className="white-text h6 text-center m-3">
                    Voltar
                   <MDBIcon far icon="arrow-alt-circle-right" className="mr-2" />
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </MDBContainer>
    );
  }
}

export default Menu;