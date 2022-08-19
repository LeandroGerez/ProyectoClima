import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar'
import ClimaContainer from './components/navbar/ClimaContainer/ClimaContainer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ClimaContainer/>} />
      <Route path='/clima' element={<ClimaContainer/>}/>
      </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
