import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <div className="logo">
            <i className="bi bi-fork-knife"></i>
            <span>
              Easy<span className="accent">Cook</span>
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="ms-auto me-5">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav> */}
          <Form className="d-flex ms-auto">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-naranja-outline" type="submit">
              <i className="bi bi-search bSearch"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
