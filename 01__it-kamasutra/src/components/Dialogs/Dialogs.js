import React from 'react'
import clases from './Dialogs.module.css'
import Companions from './Companions/Companions'
import Messages from './Messages/Messages'

const Dialogs = (props) => {

    return (
        <div className={clases.content}>
            <div className={clases.messages}>
                <Companions companions={props.companions} />
                <Messages
                    messages={props.messages}
                    createMessage={props.createMessage}
                />
            </div>
        </div>
    )
}

export default Dialogs;