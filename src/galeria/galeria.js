import { Atras, Adelante} from "./move"
import { connect } from "react-redux/es/exports"
import images from "./images.js"
import '../estiloCSS.css'
//import ComponenteAgregarImagen from "./imagenesConEstado/ScriptMasImagen"
const mostradorDeImagenOnose=(state)=>{
return{
  imagen: state.galeria.imagen
 }
}



const GaleriaComponente=({imagen, Adelante, Atras})=>{

 
  
    return(
      <div>

        <button className="leftButton" onClick={()=>Atras()}>←</button>
        <button className="rightButton" onClick={()=>Adelante()}>→</button>
        <img className="center" alt="wason"  src={images[imagen]}/>
        
      </div>
    )
}


export default connect(mostradorDeImagenOnose,{Adelante, Atras})(GaleriaComponente);