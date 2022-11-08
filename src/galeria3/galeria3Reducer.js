import images from "./images.js"

const estado = {
    imagen3: 0
  };
  
  const galeria3 = (state=estado, action) =>{
    switch(action.type){
      
      case "Adelante3":
        if(typeof(images[state.imagen3+1])==="string"||state.imagen3<0){
        return{
          imagen3: state.imagen3+1
        }
      }else if(typeof(images[state.imagen3+1])!=="string"||state.imagen3>0){
        return{
          imagen3: state.imagen3+0
        }
      };
      
        case "Atras3":
          if(typeof(images[state.imagen3-1])==="string"){
        return{
          imagen3: state.imagen3-1
        }
      }else if(typeof(images[state.imagen3-1])!=="string"){
        return{
          imagen3: state.imagen3-0
        }
      };
      
        default: return state
    }
  }
  
  export default galeria3