import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class CupTypeRowThree extends Component {

  render(){
    return(
      <div className="cup-type">
        <Link to={'/can'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: 300, borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textDecoration: 'none'}} onClick={()=>this.props.customizeCup("coffee")}>
          <div>
            <img src={require('../../images/empty can.png')} alt="wine outline" height="190" style={{marginTop: 10, marginLeft: 5}}/>
          </div>
          <div style={{marginTop: 50}}>
            <h2 style={{color: '#6c5ce7'}}>Shop Customizable Soda Can Tumblers</h2>
          </div>
        </Link>
      </div>
    )
  }
}
