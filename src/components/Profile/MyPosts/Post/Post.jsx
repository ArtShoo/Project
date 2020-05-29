import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
                    <div className={s.item}>
                        <img src="https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png"/>
                        {props.message}
                        <div>
                        <span>like</span> {props.likesCount}
                        </div>
                    </div>
    );
}

export default Post;