import React from 'react'
import Loading from '../loading/Loading'

const CardLoading = ({ReloadData, clima, EventData, forecast}) => {
  
    let today = new Date ();
    let day = today.getDate ();
    let month = today.getMonth() + 1;
    let year = today.getFullYear ();
    let date = day + '/' + month + '/' + year;

    let url = "";
    let iconUrl = "";

    let  iconDir3 = "";
    let  iconDir6 = "";
    let  iconDir9 = "";

    let forecastCall3 = "";
    let forecastCall6 = "";
    let forecastCall9 = "";

    if (ReloadData) {
        
        return <Loading/>;
    }

    if (EventData) {
        url="http://openweathermap.org/img/w/";
        iconUrl = url + clima.weather[0].icon + ".png";
        
        iconDir3 = url + forecast.list[0].weather[0].icon + ".png";
        iconDir6 = url + forecast.list[1].weather[0].icon + ".png";
        iconDir9 = url + forecast.list[2].weather[0].icon + ".png";

        forecastCall3 = forecast.list[0].dt_txt.substring(8,10) + '/' + forecast.list[0].dt_txt.substring(5,7) +  '/' + forecast.list[0].dt_txt.substring(0,4) + ' ' + forecast.list[0].dt_txt.substring(11,13);
        forecastCall6 = forecast.list[1].dt_txt.substring(8,10) + '/' + forecast.list[1].dt_txt.substring(5,7) +  '/' + forecast.list[1].dt_txt.substring(0,4) + ' ' + forecast.list[1].dt_txt.substring(11,13);
        forecastCall9 = forecast.list[2].dt_txt.substring(8,10) + '/' + forecast.list[2].dt_txt.substring(5,7) +  '/' + forecast.list[2].dt_txt.substring(0,4) + ' ' + forecast.list[2].dt_txt.substring(11,13);
    }
  
    return (
    <div className='mt-5'>

     {
        EventData === true ? (
            <div className='container'>
                <div className="card mb-3 mx-auto bg-black text-light">
                    <div className="row g-0 ">
                        <div className="col-md-4">
                            <h3 className="card-title">{clima.name} </h3>
                        <p className="card-date"> {date}</p>
                        <p className="card-temp">{(clima.main.temp - 273.15).toFixed(1)}°C</p>
                        <p className="card-desc"> <img src={iconUrl}alt="icon"/>{clima.weather[0].description}</p>
                        <img src='https://images.pexels.com/photos/1853542/pexels-photo-1853542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="img-fluid rounded float-left " alt="img"/>
                        </div>
                            <div className="col-md-8">

                            <div className="card-body text-start mt-2">
                            <h4 className="card-text">Temperatura maxima:{(clima.main.temp_max - 273.15).toFixed(1)}°C</h4>
                            <hr/>
                            <h4 className="card-text">Temperatura Minima:{(clima.main.temp_min - 273.15).toFixed(1)}°C</h4>
                            <hr/>
                            <h4 className="card-text">Sensacion Termica:{(clima.main.feels_like - 273.15).toFixed(1)}°C</h4>
                            <hr/>
                            <h4 className="card-text"> Latitud:{Math.round(clima.coord.lat).toFixed(1)} </h4>
                            <hr/>
                            <h4 className="car-text"> Longitud :{Math.round(clima.coord.lon).toFixed(1)}</h4>
                            <hr/>
                            <h4 className="card-text">Humedad:{(clima.main.humidity)}%</h4>
                            <hr/>
                            <h4 className="card-text">Velocidad del viento:{(clima.wind.speed)}m/s</h4>
                            </div>
                            <hr/>

                        <div className="row mt-4">

                            <div className="col">

                            <p>{forecastCall3}h</p>
                            <p className="description"> <img src={iconDir3} alt="icon"/> {forecast.list[0].weather[0].description} </p>
                            <p className="temp">{(forecast.list[0].main.temp - 273.15).toFixed(1)}°C</p>

                            </div>
                            
                            <div className="col">

                            <p>{forecastCall6}h</p>
                            <p className="description"> <img src={iconDir6} alt="icon"/> {forecast.list[1].weather[0].description} </p>
                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>


                            </div>
                            <div className="col">

                            <p>{forecastCall9}h</p>
                            <p className="description"> <img src={iconDir9} alt="icon"/> {forecast.list[2].weather[0].description} </p>
                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p>

                            </div>

                        </div>
                            </div>
                        
                    </div>
                </div>
                <footer className='text-light'> COPYRIGHT 2022</footer>
            </div>
            
        ):(
            <h2 className="text-light"> Sin datos </h2> 
        )
        }
    </div>
  );
}    

export default CardLoading;