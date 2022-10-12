import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Pajes.module.css'

function Header() {
    return <>
        <div className={s.header}>
            <div>
            <NavLink to={PATH.PRE_JUNIOR} className={s.pre_junior}  >pre-junior</NavLink>
            </div>
            <NavLink to={PATH.JUNIOR} className={s.junior}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.junior_plus}> junior plus </NavLink>
            <div className={s.block} ><img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                                          alt={'logo'}
                                          className={s.rotate}/></div>
        </div>
    </>
}

export default Header
