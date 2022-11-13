import {Component} from "react";
import {Link} from "react-router-dom"
import $ from "jquery"
class Inicio extends Component{
    render(){
      let estiloLink = {
        color: "white", 
        textDecoration:"none",
        marginLeft: 25,
        backgroundColor: "#4772C9",
        border: "2px solid rgb(10,20,20, 0)",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        fontSize:"20px",
        float: "left",
        marginLeft: "10%"
        };
        $(function(){

       
      
     // function wason(){
     //  var grande="Buenas!"    
     //  var r;
     //      for (let i = 0; i < grande.length; i++) {
     //       r+=grande[i]
     //        $(".grande").text(r)
     //      };
     //   return r
     //   
     //  };
     //  wason()
    $(setTimeout(function(){
     $(".grande").text("B|")
        },200));

        $(setTimeout(function(){
          $(".grande").text("Bu|")
             },400));

             $(setTimeout(function(){
              $(".grande").text("Bue|")
                 }, 600));

               $(setTimeout(function(){
                $(".grande").text("Buem|")
                   }, 800));

                 $(setTimeout(function(){
                  $(".grande").text("Bue|")
                     }, 1300));

                     $(setTimeout(function(){
                      $(".grande").text("Buen|")
                         }, 1500));

                         $(setTimeout(function(){
                          $(".grande").text("Buena|")
                             }, 1600));

                             $(setTimeout(function(){
                              $(".grande").text("Buenas|")
                                 }, 1700));
                               
                                $(setTimeout(function(){
                                 $(".grande").text("Buenas!|")
                                    }, 1900));

                                   $(setTimeout(function(){
                                    $(".grande").text("Buenas!")
                                       }, 1900));

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

      $("#linkn1").on("mouseover", function(){
        $("#linkn1").css("background-color", "white")
        $("#linkn1").css("color", "#4772C9")
      })
      $("#linkn1").on("mouseout", function(){
        $("#linkn1").css("background-color", "#4772C9")
        $("#linkn1").css("color", "white")
      }) 


      $("#linkn2").on("mouseover", function(){
        $("#linkn2").css("background-color", "white")
        $("#linkn2").css("color", "#4772C9")
       })
       $("#linkn2").on("mouseout", function(){
         $("#linkn2").css("background-color", "#4772C9")
        $("#linkn2").css("color", "white")
       }) 
        });
        return(
          <>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
          <script>{
        document.title = "Cristian Dragone"
      }</script>
            <div id="intro" className="intro">

             <div className="box">
              <div className="imgP1">
                <img className="imgP img-fluid" alt="Me" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0B1vxOFetMbGVIyh46vqoEWN6yqxKcJfl9Q&usqp=CAU"/>
              </div>  
             </div>

            <div>
            <br/><br/>
            <h5 className="grande">
              <strong></strong>
            </h5>
            <h3 id="miName" className="descripcion-breve"> <strong><em>Mi nombre es Cristian Dragone</em></strong></h3>
            <h5 className="descripcion-breve">
               Soy estudiante de programación y desarrollo web.📖
              <br/>
              🏠Actualmente resido en Rosario, Argentina.
              <br/>
               Mi otro hobby aparte de la programación y el desarrollo
              web es la electrónica⚡.
            </h5>
            
            <Link id="linkn1" style={estiloLink} to="/Proyectos"><strong><em>PROYECTOS</em></strong></Link>

            <Link id="linkn2" style={estiloLink} to="/Conocimientos"><strong><em>CONOCIMIENTOS</em></strong></Link>

       <br/><br/>

       
      
            </div>
            
          </div>
         
          </>
        );
    }
};

export default Inicio