import { Component } from "react";
import '../estiloCSS.css';
import Proyectos from "./Proyectos";
import SobreMi from "./Conocimientos";
import Inicio from "./Inicio";
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import Calculadora from "../calculadora/calculadora.js";
import ClockLogic from "../Clock25+5/Clock25+5";

import ProyectosEN from "../utilidades/ENG/ProyectosEN";
import SobreMiEN from "../utilidades/ENG/ConocimientosEN";
import InicioEN from "../utilidades/ENG/InicioEN";

/*componente*/
class ComponentePrincipal extends Component{
constructor(props){
  super(props);
  this.state = {
   activated: true
  }
};
render(){
let estiloLink = {
color: "white", 
textDecoration:"none",
marginLeft: 25,
backgroundColor: "rgb(20,20,20)",
border: "3px solid rgb(10,20,20)",
borderRadius: "7% 7% 7% 7%",
};


const idiomHandler=()=>{
   

   
   if(this.state.activated===false){
    this.setState({
    activated: true
   })
   } 

   if(this.state.activated===true){
     this.setState({
       activated: false
   })
   }

 

}


    return(
<>

<div className="BodyColor">

<div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
<link href="estiloCSS.css" rel="stylesheet" type="text/css"/>
</div>



<div>
<script src="../Documents/GitHub/BackEnd/Code.js" rel></script>
<script src="../GitHub/bootstrap-5.0.1-dist/js/bootstrap.bundle.min.js"></script>


<Router>
<div>
  <div className="Links">
      <ul className="Links2">
      <Link style={estiloLink} to='/Portfolio'><strong>INICIO</strong></Link>
        <a id="idiom" onClick={idiomHandler}>{this.state.activated?"ES":"EN"}</a>
      </ul>
  </div>
<Routes>
  
  <Route exact path='/Clock255' element={<ClockLogic/>}></Route>

  <Route exact path='/Calculadora' element={<Calculadora/>}></Route>
  
  <Route exact path='/Portfolio' element={this.state.activated?< Inicio />:<InicioEN/>}></Route> 

  <Route exact path='/proyectos' element={this.state.activated?<Proyectos/>:<ProyectosEN/>}></Route>

  <Route exact path='/Conocimientos' element={this.state.activated?<SobreMi/>:<SobreMiEN/>}></Route>

</Routes>
</div>
</Router>
</div>


<footer>
       <div className="line">
        
       <hr id="hr"/>
       
       </div>
       
       <div id="conjuntoRedes">
              <a href="https://github.com/pinino28" target="_blank" className="redes">
                GitHub
              </a>
            <a href="https://www.linkedin.com/in/cristian-dragone-20b975237/" target="_blank" className="redes">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/pi_nchet77/" target="_blank" className="redes">
              Instagram
            </a>
            <a href="https://www.freecodecamp.org/pinino28" target="_blank" className="redes">
              FreeCodeCamp
            </a>
            </div>
            <p id="Copyr">{this.state.activated?"©Hecho con React.js 2022":"©Maked with React.js 2022"}</p>
            </footer>
</div>
</>
    )
  }
}

export default ComponentePrincipal