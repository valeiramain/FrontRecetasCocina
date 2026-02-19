import { Breadcrumb, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import comida1 from "../../../src/assets/imgPlatos/pexels-alesiakozik-6065181.jpg";
import CardRecetas from "../Recetas/CardRecetas";

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
        </Row>
      </section>
    </main>
  );
};

export default Inicio;
