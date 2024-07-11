import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import anime from "../../assets/anime.png";
import anime2 from "../../assets/anime2.jpeg";
import anime3 from "../../assets/anime3.jpeg";

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div style={{ marginTop: "20px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dot"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="single-carousel-container">
          <div className="row-version">
            <div className="left-component">
              <h2>My Hero Academia</h2>
              <div className="second-row">
                <span className="pg">PG 13</span>
                <span className="hd">HD</span>
                <span className="hd">CC</span>
                <i className="fa-solid fa-microphone"></i>
                <span className="date">May 04,2024</span>
              </div>
              <article className="paragraph">
                It follows a doctor and his recently deceased patient who were
                reborn as twins to a famous Japanese pop idol and navigate the
                highs and lows of the country's entertainment industry as they
                grow up together through their lives.
              </article>
              <button className="play-button">
                <i className="fa-solid fa-play"></i>
                <span>Play Now</span>
              </button>
            </div>
            <div className="image-container">
              <figure>
                <img src={anime} alt="Anime" />
              </figure>
            </div>
          </div>
        </div>
        <div className="single-carousel-container">
          <div className="row-version">
            <div className="left-component">
              <h2>Oshi No Ko Season2</h2>
              <div className="second-row">
                <span className="pg">PG 13</span>
                <span className="hd">HD</span>
                <span className="hd">CC</span>
                <i className="fa-solid fa-microphone"></i>
                <span className="date">May 04,2024</span>
              </div>
              <article className="paragraph">
                It follows a doctor and his recently deceased patient who were
                reborn as twins to a famous Japanese pop idol and navigate the
                highs and lows of the country's entertainment industry as they
                grow up together through their lives.
              </article>
              <button className="play-button">
                <i className="fa-solid fa-play"></i>
                <span>Play Now</span>
              </button>
            </div>
            <div className="image-container">
              <figure>
                <img src={anime2} alt="Anime" />
              </figure>
            </div>
          </div>
        </div>
        <div className="single-carousel-container">
          <div className="row-version">
            <div className="left-component">
              <h2>Tower of God</h2>
              <div className="second-row">
                <span className="pg">PG 13</span>
                <span className="hd">HD</span>
                <span className="hd">CC</span>
                <i className="fa-solid fa-microphone"></i>
                <span className="date">May 04,2024</span>
              </div>
              <article className="paragraph">
                It follows a doctor and his recently deceased patient who were
                reborn as twins to a famous Japanese pop idol and navigate the
                highs and lows of the country's entertainment industry as they
                grow up together through their lives.
              </article>
              <button className="play-button">
                <i className="fa-solid fa-play"></i>
                <span>Play Now</span>
              </button>
            </div>
            <div className="image-container">
              <figure>
                <img src={anime3} alt="Anime" />
              </figure>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
