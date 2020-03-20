import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
}

function SlideShow(props) {
  console.log(props.mobile);
  return (
    <div style={{height: 400, width: props.mobile ? null : 500, marginTop: 10}}>
      <Fade {...fadeProperties} arrows={false} indicators={false}>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%',  overflow: 'hidden'}}>
            <img src={require('../images/curve-glitter.png')}  height="400px" alt="cup one"/>
          </div>
        </div>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%',  overflow: 'hidden'}}>
            <img src={require('../images/glitter-wine.png')}  height="400px" alt="cup one"/>
          </div>
        </div>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%',  overflow: 'hidden'}}>
            <img src={require('../images/glitter-xmas.png')}  height="400px" alt="cup one"/>
          </div>
        </div>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden'}}>
            <img src={require('../images/sippy-nova.png')}  height="400px" alt="cup two"/>
          </div>
        </div>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden'}}>
            <img src={require('../images/skinny-grandma.png')}  height="400px" alt="cup three"/>
          </div>
        </div>
        <div className="each-fade">
          <div style={{display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden'}}>
            <img src={require('../images/swirl-wine.png')}  height="400px" alt="cup two"/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default SlideShow;
