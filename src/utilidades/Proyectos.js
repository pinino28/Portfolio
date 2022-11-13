import React, { Component } from "react"
import GaleriaComponente from "../galeria/galeria"
import GaleriaComponente2 from "../galeria2/galeria2"
import GaleriaComponente3 from "../galeria3/galeria3"
import '../estiloCSS.css'
import { Link } from "react-router-dom"


class Proyectos extends Component{
    
    render(){

        let estilo ={color: "white", textAlign: "center", textDecoration: "none"}
        let estilo2 = {color: "white", textAlign: "center", fontSize: "14px"}
        return(
           <>
           <script>{
        document.title = "Cristian Dragone - Proyectos"
      }</script>
        <div id="proyectos" className=" proyectos container">
          
  <div className="row align-items-start">

    <div id="pro1" className="maxWidth col">
    <Link to='/Calculadora' >
      <h3 style={estilo}>
     Calculadora
      </h3>
      <img title="Inspeccionar" className="proyectosImg" src={require("../imagenesMias/calculadora.jpg")}/>
    <h6 style={estilo}>
     Calculadora realizada en JavaScript & React.
    </h6>
    </Link>
    </div>

    <div id="pro2" className="maxWidth col">
    <Link to='/Clock255'>
      <h3 style={estilo}>
        Reloj 25+5
      </h3>
      <div className="proyectosImg">
      <img title="Inspeccionar" className="proyectosImg" src={require("../imagenesMias/Clock.png")}/>
      </div>
      <h6 style={estilo}>
        Reloj 25+5 realizado en JavaScript & React.
      </h6>
      </Link>
    </div>

    <div id="pro3" className="maxWidth col">
      <h3 style={estilo}>
        
      </h3>
      <h5 style={estilo}>Poner proyecto 3 aca</h5>
      <h5 style={estilo}>
       
      </h5>
    </div>
    <div id="pro4" className="maxWidth col">
    <h3 style={estilo}>
        
      </h3>
      <h5 style={estilo}>Poner proyecto 4 aca</h5>
      <h6 style={estilo}>
       
      </h6>
    </div>
    <br/><br/>
  <h4 style={estilo2}><strong>ESTE APARTADO ESTA ACTUALMENTE EN DESARROLLO...</strong></h4>
  <div id="hr1P">
  <hr id="hr1"></hr>
 </div>
  <br/><br/><br/>
  <h3 style={estilo2}>Tengo algunos proyectos mas publicados en mi <a href="https://github.com/pinino28" target="_blank" >
                GitHub
              </a> y mucho mas en desarrollo</h3>
  </div>

</div>

</>
     )
  }
}

export default Proyectos