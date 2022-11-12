import * as React from 'react';
import imagen1 from '../img/imagen1.jpg'
import imagen3 from '../img/imagen3.webp'
import certificado from '../img/certificado.png'
import Rating from '@mui/material/Rating';
import './Body.css'


const Body = () => {
 return(
<div className='body'> 
  <div className='BodyUno' id='bodyUno'>
    <h1>I'm Diego gustavo</h1>
    <p>Afisionado desarrollador web full stack</p>
    <img src={imagen1} alt="" className='imgP' />
  </div> 
  <div id='bodyDos'>
    <h2>Les contare mas sobre mi</h2>
    <p> Comence este camino sin saber hasta donde llegaria , eh estado practicando y conociendo mis habilidades como desarrollador , me siento atraido por el diseño ui/ux y una gran curiosidad por el sector de base de datos , actualmente me estoy especializando en la parte del front-end y conociendo multiples framework como material-ui , chakra y demas que ayudan mucho en la parte del desarrollo front-end</p>
     <img src={imagen3} alt="" />
     
  </div>
  <div className='bodyTres' id='bodyTres'>
    <h2>Mis habilidades</h2>
    <p>CSS</p>
    <Rating name="half-rating" defaultValue={4} precision={0.5}  />
    <p>Html</p>
    <Rating name="half-rating" defaultValue={4} precision={0.5} />
    <p>JavaScript</p>
    <Rating name="half-rating" defaultValue={3.9} precision={0.5} />
    <p>React Js</p>
    <Rating name="half-rating" defaultValue={3.9} precision={0.5} />
    <p>Frameworks</p>
    <Rating name="half-rating" defaultValue={3.9} precision={0.5} />
  </div>
  <div className='certificado' >
    <h2 className='bodyCuatro' id='bodyCuatro'>Experiencia Academica</h2>
    <p><span>Programacion Full stack - Nivel Inicial</span>- UTN</p>
    <button type="button" ><a href="#mostrar"><img src={certificado} height ="80" width="100" className='mostrar'/></a> </button>
  </div>

</div>
 )
}





export { Body }