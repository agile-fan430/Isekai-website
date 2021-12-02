import { React, useState, useEffect } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import ReactPlayer from "react-player/lazy";

const Character = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  function redirectToDetails(id) {
    localStorage.setItem("itemId", id);
    window.location.href = "/details";
  }

  const [isSocial, setIsSocial] = useState();

  useEffect(() => {
    setIsSocial(localStorage.getItem("social_banner"));
  }, []);

  return (
    <div>
      <Header />
      <div
        className={
          isSocial === false || isSocial === "false"
            ? "landing-page-one no-margin"
            : "landing-page-one"
        }
      >
        {reduceMotion ? (
          <div className="landing-banner">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore.jpg"
              className="img-fluid"
              alt="img"
            ></img>
          </div>
        ) : (
          <ReactPlayer
            url="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore-fuyu-desktop-wallpaper.mp4"
            playing={true}
            volume={1}
            width="100%"
            height=""
            loop={true}
            alt="Animated Wallpaper"
          />
        )}
        <div className="video-img-check custom-control custom-checkbox">
          <input
            onChange={(e) => {
              setReduceMotion(!reduceMotion);
            }}
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Reduce Motion
          </label>
        </div>
      </div>
      <section className="character_section">
        <section className="character_section_listing ">
          <div className="container">
            <h2 className="ecchicoin-heading text-center">Main Characters</h2>
            <div className="row">
              <div className="col-md-3 text-center effect-image">
                <p onClick={() => redirectToDetails(7)}>
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore-page/lore-akia-manto.png"
                    className="img-fluid"
                    alt="Lady Akia Manto"
                  />
                </p>
              </div>
              <div className="col-md-3 text-center effect-image">
                <p onClick={() => redirectToDetails(5)}>
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore-page/lore-lady-aloysia.png"
                    className="img-fluid"
                    alt="Lady Aloysia"
                  />
                </p>
              </div>
              <div className="col-md-3 text-center effect-image">
                <p onClick={() => redirectToDetails(6)}>
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore-page/lore-lady-fuyu.png"
                    className="img-fluid"
                    alt="Lady Fuyu"
                  />
                </p>
              </div>
              <div className="col-md-3 text-center effect-image">
                <p onClick={() => redirectToDetails(2)}>
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore-page/lore-lady-katakana.png"
                    className="img-fluid"
                    alt="Lady Katakana"
                  />
                </p>
              </div>
              <div className="col-md-3 text-center effect-image">
                <p onClick={() => redirectToDetails(1)}>
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore-page/lore-lady-Shistrike.png"
                    className="img-fluid"
                    alt="Lady Shistrike"
                  />
                </p>
              </div>
              <div className="col-md-3 text-center effect-image">
                <p onClick={() => redirectToDetails(8)}>
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore-page/lore-prince-ao.png"
                    className="img-fluid"
                    alt="Prince Ao"
                  />
                </p>
              </div>
              <div className="col-md-3 text-center effect-image">
                <p onClick={() => redirectToDetails(3)}>
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore-page/lore-princess-sukimi.png"
                    className="img-fluid"
                    alt="Princess Sukimi"
                  />
                </p>
              </div>
              <div className="col-md-3 text-center effect-image">
                <p onClick={() => redirectToDetails(4)}>
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/lore-page/lore-queen-pixlia.png"
                    className="img-fluid"
                    alt="Queen Pixlia"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container d-flex justify-content-center h-100 pb-5">
          <div className="row align-self-center">
            <div className="col-md-12 text-center map-area">
              <h1>The Isekai Island</h1>
              <img
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/map.png"
                className="img-fluid"
                alt="map"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Character;
