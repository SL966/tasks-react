import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// the type of props of a regular button, children in which the name of the button is stored is already described there
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// all other props will fall into the restProps object, children will also be there
    }
) => {
    const finalClassName = ` ${s.button} ${red ? s.red : s.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps} // give the button the rest of the props, if any (children are inside)
        />
    )
}

export default SuperButton
