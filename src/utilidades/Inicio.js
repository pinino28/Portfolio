import {Component} from "react";
import {Link} from "react-router-dom"
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
            <h3 className="descripcion-breve"> <strong><em>Mi nombre es Cristian Dragone</em></strong></h3>
            <h5 className="descripcion-breve">
               Soy estudiante de programación y desarrollo web.📖
              <br/>
              🏠Actualmente resido en Rosario, Argentina.
              <br/>
               Mi otro hobby aparte de la programación y el desarrollo
              web es la electrónica⚡.
            </h5>
            <Link style={estiloLink} to="/Proyectos"><strong>Proyectos</strong></Link>
            <Link style={estiloLink} to="/Conocimientos"><strong>Conocimientos</strong></Link>
       <br/><br/>

       
      
            </div>
            
          </div>
         
          </>
        );
    }
};

export default Inicio