import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Lesha'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Zakhar'},
        {id: 5, name: 'Vova'},
]

    let dialogItem = dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> )

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    let message = messagesData.map(m => <Message message={m.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogItem}
                </div>
                <div className={s.messages}>
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;