import React from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Scroll from "../Component/Scroll";

function Token() {
  return (
    <div>
      <Header />
      <div className="token-section-1">
        <div
          style={{
            maxWidth: "1500px",
            position: "relative",
            height: "inherit",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <img
            className="img-fluid token_section-1-girl"
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section1_girl.png"
          />
          <img
            className="img-fluid token_section-1-girl-shadow"
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section1_girl_shadow.png"
          />
          <img
            className=" img-fluid token_section-1-guy"
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section1_guy.png"
          />
          <img
            className=" img-fluid token_section-1-guy-shadow"
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section1_guy_shadow.png"
          />
          <img
            className="img-fluid token_section-1-left-coin"
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section-1-left_coin.png"
          />
          <img
            className="img-fluid token_section-1-right-coin"
            src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section-1-right_coin.png.png"
          />

          <h1 className="token-this-is-ecchi-text">THIS IS ECCHICOIN</h1>

          <h1 className="token-this-is-ecchi-exclusively">
            EXCLUSIVELY ON BINANCE SMART CHAIN
          </h1>

          <div className="stats_container">
            <div style={{ marginTop: "30px" }} className="row">
              <div className="col-md-3 col-sm-6">
                <div className="stat_square_up">
                  <h1>2.5k+</h1>
                  <p>Ecchi Holders</p>
                </div>
              </div>
              <div id="stat_square" className="col-md-3 col-sm-6">
                <div className="stat_square_down">
                  <h1>10k+</h1>
                  <p>Telegram Holders</p>
                </div>
              </div>
              <div id="stat_square" className="col-md-3 col-sm-6">
                <div className="stat_square_up">
                  <h2>10000+</h2>
                  <p>Ecchi Reflected</p>
                </div>
              </div>
              <div id="stat_square" className="col-md-3 col-sm-6">
                <div className="stat_square_down">
                  <h1>$6M</h1>
                  <p>MARKETCAP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="token-section-2">
        <img
          style={{
            position: "absolute",
            left: "40px",
            top: "300px",
            width: "6%",
          }}
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_2_red_triangle.png"
        />

        <img
          style={{
            position: "absolute",
            right: "40px",
            top: "550px",
            width: "8%",
          }}
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_2_red_triangle.png"
        />

        <img
          style={{
            position: "absolute",
            right: "110px",
            top: "480px",
            width: "4%",
          }}
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_2_blue_triangle.png"
        />

        <img
          style={{
            position: "absolute",
            left: "80px",
            top: "240px",
            width: "3%",
          }}
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_2_blue_triangle.png"
        />

        <img
          style={{
            position: "absolute",
            left: "110px",
            top: "350px",
            width: "6%",
          }}
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_2_blue_triangle.png"
        />

        <div className="section-2-center-container">
          <h1 className="section-2-main-heading">Tokenomics</h1>
          <div className="section-2-orange-container">
            <img
              className="section-2-center-picture"
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_2_center_picture.png"
            />
            <div className="section-2-text-container">
              <h4 className="section-2-heading">
                Automatic Liquidity Pool (LP)
              </h4>
              <h4 className="section-2-heading">BUSD Pairing</h4>
              <p className="section-2-text">
                We are using a unique solution of BUSD as a pairing for our
                EcchiCoin token (ECCHI) on PankcakeSwap. 4% of each transaction
                is split 50/50, half of which is sold by the contract, converted
                to BUSD, and paired with remaining ECCHI tokens. This pairing is
                then added as a liquidity pair on PancakeSwap, allowing for an
                incremental increase in the price floor. Our pairing with BUSD
                instead of the traditional BNB token creates a stablecoin
                pairing that is not impacted with the volatility of wild price
                fluctuations that can happen in the market. Our project will not
                pump or dump based on the market, but only on how well our team
                manages our token and our community expectations
              </p>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center" }} className="col-md-3 col-sm-6">
              <h3>Manual Burns</h3>
              <p style={{ fontSize: "14px" }}>
                Token burns will be controlled by the team, with the tokens sent
                to a dead address. These burns will be based on a certain
                milestones being achieved and will be part of the rewards
                program.
              </p>
            </div>
            <div style={{ textAlign: "center" }} className="col-md-3 col-sm-6">
              <h3>Anti-Whaling</h3>

              <p style={{ fontSize: "14px" }}>
                The anti-whaling feature will prevent transactions larger than
                0.3% of the total circulating supply occuring.
              </p>
              <p style={{ fontSize: "14px" }}>
                An additional anti-whaling feature prevents holders owning more
                than 5% of the total circulating supply.
              </p>
            </div>
            <div style={{ textAlign: "center" }} className="col-md-3 col-sm-6">
              <h3>Rewards</h3>
              <p style={{ fontSize: "14px" }}>
                Community events where the winners will have BUSD, Ecchi or
                NFT's airdropped to their wallets. The conditions for the events
                will be advertised and tracked.
              </p>
            </div>
            <div style={{ textAlign: "center" }} className="col-md-3 col-sm-6">
              <h3>Anti-Dumping</h3>
              <p style={{ fontSize: "14px" }}>
                We aim to prevent early dumping through vesting. This is where
                the tokens are relesed over a duration of time. We will have
                vesting for the Whitelist and for the private sale at 1 month
                and 4 months respectively, to ensure that we do have large sells
                immediately after
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="token-section-3">
        <img
          className="section-3-dragon"
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_3_dragon.png"
        />
        <img
          style={{
            position: "absolute",
            left: "100px",
            top: "30px",
            width: "25%",
          }}
          className="img-fluid"
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_3_cloud.png"
        />
        <img
          style={{
            position: "absolute",
            left: "300px",
            top: "60px",
            width: "23%",
          }}
          className="img-fluid"
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_3_cloud.png"
        />

        <div className="token-section-3-top-text">
          <h2 style={{ zIndex: "20" }}>Token Distribution</h2>
          <h4 style={{ zIndex: "20" }}>12% transaction fee</h4>
        </div>
        <div id="token-section-3-stats-row" className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="row">
              <div className="col-md-1 col-sm-1">
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                  }}
                />
              </div>
              <div className="col-md-9">
                <p style={{ fontSize: "12px" }}>Reflection back to holders</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                  }}
                />
              </div>
              <div className="col-md-9">
                <p style={{ fontSize: "12px" }}>Returned to liquidity</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "yellow",
                  }}
                />
              </div>
              <div className="col-md-9">
                <p style={{ fontSize: "12px" }}>Returned to reward wallet</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "aqua",
                  }}
                />
              </div>
              <div className="col-md-9">
                <p style={{ fontSize: "12px" }}>Returned to marketing wallet</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                  }}
                />
              </div>
              <div className="col-md-9">
                <p style={{ fontSize: "12px" }}>Returned to anime wallet</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_pieChart-01.png"
              style={{ width: "120%" }}
            />
          </div>
          <div
            style={{ textAlign: "center" }}
            className="col-lg-3 col-md-4 col-sm-12"
          >
            <h4 style={{ marginBottom: "40px" }}>
              Token tax reduction milestones
            </h4>
            <p className="section-3-text">$20 million Marketcap: 10%</p>
            <p className="section-3-text">$40 million Marketcap: 8%</p>
            <p className="section-3-text">$60 million Marketcap: 6%</p>
            <p className="section-3-text">$80 million Marketcap: 4%</p>
            <p className="section-3-text">$100 million Marketcap: 2%</p>
          </div>
        </div>
      </div>

      <div className="token_section_4">
        <div className="section_4_container">
          <h1>Roadmap</h1>
          <div className="tabs_data">
            <img
              className="single_tab"
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_anime_stars_outreach-01.png"
            />
            <img
              className="single_tab"
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_official_marketplace-01.png"
            />

            <img
              className="single_tab"
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_open_marketplace-01.png"
            />
            <img
              className="single_tab"
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_dapp-01.png"
            />
            <img
              className="single_tab"
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_isekai-01.png"
            />
          </div>
        </div>
      </div>
      <div className="token_section_5">
        <img
          className="token_section_5_girl"
          src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/token_section_4_girl.png"
        />
        <div className="token-section-5-text-container">
          <h1 style={{ color: "white" }}>How to buy</h1>
          <p className="token_section_5_heading">1. Get MetaMask Wallet</p>
          <p className="token_section_5_text">
            Go to metamask.io and install their app (available on Chrome Web
            Store, iOS and Android). MetaMask Wallet is a trusted, and secure
            wallet in the crypto space. Make sure to keep your seed phrase
            somewhere safe!
          </p>
          <p className="token_section_5_heading">
            2. Add Binance Smart Chain Network
          </p>
          <p className="token_section_5_text">
            You will need to add the Binance Smart Chain network into your
            MetaMask wallet before you can purchase EcchiCoin.
          </p>
          <p className="token_section_5_heading">3. Buy some BUSD</p>
          <p className="token_section_5_text">
            Purchase BUSD on exchanges, such as binance.com, and add your funds
            into your virtual wallet.
          </p>
          <p className="token_section_5_heading">
            4. Go to PancakeSwap and get some EcchiCoin
          </p>
          <p className="token_section_5_text">
            After you're all set, head to pancake.finance, connect your wallet
            and get some EcchiCoin. Set your slippage to 12%
          </p>
          <button className="btn btn-outline-light nav-link landing-button">
          <a
            style={{ color: "white" }}
            href="https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x5609366c91d87e6aad1f880999825da4875c2054"
            target="_blank"
          >
            Buy now
          </a>
        </button>
        </div>
      </div>
      <Scroll />
      <Footer />
    </div>
  );
}

export default Token;
