import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  require("../css/Navbar.css");
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Journal gaming!</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav><Nav.Link href="/Dashboard">Dashboard</Nav.Link></Nav>
      <Nav className="me-auto"> <Nav.Link href="/Journal">Create a new Journal</Nav.Link></Nav>
      <Nav><Nav.Link href="/">Sign out</Nav.Link></Nav>
    </Navbar.Collapse>
}

export default Navigation;
