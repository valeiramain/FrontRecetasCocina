import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./components/pages/Inicio";
import CrearUsuario from "./components/pages/crearUsuario";
import DetalleReceta from "./components/pages/DetalleReceta";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import { useState, useEffect } from "react";
import "./App.css";
import ProtectorRutas from "./components/routes/ProtectorRutas";

function App() {
  //login del usuario
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuarioKey')) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage)

  useEffect(() => {
    // cuando cambia el login guardar el dato 
    sessionStorage.setItem('usuarioKey', JSON.stringify(usuarioLogueado))
  }, [usuarioLogueado])

  return (
    <main>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>} />
          <Route path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>} />
          <Route path='/detalleReceta' element={<DetalleReceta titulo={"Crear Receta"}></DetalleReceta>} />
          {/* <Route path='/detalleReceta/:id' element={<DetalleReceta></DetalleReceta>}/>  */}

          {/* Protector de Rutas  */}
          <Route path="/administrador" element={<ProtectorRutas usuarioLogueado={usuarioLogueado}></ProtectorRutas>}>
            <Route index element={<Administrador></Administrador>}></Route>
          </Route>
          {/* ======================== */}
            <Route path='/usuarios' element={<CrearUsuario titulo={"Crear Usuario"}></CrearUsuario>} />

          <Route path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Footer>
      </BrowserRouter>
    </main>
  );
}

export default App;
