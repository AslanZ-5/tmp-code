// import {createStore, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {React} from 'react';
// import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import  ReactDOM  from 'react-dom';
// import rootReducer from './reducer';
import App from './App';
import authorsReducer from './authorSlice';
import productsReducer from './productsSlice';

// const logger = (store) => (next) => (action) => {
//   console.log(store.getState())
//   console.log('hi action', action)
//   next(action)
// } 
// const acceptStringAction = () => (next) => (action) => {
//   if (typeof action === 'string' ){
//     console.log("Upps this action is a string we need to make it object")
//     next({type: action})
//   }else{
//     next(action)
//   }
// }
// const addSideEffectData = () => (next) => (action) => {

//  if(action.type === "products/fetchfromserver"){
//   console.log('Hmmm i suppose we don\'t have data to pass to this action, we beeter add it now, but we need to tell you that recieveing this data might take some time')

//     fetch('https://dummyjson.com/products').then(data => data.json()).then(data => {
//       console.log("!!!!!!!!!!", data)
//       next({...action,payload:data})
//     })

//  }else{
//   next(action)
//  }


// }
// const thunkWithArgs = thunkMiddleware.withExtraArgument({
//   authorsName: 'aslan',
//   age: 26,
//   job: "developer"
// })
// const store = createStore(rootReducer, applyMiddleware(logger,acceptStringAction,thunkWithArgs));
// const {dispatch} = store;

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd,
// }, dispatch)


const store = configureStore({
  reducer: {
    authors: authorsReducer,
    products: productsReducer
  }
})
ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>
, document.getElementById('root'))




