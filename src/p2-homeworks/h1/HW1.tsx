import React from 'react';
import Message from "./Message";
import s from "./Message.module.css";


const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Text',
    message: 'Здесь текст', //very long text to check for auto-hyphenation in a message...
    time: '22:00',
};


function HW1() {
    return (
        <div className={s.homeworks3}>
            <hr/>
            homeworks 3
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
