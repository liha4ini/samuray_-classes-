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

    let newPostText = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        let text = newPostText.current?.value
        alert('dfdfdfdf')
    }

    return (
        <div className={s.wrapper}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    )
}