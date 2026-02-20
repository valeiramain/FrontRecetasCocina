import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./components/pages/Inicio";
import CrearUsuario from "./components/pages/CrearUsuario";
import DetalleReceta from "./components/pages/DetalleReceta";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Error404 from "./components/pages/Error404";
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path='/usuarios' element={<CrearUsuario></CrearUsuario>}/>
          {/* <Route path='/' element={<Inicio></Inicio>}/>
          <Route path='/detalleReceta/:id' element={<DetalleReceta></DetalleReceta>}/> */}
        {/* <Route path='*' element={<Error404></Error404>}></Route> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </main>
  );
}

export default App;
