import {Component} from "react";
import {Link} from "react-router-dom"
import $ from "jquery"
class Inicio extends Component{
    render(){
      let estiloLink = {
        color: "white", 
        textDecoration:"none",
        marginLeft: 25,
        backgroundColor: "rgb(20,20,20)",
        border: "3px solid rgb(10,20,20)",
        borderRadius: "7% 7% 7% 7%",
        fontSize:"20px",
        float: "left",
        marginLeft: "10%"
        };
        $(function(){
        $(".grande").hide()
        $(".grande").animate({width: "toggle"})
        $("#miName").hide()
        $("#miName").show(1000)
        $(".descripcion-breve").hide()
        $(setTimeout(function(){
        $(".descripcion-breve").show(1000)
      }, 2000));
        $("#linkn1").hide()
        $("#linkn2").hide()
        $(function(){
        setTimeout(function(){
          $("#linkn2").show(1000)
        },3000)

        setTimeout(function(){
          $("#linkn1").show(1000)
        },4000)
      })

      
        });
        return(
          <>
          
            <div id="intro" className="intro">
             <div className="box">
          
              <div className="imgP1">
                
                <img className="imgP img-fluid" alt="Me" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0B1vxOFetMbGVIyh46vqoEWN6yqxKcJfl9Q&usqp=CAU"/>
                
              </div>  
              
            </div>
            <div>
              
            <br/><br/>
            <p className="grande">
              <strong>Buenas!</strong>
            </p>
            <h3 id="miName" className="descripcion-breve"> <strong><em>Mi nombre es Cristian Dragone</em></strong></h3>
            <h5 className="descripcion-breve">
               Soy estudiante de programación y desarrollo web.📖
              <br/>
              🏠Actualmente resido en Rosario, Argentina.
              <br/>
               Mi otro hobby aparte de la programación y el desarrollo
              web es la electrónica⚡.
            </h5>
            <Link id="linkn1" style={estiloLink} to="/Proyectos"><strong>Proyectos</strong></Link>
            <Link id="linkn2" style={estiloLink} to="/Conocimientos"><strong>Conocimientos</strong></Link>
       <br/><br/>

       
      
            </div>
            
          </div>
         
          </>
        );
    }
};

export default Inicio