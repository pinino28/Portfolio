import {Component} from "react";
import '../estiloCSS.css'
class SobreMi extends Component{
  render(){
    let color = {color: "white"}
    return(
        <div id="final">
        <h1 align="center" style={color}>  
          <b><e>Conocimientos en:</e></b>
        </h1>
<div className="container cajasLineamiento">
        <div className="row">

        <div className="cajas col">
              <h4>
             <strong>Lenguajes</strong>
             </h4>

            <div>
             <img id="typescript" src="https://cdn-icons-png.flaticon.com/512/6422/6422234.png" alt="TypeScript" className="imgLenguaje"/>
             <img id="javascript" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Unofficial_JavaScript_logo.svg" alt="JavaScript" className="imgLenguaje"/>
            </div>
          </div>

          <div className="cajas col">
            <div>
              <h4>
             <strong>FrontEnd</strong>
             </h4>
           <img src="https://raw.githubusercontent.com/d3/d3-logo/master/d3-black.png" alt="JavaScript" className="imgFront"/>
           <img src="https://www.svgrepo.com/show/327388/logo-react.svg" alt="JavaScript" className="imgFront"/>
           <img src="https://cdn.iconscout.com/icon/free/png-256/css-logo-3002030-2496146.png" alt="JavaScript" className="imgFront"/>
           <img src="http://cdn.onlinewebfonts.com/svg/img_193692.png" alt="JavaScript" className="imgFront"/>
            </div>
          </div>

          <div className="cajas col">
          <div>
            <h4><strong>
           BackEnd
           </strong>
           </h4>
           <em>Error 503</em><img src="https://www.guidestar.org/App_Themes/MainSite2/images/loading_img.gif" className="gifLoading"/>
<br/><p>(en proceso)</p>
          </div>
          </div>

          <div className="cajas col">
          <div>
           <h4>
            <strong>
            Utilidades
            </strong>
           </h4>
           <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" className="imgUtilidades"/>
          <img src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" alt="Git" className="imgUtilidades"/>
          <img src="https://cdn.iconscout.com/icon/free/png-256/vs-code-2336946-1982827.png" alt="VScode" className="imgUtilidades"/>
          </div>
          </div>

          <div className="cajas col">
          <div>
           <h4>
            <strong>
            DataBases
            </strong>
           </h4>
          <img src="https://pngimg.com/uploads/mysql/mysql_PNG3.png" alt="Git" className="imgUtilidades"/>
          </div>
          </div>

          

        </div>
        
  </div>

        </div>
    );
  }   
}

export default SobreMi