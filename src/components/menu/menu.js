import React, { Component } from "react"; import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
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
    const bgPink = { backgroundColor: '#A239CA', margin: "0px", padding: "5px" }
    
    return (
      <Router>
        <MDBNavbar style={bgPink} dark expand="md" fixed="top">
          <MDBNavbarBrand>
            <MDBIcon icon="brain" className="m-3" />
            <strong className="white-text h6">Desafio: Pokemon Store</strong>
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
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Menu;