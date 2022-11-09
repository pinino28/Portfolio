import { Component } from "react";
import '../estiloCSS.css';
import Proyectos from "./Proyectos";
import SobreMi from "./Conocimientos";
import Inicio from "./Inicio";
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'

/*componente*/
class ComponentePrincipal extends Component{

render(){
let estiloLink = {
color: "white", 
textDecoration:"none",
marginLeft: 25,
backgroundColor: "rgb(20,20,20)",
border: "3px solid rgb(10,20,20)",
borderRadius: "7% 7% 7% 7%",
};
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
  <div className="sticky-top Links">
      <ul className="Links2">
        
      <Link style={estiloLink} to='/Portfolio'><strong>INICIO</strong></Link>
        
      </ul>
  </div>
<Routes>
  
  <Route exact path='/Portfolio' element={< Inicio />}></Route> 

  <Route exact path='/proyectos' element={<Proyectos/>}></Route>

  <Route exact path='/Conocimientos' element={<SobreMi/>}></Route>

</Routes>
</div>
</Router>
</div>


<footer>
       <div className="line">
        
       <hr/>
       </div>
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
            </footer>
</div>

</>
    )
  }
}

export default ComponentePrincipal