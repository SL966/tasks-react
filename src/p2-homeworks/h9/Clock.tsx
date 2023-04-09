import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        if (stringDate) {
            setShow(true)
        }
    }
    const onMouseLeave = () => {
        if (stringDate) {
            setShow(false)
        }
    }

    const stringTime = date.toLocaleTimeString()
    const stringDate = date.toLocaleDateString()

    return (
        <div className={s.container_clock}>
            <div className={s.stringTime}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                <div>point here</div>
                {stringTime}
            </div>

            {show && (
                <div className={s.stringTime}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
