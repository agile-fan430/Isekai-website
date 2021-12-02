import React, { useState, useEffect } from "react";
import Header from "../Component/Header";
import Scroll from "../Component/Scroll";
import Footer from "../Component/Footer";
import { getOwnedItems } from "../api/cards";
import { useWeb3React } from "@web3-react/core";

function OwnedNFTs() {
  const [isSocial, setIsSocial] = useState();
  const [nfts, setNfts] = useState([]);

  const context = useWeb3React();
  const { account, active } = context;

  useEffect(() => {
    setIsSocial(localStorage.getItem("social_banner"));
    async function fetchData() {
      let res = await getOwnedItems(account?.toLowerCase());
      // res = [
      //   {
      //     contentURI:
      //       "https://ecchi-coin-nfts.s3.us-east-2.amazonaws.com/media/100006-katakana.png",
      //     amount: 1,
      //   },
      // ];
      setNfts(res);
    }
    fetchData();
  }, [active]);

  return (
    <div>
      <Header
        closeSocial={() => {
          setIsSocial(false);
        }}
      />

      <div className="main-section-background">
        <div className="container">
          <section className="character_section_listing ">
            <div
              className="container"
              style={
                isSocial == null
                  ? { marginTop: "350px" }
                  : { marginTop: "150px" }
              }
            >
              <h2 className="ecchicoin-heading text-center">Owned NFTs</h2>
              <div className="row">
                {nfts.length > 0 ? (
                  nfts?.map((n, index) =>
                    n ? (
                      <div
                        key={index}
                        className="col-md-3 text-center effect-image"
                      >
                        <img
                          src={n?.contentURI}
                          className="img-fluid"
                          alt="NFT"
                        />
                        <p
                          className="ecchicoin-subtext"
                          style={{ marginTop: "10px", fontSize: "20px" }}
                        >
                          amount: {n?.amount}
                        </p>
                      </div>
                    ) : (
                      <div key={index} />
                    )
                  )
                ) : (
                  <h4 className="col-md-12 text-center">
                    You do not own any NFTs
                  </h4>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* detail modal end */}
      <Scroll />

      <Footer />
    </div>
  );
}

export default OwnedNFTs;
