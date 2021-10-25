import React from 'react'
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, handleInputMessageActionCreator} from '../../Redux/Reducers/dialogs-Reducer';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        inputMessage: state.messagesPage.inputMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        handleInput: (value) => {
            dispatch(handleInputMessageActionCreator(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
