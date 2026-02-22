import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router";
import { crearUsuarioApi } from "../../helpers/queriesUsuarios.js";
import {login} from '../../helpers/queriesUsuarios.js'

const Login = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [mostrarPassword, setMostrarPassword] = useState(false);

   const navegacion = useNavigate();


   const onSubmit = async (data) => {
    //ejecuta solicitud de login
    const respuesta = await login(data);
    if (respuesta && respuesta.status === 200) {
      //guardar el usuario logueado y el token como objeto en el state
      const usuarioLogueado = await respuesta.json();
      //guardo el usuario logueado como un objeto con la respuesta en el state en el session storage
      setUsuarioLogueado({
        nombreUsuario: usuarioLogueado.nombreUsuario,
        token: usuarioLogueado.token,
      });

     Swal.fire({
        title: `Bienvenido ${usuarioLogueado.nombreUsuario}!`,
        text: "Ingresando al Sistema!",
        icon: "success",
      });
      navegacion(`/administrador`);
    } else {
      // mostrar cartel con credenciales incorrectas
      Swal.fire({
        title: "Ocurrió un error!",
        text: "Credenciales incorrectas!",
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
          <h1>Iniciar Sesión</h1>
          <p className="text-secondary">
            Accede para continuar tu viaje culinario
          </p>

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="p-3 shadow rounded"
          >

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

           {/* Botón Crear */}
            <Button
              type="submit"
              className="btn-naranja-outline w-100 text-naranja-emphasis bg-naranja-subtle mt-3"
            >
              Ingresar
            </Button>
          </Form>
          <article className="d-flex justify-content-center">
            <p className="me-3">¿No tienes una Cuenta?</p>
            <a href="#" className="accent">
              Regístrate
            </a>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Login;
