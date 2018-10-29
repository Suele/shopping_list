import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    // estado atual dos items como por exemplo dropdown
    isOpen: false
  };

  // controla o estado do isOpen
  toogle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={this.toogle} />
            <Collapse isOpen={this.state.isOpen} navbar />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.google.com">Google</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
