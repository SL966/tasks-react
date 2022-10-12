import React from 'react'
import s from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <>
            <div className={s.container}>
                <img src={props.avatar} className={s.avatar} alt='Avatar'/>
                <div className={s.main}>
                    <div className={s.name}> {props.name} </div>
                    <div className={s.message}> {props.message} </div>
                    <div className={s.time}> {props.time}</div>
                </div>
            </div>

        </>
    )
}

export default Message
