import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';
import s from './Greeting.module.css'


export type UserType = {
    _id: string
    name: string
}

// level of work with global data
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]); // need to fix any

    const addUserCallback = (name: string) => {
        const user = {
            _id: v1(),
            name,
        }
        setUsers([...users, user])
    }

    return (
        <div className={s.homeworks3}>

            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )

}

export default HW3