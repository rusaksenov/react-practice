import React from 'react';
import clases from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import Avatar from './Avatar/Avatar';

const Profile = (props) => {

	return (
		<div className={clases.content}>
			<Avatar
				nikname={props.userData[0].nikname}
				avatar={props.userData[0].avatar}
				bgImg={props.userData[0].bgImg}
				descr={props.userData[0].descr}
				active={props.userData[0].active}

				inst={props.userData[1].inst}
				email={props.userData[1].email}
				tel={props.userData[1].tel}
			/>
			<div>
				<MyPosts
					all_Post={props.posts}
					avatar_People={props.userData[0].avatar}
					nikname_People={props.userData[0].nikname}
					active={props.userData[0].active}
					createPost={props.createPost}
				/>
			</div>
		</div>
	)
}

export default Profile;