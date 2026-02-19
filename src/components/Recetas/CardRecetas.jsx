
import { Col, Card, Button } from "react-bootstrap";
import comida1 from "../../../src/assets/imgPlatos/pexels-alesiakozik-6065181.jpg";


const CardRecetas = () => {
    return (
        <Col>
            <Card className="custom-card text-white h-100">
                <Card.Img variant="top" src={comida1} />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="px-2 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-3">
                      <i className="bi bi-person-plus-fill fs-5 me-3"></i>xx
                      pers
                    </div>

                    <div className="px-2 text-light-emphasis bg-light-subtle border border-light-subtle rounded-3">
                      <i className="bi bi-clock-fill fs-5 me-3"></i>xx min
                    </div>
                  </div>

                  <Card.Title>
                    <h3>Titulo Receta</h3>
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  
                    <Button className="btn-naranja-outline w-100 text-naranja-emphasis bg-naranja-subtle">Ver Receta</Button>
                  
                </Card.Body>
              </Card>
        </Col>
    );
};

export default CardRecetas;