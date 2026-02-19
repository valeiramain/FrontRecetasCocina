const Footer = () => {
  return (
    <footer className="bg-body-tertiary">
      <div className="bottom-nav py-5">
        <div className="nav-item">
          <i className="bi bi-house"></i>
          <span>Inicio</span>
        </div>

        <div className="nav-item">
          <i className="bi bi-search"></i>
          <span>Buscar</span>
        </div>

        <div className="nav-item">
          <i className="bi bi-book"></i>
          <span>Recetas</span>
        </div>

        <div className="nav-item">
         <i class="bi bi-gear"></i>
          <span>Admin</span>
        </div>

        <div className="nav-item">
          <i className="bi bi-person"></i>
          <span>Login</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
