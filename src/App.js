import React, {Component} from 'react';
import './App.css';

import DesktopApp from './DesktopApp';
import MobileApp from './MobileApp';

export default class App extends Component {

  state = {
      deviceType: false
    }

    detectmob = () => {
     if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ){
        this.setState({deviceType: true})
      }
    }

    componentDidMount() {
      this.detectmob()
    }

  render(){
    return(
      <div className="app-container">
        {this.state.deviceType ?
          <MobileApp mobile={true}/>
        :
          <DesktopApp mobile={false}/>
        }
      </div>
    )
  }
}
