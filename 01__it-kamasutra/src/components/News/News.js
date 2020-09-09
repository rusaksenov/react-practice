import React from 'react'
import clases from './News.module.css'
import Post from '../Profile/MyPosts/Post/Post'

const News = (props) => {

    const post = (part1, part2_img) => {
        return (
            <div>
                <pre>{part1}</pre>
                <div className={clases.imgPost}>
                    <img src={part2_img} alt="" />
                </div>
            </div>
        )
    }

    const allPostElement = props.allPosts.map(el =>
        <Post
            nikname={el.nikname}
            time={el.time}
            like={el.like}
            bookmarks={el.bookmarks}
            share={el.share}
            avatar={el.avatar}
            message={post(el.info, el.img)}
        />
    )

    return (
        <div className={clases.content}>
            <div className={clases.news}>
                <div className={clases.post}>
                    <h3>News</h3>
                    <div className={clases.f}></div>
                    {allPostElement}
                </div>
            </div>
        </div>
    )
}

export default News;