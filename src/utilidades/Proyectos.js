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
      Poner proyecto 3 aqui
    <h6 style={estilo}>
     Calculadora realizada en JavaScript & React.
    </h6>
    </div>

    <div className="maxWidth col">
      <h3 style={estilo}>
        Reloj 25+5
      </h3>
      Poner proyecto 2 aqui
      <h6 style={estilo}>
        Reloj 25+5 realizado en JavaScript & React.
      </h6>
    </div>

    <div className="maxWidth col">
      <h3 style={estilo}>
        vergadura
      </h3>
      Poner proyecto 3 aqui
      <h5 style={estilo}>
       KKKKKK
      </h5>
    </div>
  <h4><strong>ESTE APARTADO ESTA ACTUALMENTE EN DESARROLLO...</strong></h4>
  </div>

</div>

</>
     )
  }
}

export default Proyectos