import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemPropsItem = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsItem) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={'Hren'} id={1} />
                <DialogItem name={'Hren s bugra'} id={2} />
                <DialogItem name={'Hren s bobra'} id={3} />
                <DialogItem name={'Hren s ugla'} id={4} />
            </div>
            <div className={s.messages}>
                <Message message={'Hi'} />
                <Message message={'Bue'} />
                <Message message={'Yo'} />
            </div>
        </div>
    )
}