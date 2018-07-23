import React, { Component } from 'react';
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
  DropdownItem } from 'reactstrap';


class TopNavbar extends Component{
    constructor(props){
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle(){
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    render(){
      return(
          <div>
            <Navbar color="dark" dark expand="md" className="mb-5">
              <Container>
                <NavbarBrand href="/">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem><NavLink href="/">Home</NavLink></NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle color="dark" caret>
                        Services
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Service 1</DropdownItem>
                        <DropdownItem>Service 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Service 3</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem><NavLink href="/about">About</NavLink></NavItem>
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          </div>
        );
    }
}


export default TopNavbar;