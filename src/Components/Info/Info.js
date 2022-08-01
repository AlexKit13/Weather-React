import React from 'react';
import I from './Info.module.css'


const Info = () => {
    return (
        <div className={I.container}>
            <h2>Погода</h2>
            <p>Погода в твоєму місті</p>
        </div>
    );
};

export default Info;