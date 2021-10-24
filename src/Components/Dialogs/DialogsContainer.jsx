import React from 'react';
import { addMessageActionCreator, handleInputMessageActionCreator } from '../../Redux/Reducers/dialogs-Reducer';
import Dialogs from './Dialogs';
const DialogsContainer = (props) => {
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
      }
      let newMessage = (event) => {
        props.dispatch(handleInputMessageActionCreator(event))
      }
      let inputPost = (event) => {
       props.state.inputPost = event.currentTarget.value;     
      }
    return (
    <Dialogs dispatch={props.dispatch}  messages={props.messagesPage.messagesData} inputPost={inputPost} newMessage={newMessage} addMessage={addMessage} />
    )
}
export default DialogsContainer;