import * as React from 'react';
import imagen2 from '../img/imagen2.jpeg'
import './Perfil.css'

const Perfil = () => {

    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
 return(
 <div className='perfil'>
    <button className='btnDos'></button>
    <img src={imagen2} alt="" className='ImgLogo' />
    <h2 className='NombreLogo'>Diego gustavo</h2>
    <ul className='menu'>
      <li><a href="#bodyUno">Informacion</a></li>
      <li><a href="#bodyDos">Mas sobre mi</a></li>
      <li><a href="#bodyTres">Academico</a></li>
      <li><a href="#Footer">Contacto</a></li>
    </ul>
 </div>
 )
}

export { Perfil }