const urlUsuarios = import.meta.env.VITE_USUARIO;


export const crearUsuarioApi = async(usuario) =>{
     try {
    const respuesta = await fetch(urlUsuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("usuarioKey")).token}`
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};


//LOGIN USUARIO: use usa POST xq se envian datos
export const login = async (usuario) => {
  try {
    const respuesta = await fetch(urlUsuarios + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //mando email y password en el body
      body: JSON.stringify(usuario),
    });
    //la respuesta tiene nombre usuario y token
    
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
