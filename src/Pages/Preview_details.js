import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { useParams } from "react-router-dom";
import { silverListing } from "../data/silverListing";
import { goldListing } from "../data/goldListing";
import { trendingListing } from "../data/trendingListing";
import { platinumListing } from "../data/platinumListing";
import { legendaryListing } from "../data/legendaryListing";
import ReactPlayer from "react-player/lazy";
import { getOnSaleItems, getTotalMinted } from "../api/cards";
import AliceCarousel from "react-alice-carousel";
import Web3 from "web3";
import OFFICIALMARKET_ABI from "../ABI/officialmarket.json";
import BUSD_ABI from "../ABI/busd.json";
import { buyNFT } from "../Hooks/web3";
import { AwesomeButton } from "react-awesome-button";
import "../button-styles.css";
import { useWeb3React } from "@web3-react/core";
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

const Preview_details = (props) => {
  const [cards, setCards] = useState([]);
  const [characterImage, setCharacterImage] = useState();
  const [totalMinted, setTotalMinted] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [disableBuy, setDisableBuy] = useState(true);

  const context = useWeb3React();
  const { account, connector, active } = context;

  const OFFICIALMARKET_ADDR = "0x96dF6bacD04F397340fe56D5EFadD7c743Cf0861";
  const BUSD_ADDR = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";

  const item = useRef(null);
  const type = useRef("");
  const params = new URLSearchParams(props.location.search);

  let { slug } = useParams();

  const buyNFT = async (price, saleID) => {
    // console.log(BigInt(price/1000000000000000000));
    const provider = await connector?.getProvider();
    //console.log(provider);
    const web3 = new Web3(provider);
    const officialMarketContract = new web3.eth.Contract(
      OFFICIALMARKET_ABI.abi,
      OFFICIALMARKET_ADDR
    );

    const addressArray = await window.ethereum.request({
      method: "eth_accounts",
    });
    if (addressArray.length === 0) {
      alert("Wallet is not connected. Please connect Wallet first!");
    } else {
      // await officialMarketContract.methods.getIsEcchiMarketplace().send({ from: address });
      await officialMarketContract.methods
        .buy(saleID)
        .send({ from: account })
        .on("sending", (e) => {})
        .on("sent", (e) => {})
        .on("transactionHash", (e) => {})
        .on("receipt", (e) => {
          window.location.reload();
        })
        .on("confirmation", (e) => {})
        .on("error", (e) => {});
      // await erc1155CollectibleContract.methods.mint (address).send({ from: address });
    }
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const fetchItemDetails = async (id) => {
    const data = await getOnSaleItems(id?.toString());
    const minted = await getTotalMinted(id?.toString());
    setTotalMinted(minted);
    setCards(data); //Comment this and uncomment the line below to test "None on sale" testcase
    //setCards([]); //Comment this and uncomment the line above to test otherwise
    let index = Math.floor(Math.random() * data.length);
    setActiveIndex(index);
  };

  const renderPrevButton = ({ isDisabled }) => {
    if (!isDisabled) {
      return (
        <img
          className="left-arrow"
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/silver-right-arrow.png"
          alt="arrow"
          style={{ bottom: "50%" }}
        />
      );
    }
  };

  const renderNextButton = ({ isDisabled }) => {
    if (!isDisabled) {
      return (
        <img
          className="right-arrow"
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/silver-left-arrow.png"
          alt="arrow"
          style={{ bottom: "50%" }}
        />
      );
    }
  };

  const checkApproved = async (price) => {
    const provider = await connector?.getProvider();
    //console.log(provider);
    const web3 = new Web3(provider);

    const ERC20Contract = new web3.eth.Contract(BUSD_ABI.abi, BUSD_ADDR);

    const allowance = await ERC20Contract.methods
      .allowance(account, OFFICIALMARKET_ADDR)
      .call();
    setDisableBuy(allowance < price);
  };

  const approve = async (price) => {
    if (!active) {
      console.log("No wallet connected!");
      return;
    }
    const provider = await connector?.getProvider();
    const web3 = new Web3(provider);
    const ERC20Contract = new web3.eth.Contract(BUSD_ABI.abi, BUSD_ADDR);

    await ERC20Contract.methods
      .approve(OFFICIALMARKET_ADDR, price)
      .send({ from: account })
      .on("confirmation", () => checkApproved(price));
  };

  useEffect(() => {
    type.current = params.get("type");
    item.current = type.current
      ? listings[type.current].find((i) => i.id.toString() === slug)
      : listings["silver"].find((i) => i.id.toString() === slug);
    setCharacterImage(item?.current?.image);
    fetchItemDetails(item?.current?.id);

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (active && cards.length > 0) {
      checkApproved(cards[activeIndex].price);
    }
  }, [active, cards]);

  return (
    <>
      <Header />
      <div className="preview-page preview-new-details">
        <Container>
          <Row>
            <Col md={6}>
              {cards?.length > 0 ? (
                <>
                  <AliceCarousel
                    id="carousel"
                    renderPrevButton={renderPrevButton}
                    renderNextButton={renderNextButton}
                    activeIndex={activeIndex}
                    autoPlay={false}
                    autoPlayInterval={2000}
                    autoPlayStrategy="default"
                    infinite={false}
                    items={cards?.map((character, index) =>
                      type.current === "legendary" ? (
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
                          key={index}
                          src={characterImage}
                          className={`mx-auto img-fluid animate__animated animate__flip ${
                            (type === "gold" ||
                              type === "trending" ||
                              type === "platinum" ||
                              type === "legendary") &&
                            "gold-card"
                          }`}
                          alt="img"
                        />
                      )
                    )}
                    onSlideChanged={syncActiveIndex}
                    responsive={{
                      767: {
                        items: 1,
                      },
                      991: {
                        items: 1,
                      },
                    }}
                    mouseDragEnabled
                  />
                </>
              ) : (
                <>
                  {item?.current?.is_video ? (
                    <ReactPlayer
                      url={item?.current?.image}
                      playing={true}
                      volume={1}
                      width="100%"
                      height=""
                      loop={true}
                    />
                  ) : (
                    <img
                      src={item?.current?.image}
                      className={`mx-auto img-fluid ${
                        type === "gold" && "gold-card"
                      }`}
                      alt=""
                    />
                  )}
                </>
              )}
            </Col>
            <Col md={6} className="card-detail-right-side">
              <div className="card-details-box text-left">
                <h2>
                  {item?.current?.title}-{" "}
                  {type.current
                    ? type.current === "Collectors"
                      ? "Collectors Edition"
                      : type.current === "gold"
                      ? "Gold Trading Card"
                      : `${type.current}`
                    : "Trading Card"}
                  {/* <br></br>Card */}
                </h2>
                <div className="pricing-box">
                  <h3>
                    Current Price:{" "}
                    <span>
                      {cards?.length > 0
                        ? "$" + cards[activeIndex]?.price / 1000000000000000000
                        : "-"}{" "}
                    </span>
                  </h3>
                  <h3>
                    Total Minted: <span>{totalMinted} </span>
                  </h3>
                  <h3>
                    Remaining: <span>{cards?.length} </span>
                  </h3>
                  <p className="text-center mt-5">
                    {cards ? (
                      cards?.length > 0 ? (
                        <div>
                          <AwesomeButton
                            disabled={!disableBuy}
                            onPress={() => {
                              approve(cards[activeIndex].price);
                            }}
                            style={{ marginRight: "20px" }}
                            type="primary dark"
                          >
                            Approve
                          </AwesomeButton>
                          <AwesomeButton
                            type="primary dark"
                            disabled={disableBuy}
                            onPress={() =>
                              buyNFT(
                                cards[activeIndex].price,
                                cards[activeIndex].saleId
                              )
                            }
                          >
                            Buy
                          </AwesomeButton>
                        </div>
                      ) : (
                        <a href="#">Out Of Stock</a>
                      )
                    ) : (
                      <></>
                    )}
                  </p>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="description-preview text-left">
                <h4>Description</h4>
                <p>{item?.current?.description?.split("\n")[0]}</p>
                <p>{item?.current?.description?.split("\n")[1]}</p>
              </div>
            </Col>
          </Row>
        </Container>
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
export default Preview_details;
