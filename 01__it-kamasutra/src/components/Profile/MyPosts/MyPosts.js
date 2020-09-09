import React from 'react';
import Post from './Post/Post'
import clases from './MyPosts.module.css'
import Form from './Form/Form';

const MyPosts = (props) => {

	const avatarPeople = props.avatar_People
	const niknamePeople = props.nikname_People
	const allPost = props.all_Post

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

	const allPostElements = allPost.map(el =>
		<Post
			message={post(
				el.info,
				el.img
			)}
			like={el.like}
			share={el.share}
			bookmarks={el.bookmarks}
			time={el.time}
			avatar={avatarPeople}
			nikname={niknamePeople}
			active={props.active}
		/>
	)

	return <div className={clases.content}>
		<div>
			<Form createPost={props.createPost}/>
			{allPostElements}
		</div>
	</div>
}

export default MyPosts;