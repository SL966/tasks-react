import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './pages/Pajes.module.css'

function Header() {
    return <>
        <div className={s.header}>
            <div>
                <NavLink to={PATH.HOME} className={s.pre_junior}>Home :</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR} className={s.junior}>HW1</NavLink>
            </div>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.junior_plus}>HW2</NavLink>
            <div>
                <NavLink to={PATH.JUNIOR_HW3} className={s.junior_HW3}>HW3</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR_HW4} className={s.HW4}>HW4</NavLink>
            </div>
            <div>
                <NavLink to={PATH.HOME_WORKS_HW6} className={s.HW6}>HW6</NavLink>
            </div>
            <div>
                <NavLink to={PATH.HOME_WORKS_HW7} className={s.HW7}>HW7</NavLink>
            </div>
            <div>
                <NavLink to={PATH.HOME_WORKS_HW9} className={s.HW9}>HW9</NavLink>
            </div>
            <div>
                <NavLink to={PATH.HOME_WORKS_HW10} className={s.HW10}>HW10</NavLink>
            </div>
            <div className={s.block}><img src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                                          alt={'logo'}
                                          className={s.rotate}/><div className={s.navigation}>Navigation</div></div>

        </div>
    </>
}

export default Header
