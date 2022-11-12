import React from 'react';
import './Footer.css'

const Footer = () => {
 return(
 <div>
     <div class="footer" id='Footer'>
            <div class="main">
                <div class="col">
                    <h4>Menu</h4>
                    <ul>
                        <li><a href="#bodyUno">home</a></li>
                        <li><a href="#bodyDos">Mas sobre mi</a></li>
                        <li><a href="#bodyTres">Academico</a></li>
                        <li><a href="#contactame">contacto</a></li>
                    </ul>
                </div>

                <div class="col">
                    <h4>Servicios</h4>
                    <ul>
                        <li><a href="#">web design</a></li>
                        <li><a href="#">web developer</a></li>
                        <li><a href="#">marketing</a></li>
                        <li><a href="#">graficos</a></li>
                    </ul>
                </div>


                <div class="col">
                    <h4>Contactame</h4>
                    <div class="social">
                        <a href=""><i class='bx bxl-facebook-circle'></i></a>
                        <a href=""><i class='bx bxl-instagram-alt' ></i></a>
                        <a href=""><i class='bx bxl-twitter' ></i></a>
                        <a href=""><i class='bx bxl-twitch' ></i></a>
                    </div>
                </div>
            </div>
        </div>
 </div>
 )
}

export { Footer }