import React from "react";
import {
  MDBContainer,
  MDBInputGroup,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <MDBNavbarBrand></MDBNavbarBrand>
        <span>All Products</span>
        <MDBBtn color="dark">Cart(0)</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
