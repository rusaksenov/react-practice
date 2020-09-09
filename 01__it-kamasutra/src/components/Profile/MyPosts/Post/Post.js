import React from 'react';
import clases from './Post.module.css'
import NikName from './NikName/NikName';

const Post = (props) => {
	return (
		<div className={clases.post}>
				<NikName avatar={props.avatar} nikname={props.nikname} time={props.time} active={props.active} />
			<div className={clases.text_post}>
				{props.message}
			</div>
			<div className={clases.option}>
				<button className={clases.like}>
					<div className={clases.icon_like}>
						<svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
						</svg>
					</div>
					<span>{props.like}</span>
				</button>
				<button className={clases.bookmarks}>
					<div className={clases.icon_bookmarks}>
						<svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z"></path>
						</svg>
					</div>
					<span>{props.bookmarks}</span>
				</button>
				<button className={clases.share}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M13.5855 14.4519L13.008 14.1827C10.221 12.8834 6.8706 13.2423 4.40139 15.2455L2.72919 16.6021C3.4882 12.6144 6.8136 9.56253 10.9226 9.20576L13.5855 8.97456V4.98734L22.0071 11.8772L13.5855 18.7671V14.4519ZM22.6403 12.6512C23.1294 12.2511 23.1294 11.5033 22.6403 11.1032L14.2187 4.21336C13.5657 3.67918 12.5855 4.14373 12.5855 4.98734V8.05762L10.8361 8.20951C5.97578 8.63151 2.10377 12.4527 1.6176 17.3071C1.55767 17.9054 2.24986 18.2786 2.71685 17.8998L5.0314 16.022C7.19829 14.2641 10.1392 13.9486 12.5855 15.0891V18.7671C12.5855 19.6107 13.5657 20.0752 14.2187 19.5411L22.6403 12.6512Z" fill="#0C101F" />
					</svg>
					<span>{props.share}</span>
				</button>
			</div>
		</div>
	)
}

export default Post;