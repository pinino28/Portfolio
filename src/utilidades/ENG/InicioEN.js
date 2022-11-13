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
        border: "2px solid rgb(10,20,20)",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
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
     $(".grande").text("H|")
        },200));

        $(setTimeout(function(){
          $(".grande").text("He|")
             },400));

             $(setTimeout(function(){
              $(".grande").text("Hel|")
                 }, 600));

               $(setTimeout(function(){
                $(".grande").text("Hel;|")
                   }, 800));

                 $(setTimeout(function(){
                  $(".grande").text("Hel|")
                     }, 1300));

                     $(setTimeout(function(){
                      $(".grande").text("Hell|")
                         }, 1500));

                         $(setTimeout(function(){
                          $(".grande").text("Hello|")
                             }, 1600));

                             $(setTimeout(function(){
                              $(".grande").text("Hello!|")
                                 }, 1700));
                               
                                
                                   $(setTimeout(function(){
                                    $(".grande").text("Hello!")
                                       }, 1700));

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
       $("#linkn1").css("color", "black")
       $("#linkn1").css("borderColor", "white")
      })
      $("#linkn1").on("mouseout", function(){
        $("#linkn1").css("background-color", "black")
       $("#linkn1").css("color", "white")
       $("#linkn1").css("borderColor", "black")
      }) 


      $("#linkn2").on("mouseover", function(){
        $("#linkn2").css("background-color", "white")
        $("#linkn2").css("color", "black")
        $("#linkn2").css("borderColor", "white")
       })
       $("#linkn2").on("mouseout", function(){
         $("#linkn2").css("background-color", "black")
        $("#linkn2").css("color", "white")
        $("#linkn2").css("borderColor", "black")
       }) 
        });
        return(
          <>
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
            <h3 id="miName" className="descripcion-breve"> <strong><em>My name is Cristian Dragone</em></strong></h3>
            <h5 className="descripcion-breve">
              I'm a programming and web design student.📖
              <br/>
              🏠Currently living in Rosario, Argentina.
              <br/>
               My other hobby in addition to programming and web design is the electronic⚡.
            </h5>
            
            <Link id="linkn1" style={estiloLink} to="/Proyectos"><strong><em>PROJECTS</em></strong></Link>

            <Link id="linkn2" style={estiloLink} to="/Conocimientos"><strong><em>KNOWLEDGE</em></strong></Link>

       <br/><br/>

       
      
            </div>
            
          </div>
         
          </>
        );
    }
};

export default Inicio