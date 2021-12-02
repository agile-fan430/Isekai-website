import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Scroll from "../Component/Scroll";
import ReactPlayer from "react-player/lazy";
import { silverListing } from "../data/silverListing";
import { goldListing } from "../data/goldListing";
import { legendaryListing } from "../data/legendaryListing";
import { platinumListing } from "../data/platinumListing";
import { schoolSeries } from "../data/SchoolSeries";
import { trendingListing } from "../data/trendingListing";
import LazyLoad from "react-lazyload";
import axios from "axios";

function Makretplace() {
  // let subtitle;
  // const [modalIsOpensilver, setIsOpensilver] = React.useState(false);
  // const [modalIsOpendetail, setIsOpendetail] = React.useState(false);
  // const [showVideo, setShowVideo] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // function openModalsilver() {
  //   setIsOpensilver(true);
  // }

  // function afterOpenModalsilver() {}

  // function closeModalsilver() {
  //   setIsOpensilver(false);
  // }

  // function openModaldetail() {
  //   setIsOpendetail(true);
  //   setIsOpensilver(false);
  // }

  // function afterOpenModaldetail() {}

  // function closeModaldetail() {
  //   setIsOpendetail(false);
  // }

  const [viewImageOne, setViewImageOne] = useState(false);
  const [viewImageTwo, setViewImageTwo] = useState(false);
  const [activeItem, setActiveItem] = useState();
  const [isSocial, setIsSocial] = useState();
  const [stats, setStats] = useState();

  useEffect(() => {
    setIsSocial(localStorage.getItem("social_banner"));
    console.log(localStorage.getItem("social_banner"));

    const fetchStats = async () => {
      const data = await axios.get(
        "https://marketplace.ecchicoin.com/salesInfo"
      );
      setStats(data?.data);
    };
    fetchStats();
  }, []);

  function activeItemSetter(id) {
    setActiveItem(id);
  }

  function viewimage(e, num) {
    if (num === 1) {
      setViewImageOne(true);
    }
    if (num === 2) {
      setViewImageTwo(true);
    }
  }
  //     // href="/preview";
  //     // setIsOpensilver(true);
  //   }

  const renderPrevButton = ({ isDisabled }) => {
    if (!isDisabled) {
      return (
        <img
          className="left-arrow-market"
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/silver-right-arrow.png"
          alt="arrow"
        />
      );
    }
  };

  const renderNextButton = ({ isDisabled }) => {
    if (!isDisabled) {
      return (
        <img
          className="right-arrow-market"
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/silver-left-arrow.png"
          alt="arrow"
        />
      );
    }
  };

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
        <div className="comming-soon-text text-center marketplace-page-heading">
          <img
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/Ecchicoin+NFT.png"
            className="img-fluid market-place-title"
            alt="img"
          />

          <div className="row daily-volume">
            <div className="col-md-5">
              <h3>Total </h3>
              <h3>Sales</h3>
              <h4>{stats?.totalSales}</h4>
            </div>
            <div className="col-md-2" />
            <div className="col-md-5">
              <h3>Total Earnings</h3>
              {stats?.totalEarnings.$numberDecimal ? (
                <h4>
                  {Math.floor(
                    stats?.totalEarnings?.$numberDecimal / 1000000000000000000
                  )}
                </h4>
              ) : (
                <h4>0</h4>
              )}
            </div>
          </div>
        </div>
        {/* <img src={comingsoon} style={{position: "absolute", top: "40%", left: "25%"}}/> */}
        {reduceMotion ? (
          <div className="landing-banner">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/market-animation.jpg"
              className="img-fluid"
              alt="img"
            />
          </div>
        ) : (
          <ReactPlayer
            url="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/market-animation.mp4"
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
          {/* <label className="custom-control-label" for="customCheck1">Reduce Motion</label> */}
          <label className="custom-control-label" htmlFor="customCheck1">
            Reduce Motion
          </label>
        </div>
      </div>

      <div className="main-section-background">
        <div className="combine-section">
          <section className="section-2">
            <div className="container h-100">
              <div className="row align-self-center">
                <div className="col-md-12 my-5">
                  <div className="row align-self-center head-images">
                    <div className="col-md-4 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-left-silver.svg"
                        className="img-fluid"
                        alt="Pattern-left-silver"
                      />
                    </div>
                    <div className="col-md-4">
                      <h2
                        className="
                        text-center text-silver
                        heading
                        animated_content
                        animate__animated
                        "
                      >
                        SILVER
                      </h2>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-right-silver.svg"
                        className="img-fluid"
                        alt="Pattern-right-silver"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <AliceCarousel
                id="carousel"
                activeIndex
                autoPlay={true}
                autoPlayInterval={2000}
                autoPlayStrategy="default"
                infinite={true}
                onSlideChanged={(e) => {
                  activeItemSetter(e.item);
                }}
                responsive={{
                  767: {
                    items: 2,
                  },
                  991: {
                    items: 3,
                  },
                }}
                mouseDragEnabled
              >
                {silverListing?.map((item) => (
                  <Link
                    key="{item}"
                    className="item"
                    to={`/preview/${item.id}`}
                  >
                    <div className="thumb-wrapper">
                      <LazyLoad
                        once={true}
                        placeholder={
                          <img
                            src={
                              "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/loader.gif"
                            }
                            alt="myimage"
                            width="200"
                          />
                        }
                      >
                        <img src={item.image} alt="" />
                      </LazyLoad>
                    </div>
                  </Link>
                ))}
              </AliceCarousel>
              <img
                className="right-arrow"
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/silver-left-arrow.png"
                alt="arrow"
              ></img>
              <img
                className="left-arrow"
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/silver-right-arrow.png"
                alt="arrow"
              ></img>
            </div>
          </section>
          <section className="section-3">
            <div className="container h-100">
              <div className="row align-self-center">
                <div className="col-md-12 my-5">
                  <div className="row head-images">
                    <div className="col-md-4 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-left-gold.svg"
                        className="img-fluid"
                        alt="Pattern-left-silver"
                      />
                    </div>
                    <div className="col-md-4">
                      <h2 className="text-center text-gold heading">GOLD</h2>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-right-gold.svg"
                        className="img-fluid"
                        alt="Pattern-right-silver"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <AliceCarousel
                autoPlay={true}
                autoPlayInterval={2000}
                autoPlayStrategy="default"
                infinite={true}
                responsive={{
                  767: {
                    items: 2,
                  },
                  991: {
                    items: 3,
                  },
                }}
                mouseDragEnabled
              >
                {goldListing?.map((item) => (
                  <Link
                    key="{item}"
                    className="item"
                    to={`/preview/${item.id}?type=gold`}
                  >
                    <div className="thumb-wrapper">
                      <LazyLoad
                        once={true}
                        placeholder={
                          <img
                            src={
                              "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/loader.gif"
                            }
                            alt="myimage"
                            width="200"
                          />
                        }
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="gold-card"
                          alt="img"
                        />
                      </LazyLoad>
                    </div>
                  </Link>
                ))}
              </AliceCarousel>
              <img
                className="right-arrow"
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/gold-left-arrow.png"
                alt="arrow"
              ></img>
              <img
                className="left-arrow"
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/gold-right-arrow.png"
                alt="arrow"
              ></img>
            </div>
          </section>
          <section className="section-2">
            <div className="container h-100">
              <div className="row align-self-center">
                <div className="col-md-12 my-5">
                  <div className="row align-self-center head-images">
                    <div className="col-md-4 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-left-silver.svg"
                        className="img-fluid"
                        alt="Pattern-left-silver"
                      />
                    </div>
                    <div className="col-md-4">
                      <h2
                        className="
                        text-center text-silver
                        heading
                        animated_content
                        animate__animated
                        "
                      >
                        School Girl Series
                      </h2>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-right-silver.svg"
                        className="img-fluid"
                        alt="Pattern-right-silver"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <AliceCarousel
                id="carousel"
                activeIndex
                autoPlay={true}
                autoPlayInterval={2000}
                autoPlayStrategy="default"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
                infinite={false}
                onSlideChanged={(e) => {
                  activeItemSetter(e.item);
                }}
                responsive={{
                  767: {
                    items: 2,
                  },
                  991: {
                    items: 3,
                  },
                }}
                mouseDragEnabled
              >
                {schoolSeries?.map((item) => (
                  <Link
                    key="{item}"
                    className="item"
                    to={`/preview/${item.id}?type=schoolSeries`}
                  >
                    <div
                      className="thumb-wrapper"
                      style={{ width: "35%", marginLeft: "32%" }}
                    >
                      <LazyLoad
                        once={true}
                        placeholder={
                          <img
                            src={
                              "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/loader.gif"
                            }
                            alt="myImage"
                            width="100"
                          />
                        }
                      >
                        <img src={item.image} alt="" />
                      </LazyLoad>
                    </div>
                  </Link>
                ))}
              </AliceCarousel>
            </div>
          </section>
          {
            <section className="section-4 platinum-section-area">
              <div className="container h-100">
                <div className="row align-self-center">
                  <div className="col-md-12 my-5">
                    <div className="row align-item-center head-images">
                      <div className="col-md-4 p-0 d-none d-md-block">
                        <img
                          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-left-silver.svg"
                          className="img-fluid"
                          alt="Pattern-left-silver"
                        />
                      </div>
                      <div className="col-md-4 p-0">
                        <h2 className="text-center text-silver heading">
                          PLATINUM
                        </h2>
                      </div>
                      <div className="col-md-4 p-0 d-none d-md-block">
                        <img
                          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-right-silver.svg"
                          className="img-fluid"
                          alt="Pattern-right-silver"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <AliceCarousel
                  autoPlay={false}
                  autoPlayInterval={2000}
                  autoPlayStrategy="default"
                  infinite={true}
                  renderPrevButton={renderPrevButton}
                  renderNextButton={renderNextButton}
                  items={platinumListing?.map((item) => (
                    <Link
                      key="{item}"
                      className="item"
                      to={`/preview/${item.id}?type=platinum`}
                    >
                      <div className="thumb-wrapper">
                        <LazyLoad
                          once={true}
                          placeholder={
                            <img
                              src={
                                "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/loader.gif"
                              }
                              alt="myimage"
                              width="200"
                            />
                          }
                        >
                          <img
                            src={item.compressed}
                            alt=""
                            className="gold-card"
                            alt="img"
                          />
                        </LazyLoad>
                      </div>
                    </Link>
                  ))}
                  responsive={{
                    767: {
                      items: 2,
                    },
                    991: {
                      items: 3,
                    },
                  }}
                  mouseDragEnabled
                />
              </div>
            </section>
          }
          <section className="section-5">
            <div className="container h-100">
              <div className="row align-self-center">
                <div className="col-md-12 my-5">
                  <div className="row head-images">
                    <div className="col-md-4 p-0 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-left-gold.svg"
                        className="img-fluid"
                        alt="Pattern-left-silver"
                      />
                    </div>
                    <div className="col-md-4 p-0">
                      <h2 className="text-center text-legendary heading">
                        Legendary
                      </h2>
                    </div>
                    <div className="col-md-4 p-0 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-right-gold.svg"
                        className="img-fluid"
                        alt="Pattern-right-silver"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <AliceCarousel
                autoPlay={false}
                autoPlayInterval={2500}
                autoPlayStrategy="default"
                infinite={true}
                responsive={{
                  767: {
                    items: 1,
                  },
                  1024: {
                    items: 2,
                  },
                }}
                mouseDragEnabled
              >
                {legendaryListing?.map((item) => (
                  <Link
                    key="{item}"
                    className="item"
                    to={`/preview/${item.id}?type=${item.type}`}
                  >
                    <div className="thumb-wrapper legendery_2">
                      <LazyLoad
                        once={true}
                        placeholder={
                          <img
                            src={
                              "https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/loader.gif"
                            }
                            alt="myimage"
                            width="200"
                          />
                        }
                      >
                        <ReactPlayer
                          url={item.compressed}
                          playing={true}
                          volume={1}
                          width="100%"
                          height=""
                          loop={true}
                        />
                      </LazyLoad>
                    </div>

                    <div className="legendary-video-box">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/legendary-cards-two.png"
                        alt="img"
                      ></img>
                    </div>
                  </Link>
                ))}
              </AliceCarousel>
              <img
                className="right-arrow"
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/legendary-left-arrow.png"
                alt="arrow"
              ></img>
              <img
                className="left-arrow"
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/legendary-right-arrow.png"
                alt="arrow"
              ></img>
            </div>
          </section>{" "}
          {"}"}
          {/* <section className="section-5">
            <div className="container h-100">
              <div className="row align-self-center">
                <div className="col-md-12 my-5">
                  <div className="row head-images">
                    <div className="col-md-3 p-0 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-left-silver.svg"
                        className="img-fluid"
                        alt="Pattern-left-silver"
                      />
                    </div>
                    <div className="col-md-6 p-0">
                      <h2 className="text-center text-white outline-font">
                        1/1
                      </h2>
                      <h2 className="text-center  text-silver heading">
                        Collectables
                      </h2>
                    </div>
                    <div className="col-md-3 p-0 d-none d-md-block">
                      <img
                        src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/pattern-right-silver.svg"
                        className="img-fluid"
                        alt="Pattern-right-silver"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <AliceCarousel
                autoPlay={false}
                autoPlayInterval={2500}
                autoPlayStrategy="default"
                infinite={true}
                responsive={{
                  767: {
                    items: 1
                  },
                  1024: {
                    items: 2
                  }
                }}
                mouseDragEnabled
              >
                {trendingListing?.map((item) => (
                  <Link
                    key="{item}"
                    className="item"
                    to={`/preview/${item.id}?type=${item.type}`}
                  >
                    
                    <div className="thumb-wrapper legendery_2 trending-nft-video">
                    <LazyLoad 
                    once={true}
                    placeholder={<img src={'https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/loader.gif'} alt="myimage" width="500" />}
                    >
                      <ReactPlayer
                        url={item.image}
                        playing={true}
                        volume={1}
                        width="100%"
                        height=""
                        loop={true}
                      />
                      </LazyLoad>
                    </div>
                    
                    <div className="legendary-video-box">
                  <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/legendary-cards-two.png" alt="img"></img>
                </div>
                  </Link>
                ))}
               
              </AliceCarousel>
              <img
                className="right-arrow"
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/legendary-left-arrow.png"
                alt="arrow"
              ></img>
              <img
                className="left-arrow"
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/legendary-right-arrow.png"
                alt="arrow"
              ></img>
            </div>
          </section> */}
        </div>
      </div>

      {/* detail modal end */}
      <Scroll />

      <Footer />
    </div>
  );
}
export default Makretplace;
