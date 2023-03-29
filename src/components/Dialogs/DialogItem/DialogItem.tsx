import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


export type DialogItemPropsItem = {
    name: string
    id: number
}


const DialogItem = (props: DialogItemPropsItem) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
