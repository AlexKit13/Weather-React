import React from "react";
import A from './App.module.css';

import Info from "../Info/Info";
import SearchPanel from "../SearchPanel/SearchPanel";
import WeatherInfo from "../Weather_info/WeatherInfo";
import MajorCities from "../MajorCities/MajorCities";
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {

    state = {
        city: undefined,
        temp: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        error: undefined
    }

    API_KEY = "b4960b43d3a7f36412dbe8109182410c";

    getKiev = async (event) => {

        event.preventDefault();

        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${this.API_KEY}&units=metric`);

        let data = await api_url.json();

        this.setState({
            city: data.name,
            temp: data.main.temp,
            country: data.sys.country,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            error: "undefined"
        })

    }

    getLondon = async (event) => {

        event.preventDefault();

        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${this.API_KEY}&units=metric`);

        let data = await api_url.json();

        this.setState({
            city: data.name,
            temp: data.main.temp,
            country: data.sys.country,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            error: "undefined"
        })

    }

    getNewYork = async (event) => {

        event.preventDefault();

        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${this.API_KEY}&units=metric`);

        let data = await api_url.json();

        this.setState({
            city: data.name,
            temp: data.main.temp,
            country: data.sys.country,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            error: "undefined"
        })

    }

    getWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric`);

            let data = await api_url.json();

            this.setState({
                city: data.name,
                temp: data.main.temp,
                country: data.sys.country,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                error: "undefined"
            })
        } else {
            alert("Введіть назву міста")
        }

    }

    render() {
        return (
            <BrowserRouter>
                <div className={A.wrapper}>
                    <div className={A.container}>
                        <Info/>
                        <SearchPanel weatherData={this.getWeather}/>
                        <MajorCities weatherKiev={this.getKiev} weatherLondon={this.getLondon} weatherNewYork={this.getNewYork}/>

                        <WeatherInfo
                            city={this.state.city}
                            temp={this.state.temp}
                            country={this.state.country}
                            humidity={this.state.humidity}
                            wind={this.state.wind}
                            error={this.state.error}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
