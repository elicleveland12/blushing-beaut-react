import React, {Component} from 'react';
import '../../App.css';
import { Player, ControlBar } from 'video-react';

export default class Video extends Component {

  render(){
    return(
      <div className="video-container">
        <Player
          autoPlay={true}
          height={200}
          width="600px"
          muted={true}
          src="https://scontent-lga3-1.cdninstagram.com/v/t50.2886-16/83645780_117409439791651_289593478334117213_n.mp4?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=otbBVH139CEAX_oIzcU&oe=5E3EFA6A&oh=72e10f6aef2ca000365417449ea8fbd3"
        >
          <ControlBar disableCompletely />
        </Player>
      </div>
    )
  }
}
