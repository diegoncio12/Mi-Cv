import React from 'react';
import './formulario.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const Formulario = () => {
 return(
 <div className='contactame' id='contactame'>
    <form action="" className='formulario'>
        <h1 className='formulario_head'>Contactame</h1>
        <input type="text" className='input' placeholder='ingrese su nombre'/>
        <input type="text" className='input' placeholder='ingrese su correo'/>
        <input type="text" className='input' placeholder='ingrese su telefono'/>
        <input type="text" className='input' placeholder='mensaje'/>
        <Button variant="contained" endIcon={<SendIcon />} size="small" color="error" className='submit' >
         send
        </Button>
    </form>
 </div>
 )
}

export { Formulario }