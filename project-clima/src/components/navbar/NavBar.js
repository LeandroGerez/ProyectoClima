import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    
    <nav className="navbar bg-dark text-light mb-5">
        <div className="container-fluid col-lg-4">
            <h2 className='mx-auto'>Informacion Del Clima</h2>
        </div>
        <div>
        <Link to='/' className="btn btn-primary">Inicio</Link>
        <div className="button"><Link to='/clima' className="btn btn-primary">Clima</Link>
        </div>
        </div> 
    </nav>

        )
}

export default Navbar