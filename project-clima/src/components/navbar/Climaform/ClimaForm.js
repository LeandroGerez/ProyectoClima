import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const ClimaForm = ({newUbicacion}) => {
    const [ciudad, setCiudad] = useState ("");
    
    const onSubmit =(e) =>{
        e.preventDefault();
        console.log({ciudad});
       
        if(ciudad === "" || !ciudad) return;  
        newUbicacion (ciudad)     
        
    }

  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <div className='input-group mb-3 nx-auto'>
            <input to='/clima' type='text' className='form-control' placeholder='Ciudad' onChange={(e)=> setCiudad(e.target.value)}></input>
                <button to='/clima' className='btn btn-primary input-group-text' type='submit'>Buscar  </button>    
            </div>
        </form>
    </div>
  )
}

export default ClimaForm
