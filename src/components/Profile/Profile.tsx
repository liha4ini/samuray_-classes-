import React from 'react';
import s from './Profile.module.css';
import {MyPosts, MyPostsPropsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props: MyPostsPropsType) => {


    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postsData={props.postsData} />
        </div>
    )
}