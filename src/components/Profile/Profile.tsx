import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.img} src="https://phonoteka.org/uploads/posts/2022-01/1643124451_1-phonoteka-org-p-abstraktsiya-fon-svetlii-1.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}