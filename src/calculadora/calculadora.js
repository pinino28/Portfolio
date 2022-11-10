import React from "react";
import "./estiloCalculadora.css"

class Calculadora extends React.Component{
    constructor(props){
        //STATE 
        super(props);
        this.state = {
            //input almacenados en forma de cadenas, recuerda cambiarlo si es necesario.
            botones: [
                
                {
                    "id": "seven",
                    "digit": "7"
                },
                {
                    "id": "eight",
                    "digit": "8"
                },
                {
                    "id": "nine",
                    "digit": "9"
                },
                
                {
                    "id": "four",
                    "digit": "4"
                },
                {
                    "id": "five",
                    "digit": "5"
                },
                {
                    "id": "six",
                    "digit": "6"
                },
    
                {
                    "id": "one",
                    "digit": "1"
                },
                {
                    "id": "two",
                    "digit": "2"
                },
                {
                    "id": "three",
                    "digit": "3"
                },
                
                {
                    "id": "zero",
                    "digit": "0"
                },
                {
                    'id': "add",
                    "digit": "+"
                },
                {
                    "id": "subtract",
                    "digit": "-"
                },
                {
                    "id": "divide",
                    "digit": "/"
                },
                {
                    "id": "multiply",
                    "digit": "*"
                },
                {
                    "id": "decimal",
                    "digit": "."
                },
                {
                    "id":"clear",
                    "digit":"clear"
                },
                {
                    "id": "equals",
                    "digit": "="
                },
                
            ],
                 input: "0",
                 resultado: "0"
        }
        this.ingresaNumero = this.ingresaNumero.bind(this)
    }
    ingresaNumero(e){
    
    return()=>{
        const ident = e
        if( (Number(ident)===0||Number(ident)===1||Number(ident)===2||
        Number(ident)===3||Number(ident)===4||Number(ident)===5||
        Number(ident)===6||Number(ident)===7||Number(ident)===8||Number(ident)===9)&&(this.state.input.length<46)){
            if(ident!=="0"&&this.state.input[0]==="0"&&this.state.input.length<2){
                //Manejo del cero y cero coma
            this.setState({
                input: this.state.input.replace(this.state.input[0], ident)
              })
            }else if(this.state.input[0]!=="0"&&this.state.input.length<2){
                this.setState({
                    input: this.state.input.toString().concat(ident),
                  })
            }else if(ident&&this.state.input.length>=2){
                this.setState({
                    input: this.state.input.toString().concat(ident),
                  })
            }
        }else{
        //cuando aprieto el boton, hacer un nuevo array con solo
        //la parte final del arreglo anterior y agregarle el signo suma al apretar el boton
        //cada vez que aprieto algun signo de operacion
        //logica de la calculadora. Si necesito agregar algun boton modificar aca abajo.
          if((ident==="+"&&this.state.input[this.state.input.length -1]!=="+")){
            if((ident==="+"&&this.state.input[this.state.input.length -1]==="-")
            ||(ident==="+"&&this.state.input[this.state.input.length -1]==="*")
            ||(ident==="+"&&this.state.input[this.state.input.length -1]==="/")
            ||(this.state.input[this.state.input.length -1]===".")){
                //regex selecciona los input como la multiplicacion suma etc
                const regex = /\W/
         this.setState({
            //input tiene 2 cadenas una es un slice que copia todo el arreglo menos el ultimo digito. A esto le suma el ultimo digito reemplazado
            //con .replace()
              
            input:  this.state.input.slice(0, this.state.input.length-1)+this.state.input[this.state.input.length -1].replace(regex, ident)
         })
          }else{
              this.setState({
                  input: this.state.input.concat(ident)
               })
          }//si aprieto alguna operacion deberia crease un signo de esa operacion, mas no una cadena con el simbolo
        
           }else if((ident ==="-"&&this.state.input[this.state.input.length -1]!=="-")){
            //si se encuentra un mas multiplicacion o division hay que reemplazarlo. Ese es el plan
            if((this.state.input[this.state.input.length -1]==="+")
            ||(this.state.input[this.state.input.length -1]==="*")
            ||(this.state.input[this.state.input.length -1]==="/")
            ||(this.state.input[this.state.input.length -1]===".")){
                const regex = /\W/
               
                this.setState({
                    input: this.state.input.slice(0, this.state.input.length-1)+this.state.input[this.state.input.length -1].replace(regex, ident),
                 })
            }else{
                this.setState({
                    input: this.state.input.concat(ident)
                 })
            }
           }else if((ident ==="*"&&this.state.input[this.state.input.length -1]!=="*")){
              if((this.state.input[this.state.input.length -1]==="+")
              ||(this.state.input[this.state.input.length -1]==="-")
              ||(this.state.input[this.state.input.length -1]==="/")
              ||(this.state.input[this.state.input.length -1]===".")){
                const regex = /\W/
                this.setState({
                    input:  this.state.input.slice(0, this.state.input.length-1)+this.state.input[this.state.input.length -1].replace(regex, ident)
                 })
           }else{
                this.setState({
                    input: this.state.input.concat(ident)
                 })
            }
            //necesito encontrar una forma de evitar que cuando pongo un mas o un menos al principio la division no lo reemplace, por que si no
            //daria un error....
          }else if((ident ==="/"&&this.state.input[this.state.input.length -1]!=="/")){
    //si input 0 es igual a uno de los tres input y ademas input.length es igual a 1 no debe dibujar nada
    //podria definir esta condicion en las lines de abajo.
    
          if((this.state.input[this.state.input.length -1]==="+")
          ||(this.state.input[this.state.input.length -1]==="-")
          ||(this.state.input[this.state.input.length -1]==="*")
          ||(this.state.input[this.state.input.length -1]===".")){
            const regex = /\W/
                this.setState({
                    input:  this.state.input.slice(0, this.state.input.length-1)+this.state.input[this.state.input.length -1].replace(regex, ident)
                 })
          }else if((this.state.input.length>0)){
            this.setState({
                input: this.state.input.toString().concat(ident)
             })
          }
        }
      
      //puedo hacer que si ingreso un numero me permita usarlo, pero al ingresar un signo se resetee la condicion
           else if((ident ===".")&&(!this.state.input.slice(this.state.input.indexOf("+"), this.state.input.length).includes("."))
              &&(!this.state.input.slice(this.state.input[0], this.state.input.length).includes("."))
              //otro problema es que las operaciones se mantienen en un mismo string..... eso es el problema
             ){
            if((this.state.input[this.state.input.length -1]==="+")
            ||(this.state.input[this.state.input.length -1]==="-")
            ||(this.state.input[this.state.input.length -1]==="*")
            ||(this.state.input[this.state.input.length -1]==="/")
               
            ){
                const regex = /\W/
                this.setState({
                    input:  this.state.input.slice(0, this.state.input.length-1)+this.state.input[this.state.input.length -1].replace(regex, ident)
                 })
            }else if((this.state.input[this.state.input.length -1]!=="+")
            ||(this.state.input[this.state.input.length -1]!=="-")
            ||(this.state.input[this.state.input.length -1]!=="*")
            ||(this.state.input[this.state.input.length -1]!=="/")
            ||(!this.state.input.slice(this.state.input.indexOf("+"), this.state.input.length).includes("."))
                     
                    ){
                this.setState({
                    input: this.state.input.concat(ident)
                 })
            }
     
          
          
        }else if((ident === "=")){
            var cadenaEvaluada = eval(this.state.input.substring(0, this.state.input.length));
            this.setState({
                input: cadenaEvaluada.toString(),
                resultado: cadenaEvaluada
            })
        }else if((ident === "clear")){
            this.setState({
                input: "0",
                resultado: "0"
            })
        }
        
        //si pongo una vez el mas, no se podra dibujar de vuelta en pantalla, mas si podran dibujarse otros elementos.
    }
     // Number(str)
    
    
    }
    }
    
