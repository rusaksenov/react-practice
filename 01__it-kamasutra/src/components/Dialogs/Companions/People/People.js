import React from 'react'
import clases from './People.module.css'

const People = (props) => {
    return (
        <div className={clases.companions__item}>
            <div className={clases.companion__avatar}>
                <img src={props.img} alt="avatar" />
            </div>
            <div className={clases.companion__info}>
                <strong className={clases.companion__nikname}>{props.nikname}</strong> <br />
                <span className={clases.descr}>{props.descr}</span>
            </div>
        </div>
    )
}

export default People;