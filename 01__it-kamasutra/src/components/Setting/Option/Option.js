import React from 'react';
import clases from './Option.module.css'

const Option = (props) => {

    return (
        <div className={clases.content}>
            <label for={props.id}>
                {props.info}
                <input type="checkbox" class={clases.custom_checkbox} id={props.id} name={props.id} value="yes" />
            </label>
        </div>
    )
}

export default Option;