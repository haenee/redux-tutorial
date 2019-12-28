import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers,createStore} from "redux";

const productReducer = (state=[], action)=>{
  //상태를 변경
  return state;
}
const userReducer = (state='', action)=>{
  if(action.type==='updateUser'){
    return  action.payload;
  }
  return state;
}

const allReducers = combineReducers({
  products: productReducer,
  users: userReducer
});

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);
console.log(store.getState());
//1)subscribe
store.subscribe(()=>console.log())
//2)action dispatch
const action ={
  type: "updateUser",
  payload: "Tom"
};
store.dispatch(action);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
