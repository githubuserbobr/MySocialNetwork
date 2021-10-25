import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import Messages from './Messages/Messages';


const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {props.dialogs.map(dialogs => (<DialogItem name={dialogs.name} id={dialogs.id} img={dialogs.img}/>))}
            </div>
            <div className={c.messages}>
                {props.messages.map((item, index) => (
                    <Messages message={item.message} img={item.img} id={item.id} index={index}/>))}
            </div>
            <div className={c.AddMessage}>
                <textarea value={props.inputMessage} onChange={(e) => props.handleInput(e)}/>
                <button onClick={props.addMessage}>Add</button>
            </div>
        </div>
    )
}
export default Dialogs;
