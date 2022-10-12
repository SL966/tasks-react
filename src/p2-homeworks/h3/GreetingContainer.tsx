import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[];
    addUserCallback: (name: string) => void
}

// more simple and understandable for beginners
// function GreetingContainer(props: GreetingPropsType) {

// more modern and pro-friendly :)
// local logic level
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // props destructuring
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const teimmedName = e.currentTarget.value.trim()
        if (teimmedName) {
            setName(teimmedName)
            error && setError('')
        } else {
            setName('')
            setError('name is require !')
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName('')
    }
    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }

    const totalUsers = users.length
    return (

        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
