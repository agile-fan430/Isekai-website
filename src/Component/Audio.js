import {React,useEffect} from "react";
import ReactAudioPlayer from 'react-audio-player';

const Audio =() => {
    useEffect(() => {
        // document.addEventListener("scroll",function(e){
        //     Visible()
        // })
        const fabElement = document.getElementById(
          "floating-snap-btn-wrapper"
        );
        fabElement?.addEventListener("mousedown", mouseDown);
    
        fabElement?.addEventListener("mouseup", mouseUp);
    
        fabElement?.addEventListener("touchstart", mouseDown);
    
        fabElement?.addEventListener("touchend", mouseUp);
    
        fabElement?.addEventListener("click", (e) => {
          if (
            oldPositionY === fabElement.style.top &&
            oldPositionX === fabElement.style.left
          ) {
            fabElement?.classList.toggle("fab-active");
          }
        });
      });
  
      // const [show, setShow] = useState(false);
    
      // const handleClose = () => setShow(false);
      // const handleShow = () => setShow(true);
  
      
          let oldPositionX,
          oldPositionY;
  
          const move = (e) => {
              const fabElement = document.getElementById("floating-snap-btn-wrapper");
          if (!fabElement.classList.contains("fab-active")) {
              if (e.type === "touchmove") {
              fabElement.style.top = e.touches[0].clientY + "px";
              fabElement.style.left = e.touches[0].clientX + "px";
              } else {
              fabElement.style.top = e.clientY + "px";
              fabElement.style.left = e.clientX + "px";
              }
          }
          };
  
          const mouseDown = (e) => {
              // alert();
              const fabElement = document.getElementById("floating-snap-btn-wrapper");
          oldPositionY = fabElement.style.top;
          oldPositionX = fabElement.style.left;
          // if (e.type === "mousedown") {
          //     window.addEventListener("mousemove", move);
          // } else {
          //     window.addEventListener("touchmove", move);
          // }
  
          fabElement.style.transition = "none";
          };
  
          const mouseUp = (e) => {
              const fabElement = document.getElementById("floating-snap-btn-wrapper");
          if (e.type === "mouseup") {
              window.removeEventListener("mousemove", move);
          } else {
              window.removeEventListener("touchmove", move);
          }
          snapToSide(e);
          fabElement.style.transition = "0.3s ease-in-out left";
          };
  
          const snapToSide = (e) => {
              const fabElement = document.getElementById("floating-snap-btn-wrapper");
                          const wrapperElement = document.getElementById('main-wrapper');
          const windowWidth = window.innerWidth;
          let currPositionX, currPositionY;
          if (e.type === "touchend") {
              currPositionX = e.changedTouches[0].clientX;
              currPositionY = e.changedTouches[0].clientY;
          } else {
              currPositionX = e.clientX;
              currPositionY = e.clientY;
          }
          if(currPositionY < 50) {
          fabElement.style.top = 50 + "px"; 
          }
          if(currPositionY > wrapperElement.clientHeight - 50) {
              fabElement.style.top = (wrapperElement.clientHeight - 50) + "px"; 
          }
          if (currPositionX < windowWidth / 2) {
              fabElement.style.left = 30 + "px";
              fabElement.classList.remove('right');
              fabElement.classList.add('left');
          } else {
              fabElement.style.left = windowWidth - 30 + "px";
              fabElement.classList.remove('left');
              fabElement.classList.add('right');
          }
          };

    return (
        <>
                <div className="audio-section">
                    <ReactAudioPlayer
                    id="audio"
                        src="./images/golden.m4a"
                        // autoPlay
                        // controls
                        loop
                    />
                </div>
                <div id="main-wrapper">
                    <div id="floating-snap-btn-wrapper">
                        <div className="fab-btn">
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </div>       
                        <ul className="play-pause-btn">
                            <li>
                                <i className="fa fa-play" aria-hidden="true"><button onClick={() => {document.getElementById('audio')?.play();}}>play</button></i>
                            </li>
                            <li>
                            <i className="fa fa-pause" aria-hidden="true"><button onClick={() => {document.getElementById('audio')?.pause();}}>pause</button></i>
                            </li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default Audio