import React from 'react'
import '../servicios/Servicios.css';
import dato from '../../assets/datos.svg';
import historial from '../../assets/historial.svg';
import reconocimiento from '../../assets/reconocimiento.svg';
import fb from '../../assets/facebook.svg';
import ig from '../../assets/instagram.svg';

const Servicios = () => {
  return (
    
    <header className="nav">
      <div className="navbar-container">
        <h2>Nemo enim ipsam volutatem quia </h2> 
        <h2> <span> 75,000 voluptas </span> sit aspernatur</h2>
      </div>
 
      <div className="servicios-container">
        <section className="servicio-desc">
          <div className="icono-datos">
            <img src={dato} width="150" height="50"  className="icon-historial" alt="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </section>

        <section className="servicio-desc">
          <div className="icono-datos">
            <img src={historial} width="150" height="50"  className="icon-historial" alt="logo" />
            <p>
              Lorem ipsum dolor sit 
              amet consectetur 
              adipisicing elit.
            </p>
          </div>
        </section>

        <section className="servicio-desc">
          <div className="icono-datos">
            <img src={reconocimiento} width="150" height="50"  className="icon-reconocimiento" alt="logo" />
            <p>
              Lorem ipsum dolor sit 
              amet consectetur 
              adipisicing elit.
            </p>
          </div>
        </section>

        <section className="servicio-desc">
          <div className="icono-datos">
            <img src={fb} width="150" height="50"  className="icon-facebook" alt="logo" />
            <p>
              Lorem ipsum dolor sit 
              amet consectetur 
              adipisicing elit.
            </p>
          </div>
        </section>

        <section className="servicio-desc">
            <div className="icono-datos ">
              <img src={ig} width="150" height="50"  className="icon-instagram" alt="logo" />
              <p>
                Lorem ipsum dolor sit 
                amet consectetur 
                adipisicing elit.
              </p>
            </div>
        </section>
      </div> 
    </header> 
  )
}

export default Servicios;