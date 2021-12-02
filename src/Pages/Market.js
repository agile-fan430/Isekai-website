import React from 'react';
import Header from '../Component/Header';

const Market = () =>  {

    return (
        <div className="anime">
        <Header />
        <section className="market-commingsoon-page">
            <div className="comming-soon-text text-center">
                <div className="swing">
                     <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/comming.png" className="img-fluid" alt="img"></img>
                </div>
            </div>
            <div className="card-market">
                <div className="card-first zoom-in-out-box">
                    <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/card-1.png"  className="img-fluid" alt="img"></img>
                </div>
                <div className="card-second zoom-in-out-box">
                    <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/card-2.png" className="img-fluid" alt="img"></img>
                </div>
                <div className="card-third zoom-in-out-box">
                    <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/card-3.png"  className="img-fluid" alt="img"></img>
                </div>
                <div className="card-four zoom-in-out-box">
                    <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/card-4.png"  className="img-fluid" alt="img"></img>
                </div>
            </div>
        </section>
        
        
        
        
        </div>
    )
}
export default Market