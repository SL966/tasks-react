import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    /*setFilter: Dispatch<SetStateAction<FilterType>>*/
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} //key !!!! not forget
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const onAll = s.button + ' ' + (props.filter === 'all' ? s.active : '')
    const onHigh = s.button + ' ' + (props.filter === 'high' ? s.active : '')
    const onMiddle = s.button + ' ' + (props.filter === 'middle' ? s.active : '')
    const onLow = s.button + ' ' + (props.filter === 'low' ? s.active : '')

    return (
        <div>
            {mappedAffairs}
            <button onClick={setAll} className={onAll}>All</button>
            <button onClick={setHigh} className={onHigh}>High</button>
            <button onClick={setMiddle} className={onMiddle}>Middle</button>
            <button onClick={setLow} className={onLow}>Low</button>
        </div>
    )
}

export default Affairs
