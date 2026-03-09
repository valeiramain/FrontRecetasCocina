import comida1 from "../../../src/assets/imgPlatos/pexels-alesiakozik-6065181.jpg";
import { useState } from "react";
import { Form, Row, Col, Image, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const DetalleReceta = ({ titulo }) => {
  // vista previa de la imagen
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imagenUrl = URL.createObjectURL(file);
    setPreview(imagenUrl);

    //validacion formulario
     const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    resetField, //limpiar input tipo file
  } = useForm();

  useEffect(() => {
    // solo en montaje
      cargarDatos();
  }, []);

  const cargarDatos = async () => {
    if (titulo === "Editar Receta") {
      const respuestaReceta = await buscarRecetaApi(id);
      if (respuestaReceta && respuestaReceta.status === 200) {
        const RecetaBuscado = await respuestaReceta.json();

        setValue("titulo", RecetaBuscado.titulo);
        setValue("categoria", RecetaBuscado.categoria);
        setValue("ingredientes", RecetaBuscado.ingredientes);
        setValue("instrucciones", RecetaBuscado.instrucciones);
        setValue("precioReceta", RecetaBuscado.precioReceta);
        setValue("cantPers", RecetaBuscado.cantPers);
        setValue("tiempoPrep", RecetaBuscado.tiempoPrep);
        setValue("autorReceta", RecetaBuscado.autorReceta);
        // url de la imagen en cloudinary
        setImagenActual(RecetaBuscado.imagen);
      }
    }
  };

  };
  return (
    <main className="container my-2">
      <section className="text-center">
        <h1>Nueva Receta</h1>
        <p className="text-secondary">
          Comporte tu experiencia culinaria con el mundo.
        </p>
      </section>

      <Form>
        <Row className="align-items-center mb-3">
          <Col md={8}>
            <Form.Group controlId="exampleForm.titulo">
              <Form.Label>Nombre de la Receta</Form.Label>
              <Form.Control type="text" placeholder="Ej: Milanesa con puré" />
            </Form.Group>
          </Col>

          <Col md={4} className="text-center">
            {preview && (
              <Image src={preview} rounded fluid className="imagenReceta" />
            )}
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="exampleForm.imgReceta">
          <Form.Label>Imagen de la Receta</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.categoria">
          <Form.Label>Categoría:</Form.Label>
          <Form.Select aria-label="Categoría">
            <option>Seleccione Categoria</option>
            <option value="1">Carnes</option>
            <option value="2">Pastas</option>
            <option value="3">Pizzas</option>
            <option value="4">Ensaladas</option>
            <option value="5">Postres</option>
            <option value="6">Panadería</option>
            <option value="7">Otros</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlIngredientes"
        >
          <Form.Label>Ingredientes: </Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInstrucciones"
        >
          <Form.Label>Paso a Paso: </Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.precio">
          <Form.Label>Precio:</Form.Label>
          <Form.Control type="number" placeholder="Ej: $ 15000" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.autor">
          <Form.Label>Autor Receta:</Form.Label>
          <Form.Control type="text" placeholder="Ej: Juan Perez" />
        </Form.Group>

        {/* Botón Crear */}
        <Button
          type="submit"
          className="btn-naranja-outline w-100 text-naranja-emphasis bg-naranja-subtle mt-3"
        >
          Guardar
        </Button>
      </Form>
    </main>
  );
};

export default DetalleReceta;
