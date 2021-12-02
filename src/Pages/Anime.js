import { React, useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import ReactPlayer from "react-player/lazy";
import Header from "../Component/Header";
import "aos/dist/aos.css";
import Footer from "../Component/Footer";
import Audio from "../Component/Audio";
import Web3 from "web3";
import { ECCHICOIN_CONTRACT_ADDRESS } from "../constants";
import abi from "../../src/ABI/erc20.json";

const Anime = () => {
  const [walletAmount, setWalletAmount] = useState(0);
  const [walletAddress, setWalletAddress] = useState();
  const [progressBarWidth, setProgressBarWidth] = useState();
  useEffect(() => {
    setWalletAddress(localStorage.getItem("metamaskAccount"));
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

  useEffect(() => {
    if (walletAmount !== undefined) {
      const walletAmountInt = Math.floor(walletAmount);
      const progress =
        Math.floor((walletAmountInt / 700000000) * 100).toString() + "%";
      setProgressBarWidth(progress);
    }
  }, [walletAmount]);

  return (
    <div>
      <Header />

      <section className="anime-page text-center">
        <div className="video_bg">
          {/* <video playsinline="" autoplay=""><source src="./images/anime.mp4" type="video/mp4"/></video> */}
          <div className="container">
            <h1 className="text-center">Isekai Island Anime Series</h1>
            <div className="video-frame">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=UmMBKb93yk0"
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
                light="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/anime.png"
                // playIcon={<p>dfhsdfklghgfhljfgkljhfgkldjhfgkldjhfgldjhfgkldjhfgkldjhfgkldjhfgklhklfgdjhfgkldjgh</p>}
              />
            </div>
          </div>
          <div className="griffin-image">
            <div className="griffen">
              <img
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/griffin.png"
                className="img-fluid"
                alt="img"
              ></img>
            </div>
          </div>
          <Audio />

          <div className="wallet-tracker text-center">
            <div className="container">
              <h3>Anime Wallet Tracker</h3>
              <div className="anime_wallet_progress">
                <div
                  style={{ width: progressBarWidth }}
                  className="anime_wallet_progress_bar"
                >
                  <h3
                    style={{
                      fontSize: "40px",
                      marginTop: "10px",
                      position: "absolute",
                      left: "0",
                      right: "0",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {Math.floor(walletAmount)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="anime-content">
              <p>
                Isekai Island is our original Fantasy themed Anime series that
                we are looking to make once we reach our funding goal. We have a
                live tracker on our web site showing our progress so investors
                can see how soon we will be going into full production. We have
                hired an amazing screenwriter who has begun writing our
                screenplays for the season which will each be ten,
                30-minute-long episodes. Our incredible composer, Raj Ramayya,
                is already at work crafting more fabulous original music for our
                project. The Ecchicoin team are in contact with some of the
                biggest stars in all of Anime to voice our lead characters:
                Cherami Leigh, Morgan Berry, and Kira Buckland. All these
                awesome actors have already spent time with us in the recording
                booth recording voice overs for our Isekai Battle game and our
                marketing teasers. We hope to be able to sign them all for our
                show as well!{" "}
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="anime-mika">
                  <div className="mika-img-anime">
                    <img
                      src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/ellipse-8.png"
                      alt="img"
                    />
                    <p>Mika Kobayashi</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="anime-mika">
                  <div className="mika-img-anime">
                    <img
                      src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/ellipse-9.png"
                      alt="img"
                    />
                    <p>Strawberry hill Music</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-frame" style={{ marginTop: 50 }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=Fa-Khv08spc"
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
                // onReady={() => console.log("ready now")}
                // light="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/anime.png"
                // playIcon={<p>dfhsdfklghgfhljfgkljhfgkldjhfgkldjhfgldjhfgkldjhfgkldjhfgkldjhfgklhklfgdjhfgkldjgh</p>}
              />
            </div>
            <div className="anime-content">
              <p>
                {" "}
                Creating a Anime show takes imagination, a great story, a
                wonderful team and lots of money! We hope that the Ecchicoin
                family will want to see us succeed and get our show made which
                will then help power our Ecchicoin token to even greater
                success. Merchandising, games, conventions, soundtrack, cosplay
                competitions and much more will be fabulous tools for marketing
                this project. The team is in contact with 2 well known studios
                in Japan to produce and make our show as soon as we have reached
                our goals. Please stay tuned for more updates as we strive to
                make the most exciting Anime series you have seen, all powered
                by Ecchicoin!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Anime;
