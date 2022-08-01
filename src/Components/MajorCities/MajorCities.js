import React from 'react';
import m from './MajorCities.module.css'

const MajorCities = (props) => {
    return (
        <div className={m.target}>
            <div onClick={props.weatherKiev}>
                <p>Київ</p>
            </div>
            <div onClick={props.weatherLondon}>
                <p>Лондон</p>
            </div>
            <div onClick={props.weatherNewYork}>
                <p>Нью-Йорк</p>
            </div>
        </div>
    );
};

export default MajorCities;