import React, { Component } from "react"
import GaleriaComponente from "../galeria/galeria"
import GaleriaComponente2 from "../galeria2/galeria2"
import GaleriaComponente3 from "../galeria3/galeria3"
import '../estiloCSS.css'


class Proyectos extends Component{
    
    render(){

        let estilo ={color: "white", textAlign: "center"}

        return(
           <>
        <div id="proyectos" className=" proyectos container">
          
  <div className="row align-items-start">

    <div className="maxWidth col">
      <h3 style={estilo}>
     Calculadora
      </h3>
    <GaleriaComponente3/>
    <h6 style={estilo}>
     Calculadora realizada en JavaScript & React.
    </h6>
    </div>

    <div className="maxWidth col">
      <h3 style={estilo}>
        Reloj 25+5
      </h3>
      <GaleriaComponente2/>
      
      <h6 style={estilo}>
        Reloj 25+5 realizado en JavaScript & React.
      </h6>
    </div>

    <div className="maxWidth col">
      <h3 style={estilo}>
        vergadura
      </h3>
      <GaleriaComponente />
      <h5 style={estilo}>
       KKKKKK
      </h5>
    </div>
  
  </div>

</div>

</>
     )
  }
}

export default Proyectos