import * as React from 'react';
import { Perfil } from './pages/Perfil'
import { Body } from './pages/Body'
import { Footer } from './pages/Footer'
import { Formulario } from './pages/formulario';
import './App.css'



function App() {

  return (
    <div className="container">
      <div className='Perfil'>
        <Perfil />
      </div>
      <div>
        <Body />
        <Formulario />
        <Footer />
      </div>
      
    </div>
      
  )
}

export default App
