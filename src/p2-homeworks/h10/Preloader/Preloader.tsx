import React from 'react';
import s from '../bll/Store.module.css';
import preloader from './1493.gif';

const Preloader = () => {
    return (
        <div>
            <img className={s.imgPreloader} src={preloader}/>
        </div>
    );
};

export default Preloader;