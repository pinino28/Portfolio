import images from "./images.js"

const estado = {
    imagen2: 0
  };
  
  const galeria2 = (state=estado, action) =>{
    switch(action.type){
      
      case "Adelante2":
        if(typeof(images[state.imagen2+1])==="string"||state.imagen2<0){
        return{
          imagen2: state.imagen2+1
        }
      }else if(typeof(images[state.imagen2+1])!=="string"||state.imagen2>0){
        return{
          imagen2: state.imagen2+0
        }
      };
      
        case "Atras2":
          if(typeof(images[state.imagen2-1])==="string"){
        return{
          imagen2: state.imagen2-1
        }
      }else if(typeof(images[state.imagen2-1])!=="string"){
        return{
          imagen2: state.imagen2-0
        }
      }; 
        default: return state
    }
  }
  
  export default galeria2