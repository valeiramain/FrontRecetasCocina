
import { Col, Card, Button, Badge } from "react-bootstrap";
import comida1 from "../../../src/assets/imgPlatos/pexels-alesiakozik-6065181.jpg";


const CardRecetas = () => {
  return (
    <Col>
      <Card className="custom-card text-white h-100">
        <Card.Img variant="top" src={comida1} />
        <Card.Body>
          <Card.Title>
            <div className="d-flex align-items-center gap-2">
              <h5 className="mb-0">Titulo Receta</h5>

              <Badge pill bg="warning" className="p-2 bg-warning-subtle text-warning-emphasis">
                <i className="bi bi-circle-fill"></i> Medio
              </Badge>
            </div>
            {/* <Badge pill bg="danger" className='p-3 mb-2 bg-danger-subtle text-danger-emphasis'>
              <i class="bi bi-circle-fill"></i> Difícil
            </Badge>
            <Badge pill bg="success" className='p-3 mb-2 bg-success-subtle text-success-emphasis'>
              <i class="bi bi-circle-fill"></i> Fácil
            </Badge> */}

          </Card.Title>
          <Card.Text className="text-secondary">
            <div className="d-flex align-items-center gap-3 my-3">
              <div className="px-2 text-light-emphasis bg-light-subtle border border-light-subtle rounded-3">
                <i className="bi bi-person-plus-fill fs-5 me-3"></i>xx
                pers
              </div>

              <div className="px-2 text-light-emphasis bg-light-subtle border border-light-subtle rounded-3">
                <i className="bi bi-clock-fill fs-5 me-3"></i>xx min
              </div>
            </div>

            <div className="px-2 text-naranja-emphasis bg-naranja-subtle">
              <i class="bi bi-person-circle"></i> Autor receta
            </div>
          </Card.Text>

          <Button className="btn-naranja-outline w-100 text-naranja-emphasis bg-naranja-subtle">Ver Receta Completa</Button>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardRecetas;