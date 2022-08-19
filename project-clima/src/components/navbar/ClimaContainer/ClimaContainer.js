import React, {useState} from 'react'
import ClimaForm from '../Climaform/ClimaForm';
import CardLoading from '../cardLoading/CardLoading';

const ClimaContainer = () => {
let dirClima = "https://api.openweathermap.org/data/2.5/weather?appid=51944b275dc70d869c376f9052ba1a8f&lang=es";
let ciudadDir = "&q="; 
let urlForeCast = "https://api.openweathermap.org/data/2.5/forecast?appid=51944b275dc70d869c376f9052ba1a8f&lang=es";
const [clima, setClima] = useState([]);

const [forecast, setForecast] = useState ([]);

const [Reload, setReload] = useState(false);

const [Event , setEvent] = useState(false);

const [Ubicacion, setUbicacion] = useState("");

const getUbicacion = async(loc) =>{  
    setReload(true);
    setUbicacion(loc);

    //clima direccion datos de la API

   dirClima = dirClima + ciudadDir + loc;

    await fetch(dirClima).then((res) =>{
        if(!res.ok) throw {res}
        return res.json();

    }).then((climaData) => {
        console.log(climaData)
        setClima(climaData)
        
    }).catch(error => {
        console.log(error);
        setReload(false);
        setEvent(false);
    });

                        //Forecast Llamado de la API

                        urlForeCast = urlForeCast + ciudadDir + loc;

                        await fetch(urlForeCast).then((res) =>{
                            if(!res.ok) throw {res}
                            return res.json();

                        }).then((forecastData) => {
                            console.log(forecastData)
                            setForecast(forecastData)

                            setReload (false);
                            setEvent(true);

                            
                        }).catch(error => {
                            console.log(error);
                            setReload(false);
                            setEvent(false);
                        });

                    }

                    return (
                        <React.Fragment>
                            <ClimaForm
                            newUbicacion = {getUbicacion}
                            />
                        
                            <CardLoading
                            EventData = {Event}
                            ReloadData ={Reload}
                            clima = {clima}
                            forecast = {forecast}
                            />

                        </React.Fragment>
                    )
                    }

                    export default ClimaContainer