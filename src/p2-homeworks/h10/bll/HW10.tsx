import React from 'react'
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton'
import s from './Store.module.css'
import Preloader from "../Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store";
import {loadingAC} from "./loadingReducer";


function HW10() {
    const isLoading = useSelector<AppStoreType>((state) => state.loading.isLoading)
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        const time = setTimeout(() => {
            dispatch(loadingAC(false))
            clearTimeout(time)
        }, 2000, [isLoading])
    }


    return (
      <div className={s.homeworks_10_container}>
          <hr className={s.hr}/>
          <div className={s.homeworks_10}> homeworks 10</div>

          {isLoading
            ? (
              <div><Preloader/></div>
            ) : (
              <div className={s.superButton}>
                  <SuperButton onClick={setLoading}>set loading...</SuperButton>
              </div>
            )
          }
      </div>
    )
}

export default HW10
