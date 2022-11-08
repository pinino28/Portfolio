import { Atras2, Adelante2 } from "./move2"
import { connect } from "react-redux/es/exports"
import images from "./images.js"
import "../estiloCSS.css"

const mostradorDeImagenOnose2=(state)=>{
return{
  imagen2: state.galeria2.imagen2
 }
}


const GaleriaComponente2=({imagen2, Adelante2, Atras2})=>{
  

  
    return(
      <div>
        <button className="leftButton" onClick={()=>Atras2()}>←</button>
        <button className="rightButton" onClick={()=>Adelante2()}>→</button>
        <img className="center" alt="watonniacson" src={images[imagen2]}/>
      </div>
    )
}


export default connect(mostradorDeImagenOnose2,{Adelante2, Atras2})(GaleriaComponente2);