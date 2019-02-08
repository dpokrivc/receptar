import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

const AppNavbar = () => (
  <Navbar staticTop inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Cookbook</Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
);

export default AppNavbar;
