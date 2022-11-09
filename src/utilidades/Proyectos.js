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
      <h5 style={estilo}>Poner proyecto 1 aca</h5>
    <h6 style={estilo}>
     Calculadora realizada en JavaScript & React.
    </h6>
    </div>

    <div className="maxWidth col">
      <h3 style={estilo}>
        Reloj 25+5
      </h3>
      <h5 style={estilo}>Poner proyecto 2 aca</h5>
      <h6 style={estilo}>
        Reloj 25+5 realizado en JavaScript & React.
      </h6>
    </div>

    <div className="maxWidth col">
      <h3 style={estilo}>
        
      </h3>
      <h5 style={estilo}>Poner proyecto 3 aca</h5>
      <h5 style={estilo}>
       
      </h5>
    </div>
    <div className="maxWidth col">
    <h3 style={estilo}>
        
      </h3>
      <h5 style={estilo}>Poner proyecto 4 aca</h5>
      <h6 style={estilo}>
       
      </h6>
    </div>
  <h4 style={estilo}><strong>ESTE APARTADO ESTA ACTUALMENTE EN DESARROLLO...</strong></h4>
  <br/>
  <h3 style={estilo}>Tengo proyectos publicados en mi <a href="https://github.com/pinino28" target="_blank" >
                GitHub
              </a></h3>
  </div>

</div>

</>
     )
  }
}

export default Proyectos