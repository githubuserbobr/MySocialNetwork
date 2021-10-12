import store from './Redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let rerederEntireTree = (store) => {
    
    ReactDOM.render(
         <App  
         sidebar={store. getState().ProfilePage.DialogsData} 
         dialogsData={store.getState().ProfilePage.DialogsData} 
         messages={store.getState().MessagesPage.MessagesData} 
         dispatch={store.dispatch.bind(store)}
         handleInputPost={store.getState().ProfilePage.handleInputPost} 
         inputPost={store.getState().ProfilePage.inputPost}
        addMessage={store.getState().MessagesPage.addMessage}
         inputMessage={store.getState().MessagesPage.inputMessage}
        handleInputMessage={store.getState().MessagesPage.handleInputMessage}  
       store={store}
       postsData={store.getState().ProfilePage.PostsData}
       />,
        document.getElementById('root')
    );
}
 store.getState().ProfilePage.subscribe(rerederEntireTree);
 store.getState().ProfilePage._callSubscriber(store);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
