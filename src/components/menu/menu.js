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
                  <MDBNavLink to="#"><MDBIcon fab icon="github" /></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="linkedin" /></MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav center>
                <MDBNavItem>
                  <MDBNavLink to="#"><MDBIcon fab icon="github" /></MDBNavLink>
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