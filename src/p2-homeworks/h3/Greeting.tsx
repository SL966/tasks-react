import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}

// presentation component (for layout designer)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // props destructuring
) => {
    const inputClass = error ? s.errorInput : s.input// need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyDown={onEnter}
                       onBlur={setNameCallback}/>
                <div className={s.error}>{error}</div>
            </div>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting


