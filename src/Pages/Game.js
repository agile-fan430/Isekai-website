import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Game = () =>  {

    return (
        <div className="anime">
        <Header />
        <section className="game-commingsoon-page">
            <div className="game-frame">
                <div className="coming-soon-new">
                    <div className="swing">
                        <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/coming-new.png" className="img-fluid" alt="img"></img>
                    </div>
                </div>
            </div>

        </section>
        <Footer />
        
        
        
        </div>
    )
}
export default Game