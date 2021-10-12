import React from 'react';
import c from './../Dialogs.module.css';

const Messages = ({message,img}) => {
  return (
        <div className={c.dialogsMessage}>
         <div>
          <span><img src={img} />{message[0]}  {message}</span> 
          </div>
          
        </div>
       
    )
}

export default Messages;