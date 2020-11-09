import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
        );
}

const Dialogs = (props) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Dimych' id='1' />
                    <DialogItem name='Lesha' id='2' />
                    <DialogItem name='Sveta' id='3' />
                    <DialogItem name='Zakhar' id='4' />
                    <DialogItem name='Vova' id='5' />
                </div>
                <div className={s.messages}>
                    <Message message="Hi"/>
                    <Message message="How is your it-kamasutra?"/>
                    <Message message="Yo"/>
                    <Message message="Yo"/>
                    <Message message="Yo"/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;