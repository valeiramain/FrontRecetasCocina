import { Image } from "react-bootstrap";
import comida1 from "../../../src/assets/imgPlatos/pexels-alesiakozik-6065181.jpg";

const DetalleReceta = () => {
  return (
    <main className="container">
        <Image src={comida1} thumbnail />
        <h1>detalle Receta</h1>

    </main>
  )
}

export default DetalleReceta