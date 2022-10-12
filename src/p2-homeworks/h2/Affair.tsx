import React from "react";
import s from "./Affairs.module.css";
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType; // need to fix any
    deleteAffairCallback: (id: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };

    const priorityClass = s.item + ' ' + s[props.affair.priority]
    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>

            <button onClick={deleteCallback} className={s.item + ' ' + s.button}>X</button>
        </div>
    );
}

export default Affair;
