import React from 'react';
import clases from './Setting.module.css'
import NikName from '../Profile/MyPosts/Post/NikName/NikName';
import Option from './Option/Option';

const Setting = (props) => {
    return (
        <div className={clases.content}>
            <NikName
                nikname={props.userData[0].nikname}
                avatar={props.userData[0].avatar}
                active={props.userData[0].active}
            />
            <div className={clases.content__item}>
                <Option
                    info="Настройки"
                    id="setting"
                />
                <Option
                    info="Оповещания"
                    id="yvedle"
                />
                <Option
                    info="Тёмная тема"
                    id="darktheme"
                />
                <Option
                    info="Показывать мою активность"
                    id="myActive"
                />
                <Option
                    info="Настройки"
                    id="seting"
                />
                <Option
                    info="Оповещания"
                    id="yvdle"
                />
                <Option
                    info="Тёмная тема"
                    id="dartheme"
                />
                <Option
                    info="Показывать мою активность"
                    id="myAcive"
                />
            </div>
        </div>
    )
}

export default Setting;