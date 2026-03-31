import { Row, Nav, Carousel, Breadcrumb, Button } from "react-bootstrap";

import receta1 from '../../assets/imgPlatos/pexels-fotios-photos-1279330.jpg';
import receta2 from '../../assets/imgPlatos/pexels-quang-nguyen-vinh-222549-2318966.jpg';
import receta3 from '../../assets/imgPlatos/pexels-spencer-4393021.jpg';

import CardRecetas from "../Recetas/CardRecetas";
// import DetalleReceta from "./DetalleReceta";

const Inicio = () => {
  return (
    <main>
      {/* Estructura del Breadcrumb */}
      {/* <Breadcrumb>
           <Breadcrumb.Item>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>
             detalle
        </Breadcrumb.Item>
      </Breadcrumb> */}


      <Carousel className="mb-5">
        <Carousel.Item>
          {/* <img text="First slide" /> */}
          <img className="d-block w-100 carousel-img" src={receta1} text="First slide"  alt="Receta 1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={receta2} text="Second slide"  alt="Receta 2" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={receta3} text="Third slide"  alt="Receta 3" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <section className="container mb-3">
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
