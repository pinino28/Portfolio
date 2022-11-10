import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useState, useEffect} from 'react';
import "./estiloClock.css"
const ClockOp=({idLab, idInc, idDec, idLen, nameLength, valor, boton1, boton2, classN})=>{
    return( 
        <>
    <h2 id={idLab}>{nameLength}</h2>
    <button className={classN} onClick={boton1} id={idDec}>down</button>
    <h3 id={idLen}>{valor}</h3>
    <button className={classN} onClick={boton2} id={idInc}>up</button>
        </>
 )
}


var sessionInterval;
var breakInterval;


const ClockLogic=()=>{
    
  const [isActive, setIsActive] = useState(false)
  const [isSession, setIsSession] = useState(true)
  const [session, putSession] = useState(25);
  const [breakk, putBreakk] = useState(5);
  const [sessionDur, setSessionDur] = useState(session*60);
  const [breakDur, setBreakDur] = useState(breakk*60);
       

  useEffect(()=>{
    if(sessionDur === 0){
     clearInterval(sessionInterval);
     breakInterval = setInterval(() => setBreakDur((prev)=> prev - 1),
      1000);
      setSessionDur(session*60);
      setIsSession(false);
    }

    if(breakDur === 0){
     clearInterval(breakInterval);
     setSessionDur(25*60);
     putSession(25);
     putBreakk(5);
     setBreakDur(5*60)
     setIsActive(false);
     setIsSession(true);
    }
  })

  let controlSessionLength = Math.trunc(sessionDur/60)
  if(session!==controlSessionLength&&controlSessionLength>0){
     putSession(controlSessionLength)
  }//altera a break de alguna manera. Hara que session tenga el valor de 0 muchas veces
  //y asi ejecutaria muchas veces el intervalo de tiempo?????.

   var controlBreakLength = Math.trunc(breakDur/60)
  if(breakk!==controlBreakLength&&controlBreakLength>0){
    putBreakk(controlBreakLength)
  }
  

   var sessionMin = sessionDur/60;//esto redondea el numero lo mas rapido que puede, asi que va a redondear antes de llegar a 24. Necesito encontrar 
   //una forma de que el 24 no sea un flotante.
   var sessionSec = sessionDur%60

  var breakMin = breakDur/60;

  var breakSec = breakDur%60;
  //tenia que usar estos if antes de la variable sino no se aplican los cambios.
  
 
  
  if(breakMin.toString().length > 2){
    breakMin = parseInt(breakMin.toString().slice(0, 2))
   }

   if(breakSec.toString().length === 1){
    breakSec =  "0"+parseInt(breakSec.toString().slice(0, breakSec.length))
 }

   if(sessionMin.toString().length > 2){
    sessionMin = parseInt(sessionMin.toString().slice(0, 2))
   }

   if(sessionSec.toString().length === 1){
      sessionSec =  "0"+parseInt(sessionSec.toString().slice(0, sessionSec.length))
   }
   if(sessionMin.toString().length === 1){
    sessionMin =  "0"+parseInt(sessionMin.toString().slice(0, sessionMin.length))
  }
  if(breakMin.toString().length === 1){
    breakMin =  "0"+parseInt(breakMin.toString().slice(0, breakMin.length))
  }
  

  //la ubicacion de estos if es importante por que se renderizan en orden. Si yo pusiera los que se encargan de los ceros primeros no funcionaria por que 
  //la reduccion del flotante sessionMin y breakMin no se aplicaron aun....
  var breakTime = breakMin+":"+breakSec;
  var sessionTime = sessionMin+":"+sessionSec;
////////////////////////////////////////////////////////////////////////////////////
 //SETS DEL RELOJ
 //encontrar la forma de SUBIR Y BAJAR EL TIEMPO DE SESION
    const setSessionTimerHandlerDec =()=>{
    if(isActive === false && session>1){
      putSession((previousLength) => previousLength - 1);
      setSessionDur((previousLength) => previousLength - 60);
  
    }
  }

  const setSessionTimerHandlerInc =()=>{
    if(isActive === false&& session<60){
      putSession((previousLength) => previousLength + 1);
      setSessionDur((previousLength) => previousLength + 60);
    }
  }

  const setBreakTimerHandlerDec=()=>{
   if(isActive===false && breakk > 1){
    putBreakk((prev) => prev - 1);
      setBreakDur((prev) => prev - 60);
   }
  }

  const setBreakTimerHandlerInc=()=>{
    if(isActive === false && breakk < 60){
      putBreakk((prev) => prev +1);
      setBreakDur((prev) => prev +60)
    }
  }
   //SETS DEL RELOJ
   //SETS DEL RELOJ
   //SETS DEL RELOJ
  //SETS DEL RELOJ
  ////////////////////////////////////////////////////////////////////////////////////




  
//PLAY    PLAY    PLAY    PLAY    PLAY    PLAY    PLAY    PLAY    PLAY    
  const playHandler=()=>{
    if(isSession ===true){
      setIsActive(true);
    sessionInterval = setInterval(
      () => setSessionDur((previousTime) => previousTime - 1),
      1000
    );} 
    if(isSession===false){
      setIsActive(true);
      breakInterval = setInterval(
        () => setBreakDur((previousTime) => previousTime - 1),
        1000
      );
    }
  }
   
  const pauseHandler=()=>{
    setIsActive(false);
    clearInterval(sessionInterval);
    clearInterval(breakInterval);
  }

  const reset=()=>{
   clearInterval(sessionInterval);
   clearInterval(breakInterval);
   setIsActive(false);
   setIsSession(true);
   putBreakk(5);
   putSession(25);
   setSessionDur(1500);
   setBreakDur(300);
  }
  
//lo que tengo que hacer es crear un sistema en el que al descontar un minuto instantaneamente me dibuje 59 segundos del lado de los segundos.
//
          
            return (
                <>
            <head>
              <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
              </head>
                 <h2 align="center">25+5</h2>
                 <div className='d-flex justify-content-center'>
                    <div>
                     <ClockOp 
                     idLab="break-label"
                     nameLength="Break Length"
                     idInc="break-increment"
                     idDec="break-decrement"
                     idLen="break-length"
                     valor={breakk}
                     boton1={setBreakTimerHandlerDec}
                     boton2={setBreakTimerHandlerInc}
                     classN={"buttonNotP"}
                     />
                    </div>
        
                    <div>
                     <ClockOp 
                     idLab="session-label"
                     nameLength="Session Length"
                     idInc="session-increment"
                     idDec="session-decrement"
                     idLen="session-length"
                     valor={session}
                     boton1={setSessionTimerHandlerDec}
                     boton2={setSessionTimerHandlerInc}
                     classN={"buttonNotP"}
                     />
                    </div>
                  </div>
                   <div>
                     <h3 id="timer-label">{isSession ? "Session" : "Break"}</h3>
                     <h1 align="center" id="time-left">{isSession ? sessionTime:breakTime}</h1>
                     <div align="center">
                     <button id="play-pause" className={isActive ? "buttonActive" : "button"}onClick={isActive ? pauseHandler : playHandler}>{isActive ? "Pause" : "Play"}</button>
                     <button id="reset"className={"buttonNotP"}onClick={reset}>Reset</button>
                     </div>
                   </div>
                </>
            )
          
}

export default ClockLogic
