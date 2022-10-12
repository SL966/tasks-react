import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

// prop type of normal input
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string

}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // get it and ignore it so that you can't set another type of input
        onChange, onChangeChecked,
        className, spanClassName,
        children, // text will get into this variable, no need to type in React.FC

        ...restProps// all other props will go into the restProps object
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChange && onChange(e);
        onChangeChecked && onChangeChecked(e.currentTarget.checked); //works ))

    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <label className={s.label}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps} // I give the rest of the props to the input if they exist (for example, checked there inside)
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label> // thanks to the label, clicking on the span will be transferred to the input
    )
}

export default SuperCheckbox
