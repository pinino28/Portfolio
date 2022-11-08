import { legacy_createStore, combineReducers } from "redux";
import galeria from "../galeria/galeriaReducer.js";
import galeria2 from "../galeria2/galeria2Reducer.js";
import galeria3 from "../galeria3/galeria3Reducer.js";
import masImagenesReducer from "../galeria/imagenesConEstado/MasImagenesReducer"

const reducers = combineReducers({ masImagenesReducer, galeria3, galeria, galeria2});

const store = legacy_createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  

export default store


