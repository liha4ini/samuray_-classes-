import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogItemPropsItem } from './DialogItem/DialogItem'


export const Dialogs = () => {

    const dialogsData: DialogItemPropsItem[] = [
        {id: 1, name: 'Vika'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Diana'},
        {id: 4, name: 'Nika'},
    ]

    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine!'},
        {id: 4, message: 'Fuck you'},
    ]

    const dialogItem = dialogsData.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} />
        )
    })

    const messageItem = messagesData.map(item => {
        return (
            <Message message={item.message} />
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                {messageItem}
            </div>
        </div>
    )
}

export default Dialogs