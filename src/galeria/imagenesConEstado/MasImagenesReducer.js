//
//const Agregar="Agregar";
//const Quitar="Quitar";
//
//
//const AdelanteImagen =()=> {
//    return{
//        type: Agregar
//    }
//  }
//  
//  const AtrasImagen=()=>{
//  return{
//    type: Quitar
//    }    
//  }
//
//const defaultContador = {
//    contar: 0
//}
//
//const masImagenesReducer = (state=defaultContador, action)=>{
//    switch(action.type){
//        case Agregar: 
//        return{
//            contar: state.contar+1
//        }
//        case Quitar: 
//        return{
//            contar: state.contar-1
//        }
//
//
//        default: return state
//    }
//}
//
//export default masImagenesReducer
//export {AdelanteImagen, AtrasImagen}