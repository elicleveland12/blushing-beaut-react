import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

export default class CupType extends Component {

  render(){
    return(
      <div className="cup-type">
        <Link to={'/tumbler'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: 300, borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none'}}>
          <div>
            <img src={require('../../images/glitter-tumbler.png')} alt="wine outline" height="200" style={{marginTop: 2}}/>
          </div>
          <div style={{marginTop: 50}}>
            <h2 style={{color: '#6c5ce7'}}>Shop Customizable Coffee Tumblers</h2>
          </div>
        </Link>
        <Link to={'/wine'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: 300, borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none'}}>
          <div>
            <img src={require('../../images/swirl-wine.png')} alt="wine outline" height="160" style={{marginTop: 37}}/>
          </div>
          <div style={{marginTop: 50}}>
            <h2 style={{color: '#6c5ce7'}}>Shop Customizable Wine Tumblers</h2>
          </div>
        </Link>
        <Link to={'/sippy-cup'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: 300, borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-around', textDecoration: 'none'}}>
          <div>
            <img src={require('../../images/sippy-nova.png')} alt="wine outline" height="160" style={{marginTop: 37}}/>
          </div>
          <div style={{marginTop: 50}}>
            <h2 style={{color: '#6c5ce7'}}>Shop Customizable Sippy Cups</h2>
          </div>
        </Link>
      </div>
    )
  }
}
