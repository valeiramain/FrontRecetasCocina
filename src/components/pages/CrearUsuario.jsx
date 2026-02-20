import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const CrearUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarPassword2, setMostrarPassword2] = useState(false);

  const onSubmit = (data) => {
    // chequear que las contraseñas sean iguales
    console.log(data);
    if (data.passwordUsuario === data.confirmarContraseña) {
      data.perfilUsuario = "User";
      // armamos data sin la contraseña confirmada
      console.log(data);

      Swal.fire({
        title: `Felicitaciones!`,
        text: "Usuario Creado. Puede ingresar al sistema",
        icon: "success",
      });

      // redireccionar a ventana LOGIN
    } else {
      Swal.fire({
        title: `Error en las contraseñas!`,
        text: "Verifique que seas iguales y cumpla con los requisitos",
        icon: "error",
      });
    }
  };

  return (
    <main className="container mt-3">
      <section className="row">
        {/* Imagen lado izquierdo en md/lg */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Recetas"
            className="img-fluid rounded"
          />
        </div>

        {/* Formulario lado derecho */}
        <div className="col-12 col-md-6">
          <h1>Crear Cuenta</h1>
          <p className="text-secondary">
            Únete a la comunidad de EasyCook. Comienza tu viaje culinario hoy
            mismo
          </p>

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="p-3 shadow rounded"
          >
            {/* Nombre */}
            <Form.Group className="mb-3">
              <Form.Label>Nombre Completo</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type="text"
                  placeholder="Ej: Juan Perez"
                  {...register("nombreUsuario", {
                    required: "El nombre es obligatorio",
                  })}
                  className="ps-5"
                />
                <i className="bi bi-person-fill position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"></i>
              </div>
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type="email"
                  placeholder="ejemplo@dominio.com"
                  {...register("emailUsuario", {
                    required: "El email es obligatorio",
                  })}
                  className="ps-5"
                />
                <i className="bi bi-envelope-fill position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"></i>
              </div>
              <Form.Text className="text-danger">
                {errors.emailUsuario?.message}
              </Form.Text>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("passwordUsuario", {
                    required: "La contraseña es obligatoria",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                      message:
                        "8-16 caracteres, 1 mayúscula, 1 minúscula, 1 dígito y 1 especial",
                    },
                  })}
                  className="ps-5"
                />
                <i className="bi bi-lock-fill position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"></i>
                <Button
                  variant="outline-secondary"
                  type="button"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  className="position-absolute top-50 end-0 translate-middle-y me-1"
                >
                  <i
                    className={`bi ${mostrarPassword ? "bi-eye-slash" : "bi-eye"}`}
                  ></i>
                </Button>
              </div>
              <Form.Text className="text-danger">
                {errors.passwordUsuario?.message}
              </Form.Text>
            </Form.Group>

            {/* Repetir Password */}
            <Form.Group className="mb-3">
              <Form.Label>Repetir Password</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={mostrarPassword2 ? "text" : "password"}
                  placeholder="Repite tu contraseña"
                  {...register("confirmarContraseña", {
                    required: "Debes repetir la contraseña",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                      message:
                        "8-16 caracteres, 1 mayúscula, 1 minúscula, 1 dígito y 1 especial",
                    },
                  })}
                  className="ps-5"
                />
                <i className="bi bi-lock-fill position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"></i>
                <Button
                  variant="outline-secondary"
                  type="button"
                  onClick={() => setMostrarPassword2(!mostrarPassword2)}
                  className="position-absolute top-50 end-0 translate-middle-y me-1"
                >
                  <i
                    className={`bi ${mostrarPassword2 ? "bi-eye-slash" : "bi-eye"}`}
                  ></i>
                </Button>
              </div>
              <Form.Text className="text-danger">
                {errors.confirmarContraseña?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                {...register("aceptaTerminos", {
                  required:
                    "Debe leer y aceptar los términos y Políticas de privacidad",
                })}
                label={
                  <>
                    Al registrarte aceptas nuestros{" "}
                    <a href="#" className="accent">
                      Términos de Servicio
                    </a>{" "}
                    y la{" "}
                    <a href="#" className="accent">
                      Política de Privacidad
                    </a>
                  </>
                }
              />
              <Form.Text className="text-danger">
                {errors.aceptaTerminos?.message}
              </Form.Text>
            </Form.Group>

            {/* Botón Crear */}
            <Button
              type="submit"
              className="btn-naranja-outline w-100 text-naranja-emphasis bg-naranja-subtle mt-3"
            >
              Registrarse
            </Button>
          </Form>
          <article className="d-flex justify-content-center">
            <p className="me-3">¿Ya tienes una Cuenta?</p>
            <a href="#" className="accent">
              Iniciar Sesión
            </a>
          </article>
        </div>
      </section>
    </main>
  );
};

export default CrearUsuario;
