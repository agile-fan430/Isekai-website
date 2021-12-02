import { React, useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import Modal from "react-modal";
import "./Header.css";
import ReactTooltip from "../../node_modules/react-tooltip";
import "react-awesome-button/dist/themes/theme-blue.css";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useAuth } from "../contextAPI";
import Web3 from "web3";
import OFFICIALMARKET_ABI from "../ABI/officialmarket.json";
import { injected, walletconnect } from "../connectors";
import { useWeb3React } from "@web3-react/core";

// const { Moralis, isAuthenticated, logout } = require("moralis");

// Moralis.initialize("2CvJC33q2pj9E0YNJrFNWDOAd60oswqPQEw7yyFy");
// Moralis.serverURL = "https://n3cmkaybrpq8.usemoralis.com:2053/server";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    height: "auto",
    padding: "initial",
    zIndex: "200",
    backgroundcolor: "#000 !important",
  },
};
const Header = ({ closeSocial = () => {} }) => {
  const context = useWeb3React();
  const { activate, deactivate, account } = context;
  const [walletModal, setOpenWalletModal] = useState(false);

  // to suppress warning
  Modal.setAppElement("*");

  const connectWallet = async (userChoice) => {
    if (userChoice === "WALLETCONNECT") {
      activate(walletconnect);
    } else {
      activate(injected);
    }
  };

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true);
      }
    });
  }, []);

  function openWalletModal() {
    setOpenWalletModal(true);
  }

  function afterOpenWalletModal() {}

  function closeWalletModal() {
    setOpenWalletModal(false);
  }

  const [removeSocial, setRemoveSocial] = useState(false);

  return (
    <div>
      <Navbar className="navbar-header" bg="none" expand="lg">
        {!removeSocial &&
        (localStorage.getItem("social_banner") === "true" ||
          localStorage.getItem("social_banner") === null) ? (
          <div className="nav-top">
            <a href="https://wiki.ecchicoin.com/important/social-links">
              <img
                src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/join_socials_banner.png"
                alt="join our socials"
              />
            </a>
            <div className="close-activity">
              <button
                className="close-socialImg"
                onClick={(e) => {
                  closeSocial();
                  localStorage.setItem("social_banner", false);
                  setRemoveSocial(!removeSocial);
                }}
              >
                X
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}

        <Container fluid className="header-container"> 
          <Navbar.Brand href="/">
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/logo.png"
              width="140"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="effect" href="/">
                Home
              </Nav.Link>

              <Nav.Link className="effect" href="/tokens">
                Token
              </Nav.Link>

              <Nav.Link className="effect" href="/marketplace">
                Marketplace
              </Nav.Link>

              <Nav.Link className="effect" href="/character">
                Lore
              </Nav.Link>

              <Nav.Link className="effect" href="/anime">
                Anime Series
              </Nav.Link>

              <Nav.Link className="effect" href="/owned_nfts">
                Owned NFTs
              </Nav.Link>

              <Nav.Link href="#">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </Nav.Link>
              {/* {loggedIn?(  <Nav.Link href="#" onClick={()=>logout()} id="btnConnect" className="btn btn-outline-light">Disconnect Wallet</Nav.Link> ):(  <Nav.Link href="#" onClick={login} id="btnConnect" className="btn btn-outline-light">Connect Wallet</Nav.Link>)} */}
              {account === "undefined" ||
              account === undefined ||
              account === null ? (
                <Nav.Link
                  href="#"
                  id="btnConnect"
                  className="btn btn-outline-light nav-link"
                  onClick={() => openWalletModal()}
                  // onClick={() => connectWallet("METAMASK")}
                >
                  Connect
                </Nav.Link>
              ) : (
                <>
                  {/*<Nav.Link*/}
                  {/*  onClick={() => {*/}
                  {/*    navigator.clipboard.writeText(account);*/}
                  {/*  }}*/}
                  {/*  data-tip="Copy to clipboard"*/}
                  {/*  href="#"*/}
                  {/*  id="btnConnect"*/}
                  {/*  className="btn btn-outline-light nav-link"*/}
                  {/*>*/}
                  {/*  <p className="walletAddress">{account}</p>*/}
                  {/*</Nav.Link>*/}
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn nav-link btn-outline-light walletAddress rounded-pill"
                      variant="success"
                      id="dropdown-basic"
                    >
                      {account}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          navigator.clipboard.writeText(account);
                        }}
                      >
                        Copy Address
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          deactivate();
                        }}
                      >
                        Disconnect Wallet
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <ReactTooltip />
                </>
              )}

              {/* {walletAddress === "undefined" || walletAddress === undefined ? (
                <></>
              ) : (

              )} */}

              <Nav.Link className="effect play-bt" href="/game">
                <img
                  src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/play.png"
                  className="img-fluid"
                  alt="img"
                ></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        isOpen={walletModal}
        onAfterOpen={afterOpenWalletModal}
        onRequestClose={closeWalletModal}
        style={customStyles}
        contentLabel=""
      >
        <div className="wallet-choice-modal">
          <div
            onClick={() => {
              connectWallet("METAMASK");
              closeWalletModal();
            }}
            className="wallet_container"
          >
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/MetaMask_Fox.png"
              style={{ width: "30%" }}
            />
            <p>Connect wallet with metamask</p>
          </div>
          <div
            onClick={() => {
              connectWallet("WALLETCONNECT");
              closeWalletModal();
            }}
            className="wallet_container"
          >
            <img
              src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/WalletConnect.png"
              style={{ width: "30%" }}
            />
            <p>Scan with wallet connect</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Header;
