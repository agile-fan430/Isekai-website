import React from 'react';

const Homefooter = () => {

    return (
    <div>
        <div className="home-footer">
            <div className="container">
                <div className="row ">
                    <div className="col-md-3 p-0 social-link text-center">
                        <img src="/images/logo.png" alt="" />
                        <div className="d-flex mt-4">
                            <a className="icon-footer" target="_blank" href="">
                                <img src="/images/icon-1.png" alt="facebook" />
                            </a>
                            <a className="icon-footer" target="_blank" href="https://www.youtube.com/channel/UCFr9GIiQwxDzvhuwzJOII5w/featured">
                                <img src="/images/icon-2.png" alt="instagram" />
                            </a>
                            <a className="icon-footer" target="_blank" href="https://www.reddit.com/r/EcchiCoin">
                                <img src="/images/icon-3.png" alt="linkedin" />
                            </a>
                            <a className="icon-footer" target="_blank" href="https://t.me/Ecchicoinofficial">
                                <img src="/images/icon-4.png" alt="linkedin" />
                            </a>
                            <a className="icon-footer" target="_blank" href="https://twitter.com/Ecchi_Coin">
                                <img src="/images/icon-5.png" alt="linkedin" />
                            </a>
                            <a className="icon-footer" target="_blank" href="https://www.instagram.com/ecchicoin/?igshid=hfv1mpekmis7">
                                <img src="/images/insta.png" alt="linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-2">
                        <div className="d-flex flex-column ">
                            <a className="text-white" href="#"><b>Navigate</b></a>
                            <a className="text-white" href="/">Home</a>
                            <a className="text-white" href="/marketplace">Marketplace</a>
                            <a className="text-white" href="/character">Lore</a>
                            <a className="text-white" href="/anime">Anime Series</a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="d-flex flex-column ">
                            <a className="text-white" target="_blank" href="#"><b>Community</b></a>
                            <a className="text-white" target="_blank" href="https://wiki.ecchicoin.com/faq">FAQ</a>
                            <a className="text-white" target="_blank" href="https://app.gitbook.com/@ecchicoin/s/ecchicoin-wiki/">EcchiCoin Wiki</a>
                        </div>
                    </div>
                   
                    <div className="col-md-2">
                        <div className="d-flex flex-column ">
                            <a className="text-white" href="#"><b>Contacts</b></a>
                            <a className="text-white" href="#">Feel free to get in touch with us via email  ecchicoin@gmail.com.</a>
                        </div>
                    </div>

                </div>
                <div className="home-footer-content text-center">
                    <p>Ecchicoin is not an investment. Ecchicoin makes no promises and is not responsible for any losses. Invest at your own risk</p>
                </div>
                <div className="copy-right-item d-flex align-item-center">
                    <p className="copyright  text-center">Copyright © 2010-2021 ECCHI COIN. All rights reserved.</p>
                    {/* <p className="privacy-policy-home">Privacy Policy</p> */}
                </div>
            </div>
        </div>
    </div>


    )
}
export default Homefooter