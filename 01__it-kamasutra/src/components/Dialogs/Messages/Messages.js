import React from 'react'
import clases from './Messages.module.css'


const Message = (props) => {

    function Companion(p) {
        if (p === 'you') {
            return clases.you
        } else {
            return clases.other
        }
    }

    return (
        <div className={`${Companion(props.p2)} ${clases.message__item}`} >
            <p>
                {props.info}
            </p>
            <span>{props.time}</span>
        </div>
    )
}

const Messages = (props) => {

    const messages = props.messages

    let messageElements = messages.map(el =>
        <Message
            info={el.info}
            p2={el.author}
            time={el.time}
        />
    )

    let creatMessageElement = React.createRef()

    const creatMessage = () => {
        let text = creatMessageElement.current.value
        props.createMessage(text)
    }

    return (
        <div className={clases.content}>
            <div className={clases.header}>
                <div className={clases.info_companion}>
                    <div className={clases.avatar}>
                        <img src={props.avatarCompanionSrc} alt="Avatar companion" />
                    </div>
                    <div className={clases.nikname}>{props.nameCompanion}</div>
                </div>
            </div>
            <div className={clases.messages}>
                <div className={clases.message__content}>
                    {messageElements}
                </div>
                <div className={clases.message__creat}>
                    <textarea className={clases.message__input} type="text" ref={creatMessageElement}></textarea>
                    <button onClick={creatMessage} className={clases.button_submit}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;