import React from 'react';
import s from './SearchPanel.module.css'

const SearchPanel = (props) => {
    return (
        <div>
            <form onSubmit={props.weatherData}>
                <input className={s.input} type="text" autoComplete="off" name="city"  placeholder="Назва населеного пункту, країни обо регіону" />
                <button className={s.btn}>Погода</button>
            </form>
        </div>
    );
};

export default SearchPanel;