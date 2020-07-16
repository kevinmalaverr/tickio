import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import { Header } from "components";

function animarElementos(elementos) {
  window.addEventListener("scroll", function () {
    for (let element in elementos) {
      // obtenemos la posicion del elemento con referencia a la parte superios el TOP
      let posicion = element.getBoundingClientRect().top;
      // obtenemos el tamaño de la pantalla y la dividimos entre un numero --> este numero nos sirve para que la animacion se haga antes o despues dependiendo de como lo quieres
      let tamañoPantalla = window.innerHeight / 1.3;
      // traemon el nombre de la animacion, es una forma de hacerlo, tambien se puede hacer con la misma clase o crear otra
      let nameAnimation = element.getAttribute("name-style");

      //
      if (posicion < tamañoPantalla) {
        element.style.animation = `animate-active 1.5s ease-out forwards`;
      } else {
        element.style.animation = "";
      }
    }
  });
}

const Home = (props) => {
  useEffect(() => {
    const els = document.getElementsByClassName("section");
    console.log(els);
    animarElementos(els);

    return () => {};
  }, []);

  return (
    <>
      <div className="home">
        <div className="landing  margin-b400">
          <Header></Header>
          <div className="hero">
            <div className="hero-container">
              <div>
                <div className="hero-title margin-b200">
                  <h1 className="headline">
                    The easiest way to reserve for your events
                  </h1>
                </div>
                <div className="hero-description margin-b200">
                  <p className="f-large w-light">
                    - create forms for your events <br />
                    - generate custom tickets <br />- another feature
                  </p>
                </div>
                <div className="hero-button">
                  <Link to="/login">
                    <button className="btn btn-white">Start now</button>
                  </Link>
                </div>
              </div>
              <div className="hero-video">
                <iframe
                  title="How to use Tickio"
                  className="video"
                  src="https://www.youtube.com/embed/FnOPA0Rz8hM"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <section id="how-to-use" className="how-to-use section">
          <div className="wrapper">
            <h1 className="f-headline margin-b300">How to use</h1>
            <div className="steps">
              <div className="steps-card shadow">
                <div className="image-icon a margin-b300">
                  <i className="material-icons">add</i>
                </div>
                <h2 className="f-large w-bold margin-b100">Create a Event</h2>
                <p>select a name for your event, only need to be registered</p>
              </div>
              <div className="steps-card shadow">
                <div className="image-icon b margin-b300">
                  <i className="material-icons">create</i>
                </div>
                <h2 className="f-large w-bold margin-b100">Edit your Event</h2>
                <p>select a name for your event, only need to be registered</p>
              </div>
              <div className="steps-card shadow">
                <div className="image-icon c margin-b300">
                  <i className="material-icons">person_search</i>
                </div>
                <h2 className="f-large w-bold margin-b100">View who will go</h2>
                <p>select a name for your event, only need to be registered</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer__bottom">
          <p className="f-small">© Tickio 2020.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
