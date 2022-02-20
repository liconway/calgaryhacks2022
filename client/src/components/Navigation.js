import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logoImg from "../img/logo.png";

function Navigation() {
  require("../css/Navbar.css");
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      {/* <Navbar.Brand href="#">Journable</Navbar.Brand> */}

      <Navbar.Brand href="#/dashboard">
        <img
          alt=""
          src={logoImg}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Journable
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#/dashboard">Dashboard</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="#/journal">Create a new Journal</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/">Sign out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
