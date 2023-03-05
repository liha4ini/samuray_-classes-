import React from 'react';
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";

export const MyPosts = () => {
    return (
        <div className={s.wrapper}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <MyPost message='Hi? how are you?' />
                <MyPost message={'Are you work today?'} />
            </div>
        </div>
    )
}