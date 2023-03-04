import React from 'react';
import s from './MyPost.module.css';

type MyPostPropsType = {
    message: string
}

export const MyPost = (props: MyPostPropsType) => {
    return (
        <div>
            <div className={s.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYEyBQlKeqVjjDCZ6GrtM8qJjOdP4MhlLHw&usqp=CAU" alt=""/>
                {props.message}
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}