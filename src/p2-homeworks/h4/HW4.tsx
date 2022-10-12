import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? ' ' : 'Enter text'

    const showAlert = () => {
        if (text) {
            alert(text)
        } else {
            alert('Enter text')
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            <div className={s.homeworks}>homeworks 4</div>

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={s.spanError}
                />

                <SuperInputText
                    className={s.blue} // mixing classes
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={s.testSpanError}
                />


                ----------------------------------------------------

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red
                    onClick={showAlert}

                >
                    Enter {/*children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*children*/}
                </SuperCheckbox>

                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>
        </div>
    )
}

export default HW4
