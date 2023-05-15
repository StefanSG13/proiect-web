import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="http://localhost:5173/home">
            BookStore
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:5173/home">Acasa</Nav.Link>
            <Nav.Link href="http://localhost:5173/produse">Produse</Nav.Link>
            <Nav.Link href="http://localhost:5173/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