    //RENDER
    render(){
        return(
            <div>
                
               <h2>Calculator.</h2><br/>
               <div className="content">
               <div className="calculator">
                <div id="display" className="screen">
               <div id="result">{this.state.input}</div>
               </div>
               <button id={this.state.botones[15].id} onClick={this.ingresaNumero(this.state.botones[15].digit)}>{this.state.botones[15].digit}</button>
               <button id={this.state.botones[12].id} onClick={this.ingresaNumero(this.state.botones[12].digit)}>{this.state.botones[12].digit}</button><br/>
                  <button id={this.state.botones[0].id} onClick={this.ingresaNumero(this.state.botones[0].digit)}>{this.state.botones[0].digit}</button>
                  <button id={this.state.botones[1].id} onClick={this.ingresaNumero(this.state.botones[1].digit)}>{this.state.botones[1].digit}</button>
                  <button id={this.state.botones[2].id} onClick={this.ingresaNumero(this.state.botones[2].digit)}>{this.state.botones[2].digit}</button>
                  
                  <button id={this.state.botones[13].id} onClick={this.ingresaNumero(this.state.botones[13].digit)}>{this.state.botones[13].digit}</button>
                  <br/>
                  <button id={this.state.botones[3].id} onClick={this.ingresaNumero(this.state.botones[3].digit)}>{this.state.botones[3].digit}</button>
                  <button id={this.state.botones[4].id} onClick={this.ingresaNumero(this.state.botones[4].digit)}>{this.state.botones[4].digit}</button>
                  <button id={this.state.botones[5].id} onClick={this.ingresaNumero(this.state.botones[5].digit)}>{this.state.botones[5].digit}</button>
                  <button id={this.state.botones[10].id} onClick={this.ingresaNumero(this.state.botones[10].digit)}>{this.state.botones[10].digit}</button>
                  <br/>
                  <button id={this.state.botones[6].id} onClick={this.ingresaNumero(this.state.botones[6].digit)}>{this.state.botones[6].digit}</button>
                  <button id={this.state.botones[7].id} onClick={this.ingresaNumero(this.state.botones[7].digit)}>{this.state.botones[7].digit}</button>
                  <button id={this.state.botones[8].id} onClick={this.ingresaNumero(this.state.botones[8].digit)}>{this.state.botones[8].digit}</button>
                  <button id={this.state.botones[11].id} onClick={this.ingresaNumero(this.state.botones[11].digit)}>{this.state.botones[11].digit}</button>
                  <br/>
                  <button id={this.state.botones[14].id} onClick={this.ingresaNumero(this.state.botones[14].digit)}>{this.state.botones[14].digit}</button>
                  <button id={this.state.botones[9].id} onClick={this.ingresaNumero(this.state.botones[9].digit)}>{this.state.botones[9].digit}</button>
                  <button id={this.state.botones[16].id} onClick={this.ingresaNumero(this.state.botones[16].digit)}>{this.state.botones[16].digit}</button>
                  </div>
                  </div>
            </div>
        )
      }
}

export default Calculadora