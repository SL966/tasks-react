import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './HW7.module.css'


const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div className={s.hw_7}>
            <hr className={s.hr}/>
            <div className={s.homeworks_7}>homeworks 7</div>


            <div className={s.SuperSelect}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={s.SuperRadio}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
        </div>
    )
}

export default HW7
