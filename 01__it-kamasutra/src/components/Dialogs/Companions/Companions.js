import React from 'react'
import clases from './Companions.module.css'
import Search from '../Search/Search'
import { NavLink } from 'react-router-dom'

const Companions = (props) => {

    const peoples = props.companions

    const peoplesElements = peoples.map((el, number = 1) =>
        <div className={clases.companions__item}>
            <NavLink to={"/dialogs/" + ++number} activeClassName={clases.active}>
                <div className={clases.companions__element}>
                    <div className={clases.companion__avatar}>
                        <img src={el.imgSrc} alt="avatar" />
                    </div>
                    <div className={clases.companion__info}>
                        <strong className={clases.companion__nikname}>{el.nikName}</strong> <br />
                        <span className={clases.descr}>{el.descr}</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )

    return (
        <div className={clases.companions}>
            <div className={clases.search}>
                <Search />
            </div>
            <div className={clases.companions__list}>
                {peoplesElements}
            </div>
        </div>
    )
}

export default Companions;