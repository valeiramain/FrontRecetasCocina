import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./components/pages/Inicio";
import CrearUsuario from "./components/pages/crearUsuario";
import DetalleReceta from "./components/pages/DetalleReceta";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import { useState,useEffect } from "react";
import "./App.css";

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
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}/>
          <Route path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>} />
          <Route path='/detalleReceta/:id' element={<DetalleReceta></DetalleReceta>}/> 
          <Route path='/usuarios' element={<CrearUsuario></CrearUsuario>}/>
        <Route path='*' element={<Error404></Error404>}></Route> 
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </main>
  );
}

export default App;
