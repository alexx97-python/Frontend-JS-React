import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let messageRef = React.createRef();
    let dialogItem = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} /> )

    let message = props.dialogsPage.messagesData.map(m => <Message message={m.message} key={m.id}/>);

    const onAddMessage = () => {
        props.AddMessage();
    }

    const onMessageChange = () => {
        let text = messageRef.current.value;
        props.MessageChange(text);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogItem}
                </div>
                <div className={s.messages}>
                    {message}
                    <p><textarea onChange={onMessageChange}
                    ref={messageRef}
                    value={props.newMessageData}> </textarea></p>
                    <p><button onClick={onAddMessage}> Answer </button></p>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;