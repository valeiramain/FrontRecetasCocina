
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router";

const Footer = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    setUsuarioLogueado({});
    navegacion("/");
  };

  return (
    <Navbar fixed="bottom" bg="black" variant="dark" className="bottom-navbar">
      <Nav className="w-100 d-flex justify-content-around text-center">

        <Nav.Link to="/" className="nav-item">
          <i className="bi bi-house"></i>
          <div>Inicio</div>
        </Nav.Link>

        <Nav.Link as={Link} to="/buscar" className="nav-item">
          <i className="bi bi-search"></i>
          <div>Buscar</div>
        </Nav.Link>

        <Nav.Link as={Link} to="/recetas" className="nav-item">
          <i className="bi bi-book"></i>
          <div>Recetas</div>
        </Nav.Link>

        {usuarioLogueado.nombre ? (
          <>
            <Nav.Link to="/administrador" className="nav-item">
              <i className="bi bi-gear"></i>
              <div>Admin</div>
            </Nav.Link>
           <Nav.Link as={Link} to="/login" className="nav-item">
          <i className="bi bi-door-open"></i>
          <div>Logout</div>
        </Nav.Link>
          </>
        ) : (
        <Nav.Link as={Link} to="/login" className="nav-item">
          <i className="bi bi-person"></i>
          <div>Login</div>
        </Nav.Link>)}
      </Nav>
    </Navbar>
  );
};

export default Footer;
