import React from 'react';
import clases from './Avatar.module.css'
import NikName from '../MyPosts/Post/NikName/NikName';

const Avatar = (props) => {
	const sizeIconSocial = (value = '30px') => {
		return value
	}

	return (
		<div className={clases.content}>
			<div className={clases.bg_profile}>
				<img src={props.bgImg} alt="bg color" />
			</div>
			<div className={clases.about}>
				<div className={clases.nikname}>
					<NikName avatar={props.avatar} active={props.active} nikname={props.nikname}/>
				</div>
				<div className={clases.descr}>{props.descr}</div>
				<div className={clases.my_social}>
					<div className={clases.inst}>
						<a href={props.inst}>
							<svg width={sizeIconSocial()} height={sizeIconSocial()} viewBox={`0 0 ${sizeIconSocial(30)}`}>
								<path d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
							</svg>
						</a>
					</div>
					<div className={clases.email}>
						<a href={`mailto:${props.email}`}>
							<svg width={sizeIconSocial()} height={sizeIconSocial()} viewBox={`0 0 ${sizeIconSocial(30)}`}>
								<path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
							</svg>
						</a>
					</div>
					<div className={clases.tel}>
						<a href={`tel:${props.tel}`}>
							<svg width={sizeIconSocial()} height={sizeIconSocial()} viewBox={`0 0 ${sizeIconSocial(30)}`}>
								<path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Avatar;