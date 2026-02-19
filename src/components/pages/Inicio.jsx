import { Breadcrumb, Badge } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import comida1 from "../../../src/assets/imgPlatos/pexels-alesiakozik-6065181.jpg";

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
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={comida1} />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="px-2 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-3">
                      <i className="bi bi-person-plus-fill fs-5 me-3"></i>xx pers
                    </div>

                    <div className="px-2 text-light-emphasis bg-light-subtle border border-light-subtle rounded-3">
                      <i className="bi bi-clock-fill fs-5 me-3"></i>xx min
                    </div>
                  </div>

                  <Card.Title>
                    <h2>Titulo Receta</h2>
                  </Card.Title>
                  <Card.Text className="text-terturary">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
};

export default Inicio;
