//
//import { Component } from "react";
//import { connect } from "react-redux/es/exports";
//import { AdelanteImagen, AtrasImagen } from "./MasImagenesReducer"
////I M P O R T A C I O N E S
//
//
////mapStateToProps
//const mapStateToProps=(state)=>{
//  return{
//         contar: state.masImagenesReducer.contar
//  }
//}
//
//
////otro componente//otro componente//otro componente//otro componente//otro componente//otro componente
//
////otro componente//otro componente//otro componente//otro componente//otro componente//otro componente
//
//
//
//
////C O M P O N E N T E                                                               //C O M P O N E N T E
//                     //C O M P O N E N T E                     //C O M P O N E N T E 
//                                          //C O M P O N E N T E
//                     //C O M P O N E N T E                     //C O M P O N E N T E
////C O M P O N E N T E                                                               //C O M P O N E N T E  
//class ComponenteAgregarImagen extends Component{
// constructor(props){
//    super(props);
//    this.state={
//        input: "",
//        imagenes:[],
//    }
//    this.handleChange = this.handleChange.bind(this);
//    this.submitImage = this.submitImage.bind(this);
//  }
//
//  handleChange(event) {
//    this.setState({
//   input: event.target.value
//  })
// };
// 
//  submitImage() {
//   const subirImagen = this.state.input;
//   this.setState({
//    input:"",
//    imagenes: this.state.imagenes.concat(subirImagen)
//   })
//  }; 
//  
//  render(){
//    return(
//        <>
//          <input
//          value={this.state.input}
//          onChange={this.handleChange}
//          placeholder="Ingresa un link de imagen"
//          />
//          <button onClick={this.submitImage}>AgregarImagen</button><br/>
//          <button onClick={this.props.AtrasImagen}>atras</button>
//          <button onClick={this.props.AdelanteImagen}>adelante</button> <br/>
//          <img src={this.state.imagenes[this.props.contar]}/>
//        </>
//    )
//  }
//};
////C O M P O N E N T E                                                               //C O M P O N E N T E
//                     //C O M P O N E N T E                     //C O M P O N E N T E 
//                                          //C O M P O N E N T E
//                     //C O M P O N E N T E                     //C O M P O N E N T E
////C O M P O N E N T E                                                               //C O M P O N E N T E
//
//
//
//
//export default connect(mapStateToProps,{AdelanteImagen, AtrasImagen})(  ComponenteAgregarImagen)