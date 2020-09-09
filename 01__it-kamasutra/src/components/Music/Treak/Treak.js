import React from 'react'
import clases from './Treak.module.css'

const Treak = (props) => {

    return (
        <div className={clases.music__item}>
            <div className={clases.face_music}>
                <div className={clases.treak__img}>
                    <img src={props.img} alt="Img treak" />
                </div>
                <div className={clases.treak__info}>
                    <div className={clases.treak__name}>
                        {props.name}
                    </div>
                    <div className={clases.treak__author}>
                        {props.author}
                    </div>
                </div>
            </div>
            <div className={clases.play}>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>play-glyph</title><path d="M60.54,512c-17.06,0-30.43-13.86-30.43-31.56V31.55C30.12,13.86,43.48,0,60.55,0A32.94,32.94,0,0,1,77,4.52L465.7,229c10.13,5.85,16.18,16,16.18,27s-6,21.2-16.18,27L77,507.48A32.92,32.92,0,0,1,60.55,512Z" fill="rgb(23, 30, 58)" /></svg>
            </div>
        </div>
    )
}

export default Treak;