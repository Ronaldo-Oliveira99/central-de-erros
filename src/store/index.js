import { createStore } from "redux";
import { combineReducers } from "redux";
import usuarioReducer from "./reducers/usuarioReducer";
import errosReducer from "./reducers/errosReducers";

const rootReducer = combineReducers({
  erros: errosReducer,
  usuarioReducer
});

const store = createStore(rootReducer);

export default store;
