import { Atras3, Adelante3 } from "./move3"
import { connect } from "react-redux/es/exports"
import images from "./images.js"
import "../estiloCSS.css"

const mostradorDeImagenOnose3=(state)=>{
return{
  imagen3: state.galeria3.imagen3
 }
}


const GaleriaComponente3=({imagen3, Adelante3, Atras3})=>{
  
 
  


  
    return(
      <div>
        <button className="leftButton" onClick={()=>Atras3()}>←</button>
        <button className="rightButton" onClick={()=>Adelante3()}>→</button>
        <img className="center" alt="watonniacson" src={images[imagen3]}/>
        
        
      </div>
    )
}


export default connect(mostradorDeImagenOnose3,{Adelante3, Atras3})(GaleriaComponente3);