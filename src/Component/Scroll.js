import React, { useEffect, useState } from 'react';

const Scroll = () => {
    useEffect(() => {
        document.addEventListener("scroll", Visible)
        return () => {
            document.removeEventListener("scroll", Visible);
        }
    })
   
    const [isVisible, setIsVisible] = useState(false);

    function Visible() {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            is_visible: false
        });
    }
    return (
        <div>
            {isVisible &&
                <div onClick={() => scrollToTop()}>
                    <img src="https://ecchicoinmediafiles.s3.us-east-2.amazonaws.com/up.png" alt="scroll" className="scroll-up"></img>
                </div>
            }
        </div>
    )
}
export default Scroll