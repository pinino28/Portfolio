import React, { Component } from "react"
import  "../../estiloCSS.css"
import { Link } from "react-router-dom"


class Proyectos extends Component{
    
    render(){

        let estilo ={color: "white", textAlign: "center"}

        return(
           <>
        <div id="proyectos" className=" proyectos container">
          
  <div className="row align-items-start">

    <div className="maxWidth col">
      <h3 style={estilo}>
     Calculator
      </h3>
      <Link to='/Calculadora' ><img title="Inspeccionar" className="proyectosImg" src={require("../../imagenesMias/calculadora.jpg")}/></Link>
    <h6 style={estilo}>
     Calculator maked in JavaScript & React.
    </h6>
    </div>

    <div className="maxWidth col">
      <h3 style={estilo}>
        Clock 25+5
      </h3>
      <div className="proyectosImg">
      <Link to='/Clock255'><img title="Inspeccionar" className="proyectosImg" src={require("../../imagenesMias/Clock.png")}/></Link>
      </div>
      <h6 style={estilo}>
        Clock 25+5 maked in JavaScript & React.
      </h6>
    </div>

    <div className="maxWidth col">
      <h3 style={estilo}>
        
      </h3>
      <h5 style={estilo}></h5>
      <h5 style={estilo}>
       
      </h5>
    </div>
    <div className="maxWidth col">
    <h3 style={estilo}>
        
      </h3>
      <h5 style={estilo}></h5>
      <h6 style={estilo}>
       
      </h6>
    </div>
    <br/><br/>
  <h4 style={estilo}><strong>THIS SECTION IS CURRENTLY UNDER DEVELOPMENT...</strong></h4>
  
  <hr id="hr1"></hr>
 
  <br/><br/><br/>
  <h3 style={estilo}>I have others projects in my GitHub <a href="https://github.com/pinino28" target="_blank" >
                GitHub
              </a></h3>
  </div>

</div>

</>
     )
  }
}

export default Proyectos