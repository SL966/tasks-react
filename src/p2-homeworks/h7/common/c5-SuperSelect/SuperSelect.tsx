import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from '../../HW7.module.css'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, onChange,
        onChangeOption, value,
        ...restProps
    }
) => {

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <option className={s.options}
                key={o + '-' + i}
                value={o}
        >
            {o}
        </option>
    )) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        onChange
        && onChange(e)

        onChangeOption
        && onChangeOption(e.currentTarget.value)

    }


    return (
        <>
            <select className={s.select_css}
                    onChange={onChangeCallback}
                    {...restProps}>{mappedOptions}
            </select>

        </>
    )
}

export default SuperSelect
