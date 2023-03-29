import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogItemPropsItem } from './DialogItem/DialogItem';
import { MessagePropsType } from './Message/Message';


type DialogsPropsType = {
    dialogsData: DialogItemPropsItem[]
    messagesData: MessagePropsType[]
}


export const Dialogs = (props: DialogsPropsType) => {

    const dialogItem = props.dialogsData.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} />
        )
    })

    const messageItem = props.messagesData.map(item => {
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

// export default Dialogs