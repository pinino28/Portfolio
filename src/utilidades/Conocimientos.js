import {Component} from "react";
import '../estiloCSS.css'
import $ from "jquery"
class SobreMi extends Component{
  render(){
    let color = {color: "white"};
    let mouseOnEstilo = {textAlign:"center", fontSize:"60px", color: "black"};
   //APARTADO L E N G U A J E S
    $(function() {
      //Typescript texto muestra
      $("#typescriptText").hide()
      $("#javascriptText").hide()
      $("#typescript").on("mouseover", function(){
       
        $("#typescriptText").show()
        
      })
      $("#typescript").on("mouseout", function(){
       
       $("#typescriptText").hide()
      });

      //JavaScript texto muestra
      $("#javascript").on("mouseover", function(){
       
        $("#javascriptText").show()
       });
       $("#javascript").on("mouseout", function(){
        
        $("#javascriptText").hide()
       });

       //APARTADO F R O N T - E N D

      $(function(){
        $("#d3Text").hide()
        $("#reactText").hide()
        $("#cssText").hide()
        $("#jQueryText").hide()

        //para D3
        $("#d3").on("mouseover", function(){
          
          $("#d3Text").show()
        })

        $("#d3").on("mouseout", function(){
         
          $("#d3Text").hide()
        })

        //para React
        $("#react").on("mouseover", function(){
         
          $("#reactText").show()
        })

        $("#react").on("mouseout", function(){
         
          $("#reactText").hide()
        })

        //para CSS
        $("#css").on("mouseover", function(){
         
          $("#cssText").show()
        })

        $("#css").on("mouseout", function(){
         
          $("#cssText").hide()
        })

        //para jQuery
        $("#jQuery").on("mouseover", function(){
          
          $("#jQueryText").show()
        })

        $("#jQuery").on("mouseout", function(){
         
          $("#jQueryText").hide()
        })
      })

    });
    
    //APARTADO U T I L I D A D E S
    $(function(){
      $("#githubText").hide()
      $("#gitText").hide()
      $("#VScodeText").hide()
     
     //para github
      $("#github").on("mouseover", function(){
       
        $("#githubText").show()
      })

      $("#github").on("mouseout", function(){
      
        $("#githubText").hide()
      })

     //para git
      $("#git").on("mouseover", function(){
        
        $("#gitText").show()
      })
  
      $("#git").on("mouseout", function(){
       
        $("#gitText").hide()
      })

     //para VScode
      $("#VScode").on("mouseover", function(){
       
        $("#VScodeText").show()
      })
     
      $("#VScode").on("mouseout", function(){
     
        $("#VScodeText").hide()
      })
    });

    //APARTADO D A T A B A S E S
    $(function(){
      $("#mysqlText").hide()
      $("#mysql").on("mouseover", function(){
     
       $("#mysqlText").show()
      })
       
      $("#mysql").on("mouseout", function(){
       
       $("#mysqlText").hide()
      })
    })
    return(
        <div id="final">
          <script>{
        document.title = "Cristian Dragone - Conocimiento"
      }</script>
        <h1 align="center" style={color}>  
          <b><e>Conocimientos en:</e></b>
        </h1>
<div className="container cajasLineamiento">
        <div className="row">

        <div className="cajas col">
          <div>
              <h4>
             <strong>Lenguajes</strong>
             </h4>

            <div>
             
            
             <img id="typescript" src="https://cdn-icons-png.flaticon.com/512/6422/6422234.png" alt="TypeScript" className="imgLenguaje"/>
             
            
             <img id="javascript" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Unofficial_JavaScript_logo.svg" alt="JavaScript" className="imgLenguaje"/>
             
             
            </div>
            </div>
          </div>

          <div className="cajas col">
              <div>
                <h4>
                  <strong>FrontEnd</strong>
                </h4>
                  <img id="d3" src="https://raw.githubusercontent.com/d3/d3-logo/master/d3-black.png" alt="D3" className="imgFront"/>
                  <img id="react" src="https://www.svgrepo.com/show/327388/logo-react.svg" alt="React" className="imgFront"/>
                  <img id="css" src="https://cdn.iconscout.com/icon/free/png-256/css-logo-3002030-2496146.png" alt="CSS" className="imgFront"/>
                  <img id="jQuery" src="http://cdn.onlinewebfonts.com/svg/img_193692.png" alt="jQuery" className="imgFront"/>
       
                  
              </div>
          </div>

          <div className="cajas col">
            <div>
              <h4>
                 <strong>
                   BackEnd
                 </strong>
              </h4>
               <em>Error 503</em>
               <img src="https://www.guidestar.org/App_Themes/MainSite2/images/loading_img.gif" className="gifLoading"/>
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
                <img id="github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" className="imgUtilidades"/>
                <img id="git" src="https://git-scm.com/images/logos/downloads/Git-Icon-Black.png" alt="Git" className="imgUtilidades"/>
                <img id="VScode" src="https://cdn.iconscout.com/icon/free/png-256/vs-code-2336946-1982827.png" alt="VScode" className="imgUtilidades"/>
                
            </div>
          </div>

          <div className="cajas col">
          <div>
           <h4>
            <strong>
            DataBases
            </strong>
           </h4>
           
          <img id="mysql" src="https://pngimg.com/uploads/mysql/mysql_PNG3.png" alt="Git" className="imgUtilidades"/>
          </div>
          </div>

          <p id="typescriptText" style={mouseOnEstilo}><strong>TypeScript</strong></p>
          <p id="d3Text" style={mouseOnEstilo}><strong>D3<br/>(dataVisualization)</strong></p>
        
        <p id="reactText" style={mouseOnEstilo}><strong>React</strong></p>

        <p id="cssText" style={mouseOnEstilo}><strong>Css3</strong></p>

        <p id="jQueryText" style={mouseOnEstilo}><strong>jQuery</strong></p>
        <p id="githubText" style={mouseOnEstilo}><strong>GitHub</strong></p>
                <p id="gitText" style={mouseOnEstilo}><strong>Git</strong></p>
                <p id="VScodeText" style={mouseOnEstilo}><strong>VScode</strong></p>
                <p id="mysqlText" style={mouseOnEstilo}><strong>MySql</strong></p>
                <p id="javascriptText" style={mouseOnEstilo}><strong>JavaScript</strong></p>
        </div>
        
  </div>

        </div>
    );
  }   
}

export default SobreMi