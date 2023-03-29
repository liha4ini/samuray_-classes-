import React, {FC} from 'react';
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";


export type MyPostsPropsType = {
    postsData: PostDataType[]
}

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {

    const {postsData} = props

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