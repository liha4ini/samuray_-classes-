import React from 'react';
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";

export const MyPosts = () => {

    const postsData = [
        {id: 1, message: 'Hi? how are you?', likesCount: 12},
        {id: 2, message: 'Are you work today?', likesCount: 5},
    ]

    const postItems = postsData.map(item => {
        return (
            <MyPost message={item.message} likesCount={item.likesCount} />
        )
    })

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
                {postItems}
            </div>
        </div>
    )
}