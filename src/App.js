import "./App.css";
import React, { useEffect } from "react";
import Marketplace from "./Pages/Marketplace";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Character from "./Pages/Character";
import Details from "./Pages/Details";
import Load from "./Pages/Load";
import Createitem from "./Pages/Createitem";
import Profile from "./Pages/Profile";
import Anime from "./Pages/Anime";
import Market from "./Pages/Market";
import Game from "./Pages/Game";
import Preview from "./Pages/Preview";
import Preview_details from "./Pages/Preview_details";
import Tokens from "./Pages/Token";
import OwnedNFTs from "./Pages/OwnedNFTs";
import { useAuth } from "./contextAPI";
import { provider } from "./constants";

function App() {

  const {setAddress} = useAuth();
 
  useEffect(() => {
    const setMetamaskAccount = async () => {
      if (window.ethereum) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", async () => {
          const addressArray = await window.ethereum.request({
            method: "eth_accounts",
          });
          console.log("metamaskAccount", addressArray[0]);
          setAddress(addressArray[0]);
        });
      }
    };

    const walletConnectTriggers = async () => {
      provider.on("disconnect", (code, reason) => {
        console.log(code, reason);
      });
      provider.on("accountsChanged", (accounts) => {
        console.log(accounts);
      });
      
      provider.on("chainChanged", (chainId) => {
        console.log(chainId);
      });
      
      provider.on("connect", () => {
        console.log("connect");
      });
    }
    
    walletConnectTriggers();
    setMetamaskAccount();
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/character" component={Character} />
          <Route path="/details" component={Details} />
          <Route path="/tokens" component={Tokens} />
          <Route path="/load" component={Load} />
          <Route path="/createitem" component={Createitem} />
          <Route path="/profile" component={Profile} />
          <Route path="/anime" component={Anime} />
          <Route path="/market" component={Market} />
          <Route path="/game" component={Game} />
          <Route path="/preview/:slug" component={Preview} />
          <Route path="/preview_details/:slug" component={Preview_details} />
          <Route path="/owned_nfts" component={OwnedNFTs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
