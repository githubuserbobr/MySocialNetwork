import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';





 

    ReactDOM.render(
       <Provider store={store}>
        
         <App state={store.getState()}/>
        
      </Provider>,
        document.getElementById('root')
    );


  




