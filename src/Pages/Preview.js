import React, { useState, useEffect, useRef } from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { useParams } from "react-router-dom";
import { silverListing } from "../data/silverListing";
import { goldListing } from "../data/goldListing";
import { trendingListing } from "../data/trendingListing";
import { platinumListing } from "../data/platinumListing";
import { legendaryListing } from "../data/legendaryListing";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";
import { schoolSeries } from "../data/SchoolSeries";

const listings = {
  gold: goldListing,
  schoolSeries: schoolSeries,
  silver: silverListing,
  trending: trendingListing,
  platinum: platinumListing,
  legendary: legendaryListing,
  Collectors: trendingListing,
};

const Preview = (props) => {
  const [characterImage, setCharacterImage] = useState();
  const item = useRef("");
  const type = useRef("");
  const params = new URLSearchParams(props.location.search);
  let { slug } = useParams();

  useEffect(() => {
    type.current = params.get("type");
    item.current = type.current
      ? listings[type.current].find((i) => i.id.toString() === slug)
      : listings["silver"].find((i) => i.id.toString() === slug);
    setCharacterImage(item?.current?.image);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="preview-page text-center">
        <Container>
          <Row>
            <Col md={12} className="preview-vid">
              <>
                {type.current === "legendary" ? (
                  <ReactPlayer
                    url={characterImage}
                    playing={true}
                    volume={1}
                    width="100%"
                    height=""
                    loop={true}
                  />
                ) : (
                  <img
                    src={characterImage}
                    className={`mx-auto img-fluid animate__animated animate__flip ${
                      (type.current === "gold" ||
                        type.current === "trending" ||
                        type.current === "platinum" ||
                        type.current === "legendary") &&
                      "gold-card"
                    }`}
                    alt="img"
                  />
                )}

                <br />
                <p className="view-buy-btn">
                  <a
                    href={
                      type.current
                        ? `/preview_details/${slug}?type=${type.current}`
                        : `/preview_details/${slug}`
                    }
                    className="mx-auto button img-fluid preivew-view-more"
                  >
                    {" "}
                    View more
                  </a>
                </p>
                <br />
                <br />
              </>
            </Col>
          </Row>
        </Container>
        <p className="flame-preview">
          <img
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/flame.png"
            alt="img"
          />
        </p>
        <div className="left-side-preview">
          <img
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/left-monster.png"
            className="img-fluid"
            alt="img"
          />
        </div>
        <div className="right-side-preview">
          <img
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/right-monster.png"
            className="img-fluid"
            alt="img"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Preview;
