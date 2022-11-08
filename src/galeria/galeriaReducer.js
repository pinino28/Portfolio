import images from "./images.js";
const estado = {
  imagen: 0,
};


const galeria = (state=estado, action) =>{
  switch(action.type){
    //accion
      case "Adelante":
      if(typeof(images[state.imagen+1])==="string"||state.imagen<0){
      return{
        imagen: state.imagen+1
      }
    }else if(typeof(images[state.imagen+1])!=="string"||state.imagen>0){
      return{
        imagen: state.imagen+0
      }
    };
    
      case "Atras":
        if(typeof(images[state.imagen-1])==="string"){
      return{
        imagen: state.imagen-1
      }
    }else if(typeof(images[state.imagen-1])!=="string"){
      return{
        imagen: state.imagen-0
      }
    };
  
      

      default: return state
  }
}

export default galeria