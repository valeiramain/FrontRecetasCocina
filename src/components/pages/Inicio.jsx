import { Breadcrumb, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import CardRecetas from "../Recetas/CardRecetas";
// import DetalleReceta from "./DetalleReceta";

const Inicio = () => {
  return (
    <main className="container mt-2">
      {/* Estructura del Breadcrumb */}
      <Breadcrumb>
        {/* <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}> */}
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>
          {/* Detalle de {servicio.servicio || "Servicio"} */}
          detalle
        </Breadcrumb.Item>
      </Breadcrumb>

      <section>
        {/* grilla de cards de recetas */}
        <Row xs={1} md={3} className="g-4">
          <CardRecetas></CardRecetas>
          {/* <DetalleReceta></DetalleReceta> */}
        </Row>
      </section>
    </main>
  );
};

export default Inicio;
