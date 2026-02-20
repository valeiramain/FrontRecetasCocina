const urlUsuarios = import.meta.env.VITE_USUARIO;


export const crearUsuarioApi = async() =>{
    try{
        const respuesta = await fetch(urlUsuarios)
    }catch (error){
        console.error(error);
    }
}