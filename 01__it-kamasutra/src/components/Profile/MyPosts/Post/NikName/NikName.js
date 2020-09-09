import React from 'react';
import classes from './NikName.module.css'
import { NavLink } from 'react-router-dom';

const NikName = (props) => {
	let activeEl
	let activeStatus

	if (props.active) {
		activeEl = classes.active
		activeStatus = "online"
	} else {
		activeStatus = "offline"
	}

	return (
		<NavLink to="/profile">
			<div className={`${classes.nik_name} ${activeEl}`}>
				<div className={classes.avatar}>
					<div><img src={props.avatar} alt="" /></div>
				</div>
				<div className={classes.name_time}>
					<strong>{props.nikname}</strong>
					<span>{props.time}</span>
				</div>
			</div>
		</NavLink>
	)
}

export default NikName;