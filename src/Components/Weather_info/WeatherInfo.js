import React from 'react';
import W from './Weather.module.css'


const WeatherInfo = (props) => {
    return (
        <div className={W.info_box}>
            {props.city &&
            <div>
                <p> Країна: {props.city}, {props.country}</p>
                <p> Температура: {props.temp} </p>
                <p> Вологість: {props.humidity}% </p>
                <p>Вітер, м/сек: {props.wind}</p>
            </div>
            }

        </div>
    );
};

export default WeatherInfo;