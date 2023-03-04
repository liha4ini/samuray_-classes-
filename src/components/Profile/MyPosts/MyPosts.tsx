import React from 'react';
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <MyPost message='Hi? how are you?' />
                <MyPost message={'Are you work today?'} />
            </div>
        </div>
    )
}