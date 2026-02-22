const urlUsuarios = import.meta.env.VITE_USUARIO;


export const crearUsuarioApi = async(usuario) =>{
     try {
    const respuesta = await fetch(urlUsuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("usuarioKey")).token}`
      },
      body: JSON.stringify(urlUsuarios),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
