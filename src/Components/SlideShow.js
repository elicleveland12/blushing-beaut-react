import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
}

function SlideShow(props) {
  return (
    <div style={{height: 400, width: props.mobile ? '100%' : 500, marginTop: props.mobile ? -50 : 10}}>
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%',  overflow: 'hidden'}}>
            <img src={require('../images/cupTwo.jpg')}  height="400px" alt="cup one"/>
          </div>
        </div>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden'}}>
            <img src={require('../images/cupThree.jpg')}  height="400px" alt="cup two"/>
          </div>
        </div>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden'}}>
            <img src={require('../images/cupFour.jpg')}  height="400px" alt="cup three"/>
          </div>
        </div>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden'}}>
            <img src={require('../images/cupFive.jpg')}  height="400px" alt="cup two"/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default SlideShow;
