import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactPlayer from "react-player/lazy";
import Header from "../Component/Header";
import Scroll from "../Component/Scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Component/Footer";
import Web3 from "web3";
import Audio from "../Component/Audio";
import abi from "../../src/ABI/erc20.json";
import { ECCHICOIN_CONTRACT_ADDRESS } from "../constants";
import { AwesomeButton } from "../../node_modules/react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import { useAuth } from '../contextAPI';

AOS.init({});

const Landingpage = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [showSocial, setSocial] = useState(true);
  const [walletAmount, setWalletAmount] = useState(0);
  const [walletAddress, setWalletAddress] = useState();
  const [progressBarWidth, setProgressBarWidth] = useState();
  const [isSocial, setIsSocial] = useState();

  useEffect(() => {
    // setWalletAddress(localStorage.getItem("metamaskAccount"));
    setIsSocial(localStorage.getItem("social_banner"));
  }, []);  

  useEffect(() => {
    const walletTracker = async () => {
      if (
        typeof window.ethereum !== "undefined" ||
        typeof window.web3 !== "undefined"
      ) {
        const web3 = new Web3(window.ethereum);
        // await window.ethereum.enable();
        const contract = new web3.eth.Contract(
          abi.abi,
          ECCHICOIN_CONTRACT_ADDRESS.Ecchicoin_Contract_Address
        );
        const data = await contract.methods
          .balanceOf("0x868Bc583305405130Cb8B1692DAa3bA0e3Be5CDb")
          .call();
        setWalletAmount(data / 1000000000);
      }
    };
    walletTracker();
  }, []);

  useEffect(()=>{ 
    if (walletAmount!==undefined){
      const walletAmountInt = Math.floor(walletAmount);
      const progress = Math.floor((walletAmountInt/700000000)*100).toString() + "%";
      setProgressBarWidth(progress);
    }
  },[walletAmount])

  return (
    <div>
      <Header
        closeSocial={() => {
          setSocial(false);
        }}
      />
      <div
        className={
          isSocial === false || isSocial === "false" ? "landing-page-one no-margin" :  "landing-page-one"
        }
      >
        {reduceMotion ? (
          <div className="landing-banner">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/video.jpg"
              className="img-fluid"
              alt="img"
            ></img>
          </div>
        ) : (
          <ReactPlayer
            url="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/landing-animated.mp4"
            playing={true}
            volume={1}
            width="100%"
            height=""
            loop={true}
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

        <button className="btn btn-outline-light nav-link landing-button">
          <a
            style={{ color: "white" }}
            href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x5609366c91d87e6aad1f880999825da4875c2054"
            target="_blank"
          >
            Buy now
          </a>
        </button>
        <button
          style={{
            marginTop: "10px",
          }}
          className="btn btn-outline-light nav-link landing-button"
        >
          <a
            target="_blank"
            style={{ color: "white" }}
            href="https://wiki.ecchicoin.com/"
          >
            EcchiCoin Wiki
          </a>
        </button>
      </div>
      <Audio />

      <section className="landingpage">
        <p className="side-vector">
          <img
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/vector.png"
            alt="cartoon"
            className="img-fluid"
          ></img>
        </p>

        <div className="landing-page-two text-center">
          <div className="container">
            <h2 className="ecchicoin-heading margin-remove-heading">
              What is Ecchicoin?
            </h2>
            <div className="row">
              <div className="col-md-6">
                <img
                  className="fourgirls img-fluid"
                  src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/four_girl.png"
                  alt="cartoon"
                ></img>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="anime-section">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/dots.png"
                    alt="dot"
                  />
                  <p>
                    We are an anime fantasy powered project that is both a
                    token, NFT marketplace, and much more. We plan on
                    incorporating our Anime characters into not only our
                    website, NFT’s, but also games and eventually a fully
                    animated series. We hope the community will be so inspired
                    by our characters and their stories that we will be able to
                    raise enough capital to fund an entire season of our
                    animated show.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidevector-div">
          <p className="side-vector-right">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/red.png"
              alt="cartoon"
              className="img-fluid"
            ></img>
          </p>
        </div>

        <div className="landing-page-three text-center">
          <div className="containe landing-page-player">
            <h2 className="ecchicoin-heading margin-remove-heading">
              Isekai Island Anime Series
            </h2>

            <div className="video-frame-landing">
              <ReactPlayer
                url="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/Anime-comingsoon.mp4"
                playing={true}
                controls={true}
                volume={1}
                width="100%"
                height=""
                playIcon={
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/play-button.png"
                    className="paly-button"
                    alt="img"
                  ></img>
                }
                light="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/mountain_2.png"
                // playIcon={<p>dfhsdfklghgfhljfgkljhfgkldjhfgkldjhfgldjhfgkldjhfgkldjhfgkldjhfgklhklfgdjhfgkldjgh</p>}
              />
            </div>
          </div>
        </div>
        <div className="sidevector-div">
          <p className="side-vector">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/green.png"
              alt="cartoon"
              className="img-fluid"
            ></img>
          </p>
        </div>
        <div className="container">
          <div className="white-box-area">
            <p>
              Isekai Island is our original Fantasy themed Anime series that we
              are looking to make once we reach our funding goal. We have a live
              tracker on our web site showing our progress so investors can see
              how soon we will be going into full production. We have hired an
              amazing screenwriter who has begun writing our screenplays for the
              season which will each be ten, 30-minute-long episodes. Our
              incredible composer, Raj Ramayya, is already at work crafting more
              fabulous original music for our project. The Ecchicoin team are in
              contact with some of the biggest stars in all of Anime to voice
              our lead characters: Cherami Leigh, Morgan Berry, and Kira
              Buckland.{" "}
            </p>
          </div>
        </div>
        <div className="wallet-tracker text-center">
          <div className="container">
            <h3>Anime Wallet Tracker</h3>
            <div className="anime_wallet_progress">
              <div style={{width: progressBarWidth}} className="anime_wallet_progress_bar">
                <h3>
                  {Math.floor(walletAmount)}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-page-three text-center battle-game">
          <div className="container-fluid">
            <h2 className="ecchicoin-heading mb-4 isekai-heading">
              Isekai Battle Game <br></br>Play To Earn
            </h2>

            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/sukimi.png"
              alt="cartoon"
              className="img-fluid"
            ></img>
            <p className="cards">
              <img
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/cards.png"
                alt="cartoon"
                className="img-fluid vert-move"
              ></img>
            </p>

            <div className="earn-text">
              <p>
                Build up your army by buying NFT's, defend your castle or battle
                against the mythical creatures of the Isekai Island.
              </p>
            </div>
          </div>
        </div>
        <div className="sidevector-div">
          <p className="side-vector">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/vector.png"
              alt="cartoon"
              className="img-fluid"
            ></img>
          </p>
        </div>

        <div className="landing-page-features-box">
          <div className="container">
            <h2 className="ecchicoin-heading mb-4 text-center margin-remove-heading margin-remove-heading">
              Features
            </h2>
            <div className="faeature-area">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <div className="feture-content">
                    <h3>Automatic Liquidity Pool (LP) BUSD Pairing</h3>
                    <p>
                      We are using a unique solution of BUSD as the pairing for
                      our EcchiCoin token (ECCHI) on PancakeSwap. 4% of each
                      transaction is split 50/50, half of which is sold by the
                      contract, converted to BUSD, and paired with remaining
                      ECCHI tokens. This pairing is then added as a liquidity
                      pair on PancakeSwap, allowing for an incremental increase
                      in the price floor.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 align-self-center">
                  <div className="feature-image-frame">
                    <img
                      src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/bsud_logo.png"
                      alt="frame"
                      width="400"
                      className="img-fluid home-img-box"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidevector-div">
          <p className="side-vector">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/vector.png"
              alt="cartoon"
              className="img-fluid"
            ></img>
          </p>
        </div>
        <div className="manual-burns-area text-center mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="manual-bur-one">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/burn.png"
                    className="img-fluid"
                    alt="img"
                  ></img>
                  <h4>Manual Burns</h4>
                  <p>
                    Token burns will be controlled by the team, with the tokens
                    sent to a dead address. These burns will be based on certain
                    milestones being achieved and will be part of the rewards
                    program.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="manual-bur-one">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/burn.png"
                    className="img-fluid"
                    alt="img"
                  ></img>
                  <h4>Anti-Whaling</h4>
                  <p>
                    The anti-whaling feature will prevent transactions larger
                    than 0.3% of the total circulating supply occurring. An
                    additional anti-whaling feature prevents holders owning more
                    than 5% of the total circulating supply.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="manual-bur-one">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/burn.png"
                    className="img-fluid"
                    alt="img"
                  ></img>
                  <h4>Rewards</h4>
                  <p>
                    Community Events where the winners will have BUSD airdropped
                    to their wallets. The conditions for the events will be
                    advertised and tracked.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-5">
                <div className="manual-bur-one">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/burn.png"
                    className="img-fluid"
                    alt="img"
                  ></img>
                  <h4>Anti Dumping</h4>
                  <p>
                    We aim to prevent early dumping through vesting. This is
                    where the tokens are released over a duration of time. We
                    will have vesting for the Whitelist and for the private sale
                    at 1 month and 4 months respectively, to ensure that we do
                    NOT have large sells immediately after launch.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mt-5">
                <div className="manual-bur-one">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/burn.png"
                    className="img-fluid"
                    alt="img"
                  ></img>
                  <h4> Marketplace - Buyback</h4>
                  <p>
                    For each NFT purchase or sell on the EcchiCoin marketplace,
                    a 2% (max) or 1% (min) fee is applied, which is split 50/50,
                    half of which are used to purchase EcchiCoin by the smart
                    contract and paired with the remaining BUSD This is then
                    added as a liquidity pair on PancakeSwap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidevector-div">
          <p className="side-vector-right">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/green-vector.png"
              alt="cartoon"
              className="img-fluid"
            ></img>
          </p>
        </div>
        <div className="tokenomics-area">
          <h2 className="ecchicoin-heading mb-4 text-center margin-remove-heading">
            Tokenomics
          </h2>
          <div className="text-center takenomics-image">
            <h3>12% Transaction Fee</h3>
            <h6>Token Tax reduction milestones:</h6>
            <p>$20 million Marketcap: 10%</p>
            <p>$40 million Marketcap: 8%</p>
            <p>$60 million Marketcap: 6%</p>
            <p>$80 million Marketcap: 4%</p>
            <p>$100 million Marketcap: 2%</p>
          </div>
          <div className="container">
            <p className="text-center frame-new-box">
              <img
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/frame_new.png"
                alt="pic"
                className="img-fluid"
              ></img>
            </p>
          </div>
        </div>

        <div className="landing-page-three text-center tire-nft-main">
          <div className="container">
            <h2 className="ecchicoin-heading mb-4 nft-tier-system margin-remove-heading nft-tr">
              NFT Tier System
            </h2>
          </div>
        </div>

        <section className="section-4 landing-page-section-4">
          <div className="container h-100 text-center">
            <AliceCarousel
              autoPlay={false}
              autoPlayInterval={1000}
              autoPlayStrategy="default"
              infinite={true}
              responsive={{
                767: {
                  items: 1,
                },
                1024: {
                  items: 3,
                },
                1201: {
                  items: 4,
                },
              }}
              mouseDragEnabled
            >
              <p>
                <div className="thumb-wrapper">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/peasant.png"
                    alt="img"
                  />
                </div>
              </p>
              <p>
                <div className="thumb-wrapper">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/squire.png"
                    alt="img"
                  />
                </div>
              </p>
              <p>
                <div className="thumb-wrapper">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/knight.png"
                    alt="img"
                  />
                </div>
              </p>
              <p>
                <div className="thumb-wrapper">
                  <img
                    src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/wizard.png"
                    alt="img"
                  />
                </div>
              </p>
            </AliceCarousel>
            <img
              className="right-arrow"
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/platinum-left-arrow.svg"
              alt="arrow"
            ></img>
            <img
              className="left-arrow"
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/platinum-right-arrow.png"
              alt="arrow"
            ></img>
          </div>
        </section>

        <Footer />
      </section>
      <Scroll />
    </div>
  );
};
export default Landingpage;
