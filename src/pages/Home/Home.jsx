import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logo_dark } from "images";
import "./Home.scss";
import { Header } from "components";
import { Field } from "components/_common";

function animarElementos(elementos) {
  window.addEventListener("scroll", function () {
    console.log(elementos);
    for (let i = 0; i < elementos.length; i++) {
      let element = elementos[i];
      let posicion = element.getBoundingClientRect().top;
      let tamañoPantalla = window.innerHeight / 1.3;

      if (posicion < tamañoPantalla) {
        console.log("now");
        element.style.animation = `fadeIn .5s ease-out forwards`;
      }
    }
  });
}

const Home = (props) => {
  useEffect(() => {
    const els = document.getElementsByClassName("home-section");
    console.log(els);
    animarElementos(els);

    return () => {};
  }, []);

  return (
    <>
      <Header />
      <div className="hero">
        <div className="hero__container">
          <div className="hero__text">
            <h1>Tickio is system where you can adminstrate </h1>
          </div>
          <div className="hero__button">
            <button className="btn">Try Now</button>
          </div>
          <div className="hero__video">
            <iframe
              src="https://www.youtube.com/embed/uwzAEwzUI8k"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="hero__bg"></div>
      </div>
      <div id="how-to-use" className="section-container">
        <section className="home-section">
          <h1 className="f-title margin-b400">HOW TO USE</h1>
          <div className="cards">
            <div className="card-step b-radius shadow">
              <div className="image-icon a margin-b200">
                <i className="material-icons">search</i>
              </div>
              <h2 className="f-large w-bold margin-b100">start</h2>
              <p>do more</p>
            </div>
            <div className="card-step b-radius shadow">
              <div className="image-icon b margin-b200">
                <i className="material-icons">search</i>
              </div>
              <h2 className="f-large w-bold margin-b100">start</h2>
              <p>do more</p>
            </div>
            <div className="card-step b-radius shadow">
              <div className="image-icon c margin-b200">
                <i className="material-icons">search</i>
              </div>
              <h2 className="f-large w-bold margin-b100">start</h2>
              <p>do more</p>
            </div>
          </div>
        </section>
      </div>
      <div id="about" className="section-container">
        <svg
          className="wave"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L60,256C120,256,240,256,360,234.7C480,213,600,171,720,149.3C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <section className="home-section">
          <h1 className="f-title">ABOUT</h1>
        </section>
      </div>
      <div id="contact" className="section-container">
        <svg
          className="wave"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f1f3f9"
            fill-opacity="1"
            d="M0,320L60,272C120,224,240,128,360,106.7C480,85,600,139,720,144C840,149,960,107,1080,80C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <section className="home-section">
          <h1 className="f-title margin-b300">CONTACT</h1>

          <form action="" className="contact-form">
            <Field placeholder="email" />
            <Field placeholder="subject" />
            <Field placeholder="description" textarea />
            <button className="btn">Send</button>
          </form>
        </section>
      </div>
      <footer>
        <div className="footer-logo">
          <img src={logo_dark} alt="" />
        </div>
        <p className="f-small w-light">Made with ❤ by kevin</p>
      </footer>
    </>
  );
};

export default Home;
