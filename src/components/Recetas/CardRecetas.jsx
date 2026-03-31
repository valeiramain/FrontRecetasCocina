
import { Col, Card, Button, Badge } from "react-bootstrap";
import comida1 from "../../../src/assets/imgPlatos/pexels-alesiakozik-6065181.jpg";


const CardRecetas = () => {
  return (
    <Col>
      <Card className="custom-card-receta shadow-sm border-0 h-100">
        <Card.Img
          variant="top"
          src={comida1}
          alt="Imagen receta"
          className="img-receta-card"
        />

        <Card.Body>
          <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
            <Card.Title className="mb-0 fs-5">Título Receta</Card.Title>

            <Badge
              pill
              className="px-2 py-2 bg-warning-subtle text-warning-emphasis"
            >
              <i className="bi bi-circle-fill me-1 small"></i>
              Medio
            </Badge>
          </div>

          <p className="text-secondary small mb-3">
            Breve descripción de la receta para que se entienda de qué se trata y se vea más completa la card.
          </p>

          <div className="d-flex flex-wrap gap-2 mb-3">
            <div className="d-inline-flex align-items-center px-2 py-1 text-light-emphasis bg-light-subtle border border-light-subtle rounded-3">
              <i className="bi bi-person-plus-fill fs-6 me-2"></i>
              4 pers
            </div>

            <div className="d-inline-flex align-items-center px-2 py-1 text-light-emphasis bg-light-subtle border border-light-subtle rounded-3">
              <i className="bi bi-clock-fill fs-6 me-2"></i>
              30 min
            </div>
          </div>

          <div className="d-inline-flex align-items-center px-2 py-1 rounded-3 text-naranja-emphasis bg-naranja-subtle">
            <i className="bi bi-person-circle me-2"></i>
            Autor receta
          </div>
        </Card.Body>
        <Card.Footer className="text-center border-0 " >
          <Button className="btn-ver-receta">
            Ver receta completa
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardRecetas;