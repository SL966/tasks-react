import React, {useState} from 'react'
import {homeWorkReducer} from './homeWorkReducer'
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton'
import s from'./HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

export const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
      <div key={p._id}>
          <li>
              <span>{p.name} </span>
              {p.age}
          </li>
      </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sortCheck18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check18', payload: 18}))

    return (
      <div className={s.HW_8_container}>
          <hr className={s.hr}/>
          homeworks 8

          <div className={s.finalPeople} >{finalPeople}</div>

          <div className={s.button_container}>
              <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
              <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
              <div><SuperButton onClick={sortCheck18}>Check18</SuperButton></div>
          </div>
      </div>
    )
}

export default HW8
