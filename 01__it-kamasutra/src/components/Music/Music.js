import React from 'react'
import clases from './Music.module.css'
import Treak from './Treak/Treak'

const Music = (props) => {

    const treakInfoElements = props.allTreak.map(el =>
        <Treak
            img={el.img}
            name={el.name}
            author={el.author}
        />
    )

    return (
        <div className={clases.content}>
            <div className={clases.music}>
                <h3>Music</h3>
                <div className={clases.music__list}>
                    { treakInfoElements }
                </div>
            </div>
        </div>
    )
}

export default Music;