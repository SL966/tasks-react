import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './SuperInputText.module.css'

// prop type of normal input
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// here we say that our input will have the same props as a regular input
// (so as not to write value: string, onChange: ...; they are already all described in DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // and + more props that are not in the standard input
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type, // get it and ignore it so that you can't set another type of input
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,

        ...restProps// all other props will go into the restProps object
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // if there is a prop onChange
        && onChange(e) // then pass e to it (because onChange is optional)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // if there is a prop onEnter
        && e.key === 'Enter' // and if the Enter button is pressed
        && onEnter() // then call it
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ' '}`
    const finalInputClassName = `${s.input} ${error ? s.errorInput : s.superInput } ${className}`

    return (
        <>
            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyDown={onKeyPressCallback}
                className={finalInputClassName}

                {...restProps} // give the rest of the props to the input if they exist (value, for example, is inside there)
            />
            {error && <div className={finalSpanClassName}>{error}</div>}
        </>
    )
}

export default SuperInputText
