import React, {Component} from 'react';
import '../../App.css';
import TextLoop from "react-text-loop";

export default class IntroBlurb extends Component {

  render(){
    return(
      <div style={{width: 600, height: 400, marginTop: 10, display: 'flex', flexDirection: 'column', marginLeft: 100, backgroundColor: 'rgba(162, 155, 254,0.3)', border: '2px solid #6c5ce7', borderRadius: 10}}>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <h1 className="gradient-text">Welcome to the Blushing Beaut!</h1>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <h3>I bring stainless steel coffee and wine tumblers to life with high-quality shimmer paint, vinyl decals, and epoxies</h3>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <h3>These fun and festive cups make great: </h3>
          <h2 style={{marginTop:-15, color: '#6c5ce7', textAlign: 'center'}}>
            <TextLoop>
                <span>Gifts</span>
                <span>Wedding party gifts</span>
                <span>Raffle prizes</span>
                <span>Party favors</span>
            </TextLoop>{" "}
          </h2>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <h4>Email me for orders larger than ten cups</h4>
        </div>
      </div>
    )
  }
}
