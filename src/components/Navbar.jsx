import React from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
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
        <span>
          {" "}
          <Link to="/">All Products</Link>{" "}
        </span>
        <MDBBtn color="dark">
          <Link to="/cart">Cart(0)</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
