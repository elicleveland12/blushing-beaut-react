import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default class CupTypeRowTwo extends Component {

  render(){
    return(
      <div className="cup-type">
        <Link to={'/curve'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: 300, borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textDecoration: 'none'}} onClick={()=>this.props.customizeCup("coffee")}>
          <div>
            <img src={require('../../images/curve-glitter.png')} alt="wine outline" height="200" style={{marginTop: 2}}/>
          </div>
          <div style={{marginTop: 50}}>
            <h2 style={{color: '#6c5ce7'}}>Shop Customizable Curved Tumblers</h2>
          </div>
        </Link>
        <Link to={'/skinny'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: 300, borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textDecoration: 'none'}} onClick={()=>this.props.customizeCup("wine")}>
          <div>
            <img src={require('../../images/skinny-grandma.png')} alt="wine outline" height="200" style={{marginTop: 2}}/>
          </div>
          <div style={{marginTop: 50}}>
            <h2 style={{color: '#6c5ce7'}}>Shop Customizable Skinny Tumblers</h2>
          </div>
        </Link>
        <Link to={'/kids-cup'} className="hover-class picker" style={{border: '3px solid #6c5ce7', height: 200, width: 300, borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-between', textDecoration: 'none'}} onClick={()=>this.props.customizeCup("wine")}>
          <div>
            <img src={require('../../images/straw.png')} alt="wine outline" height="160" style={{marginTop: 37, marginLeft:5}}/>
          </div>
          <div style={{marginTop: 50}}>
            <h2 style={{color: '#6c5ce7'}}>Shop Customizable Kids Cups</h2>
          </div>
        </Link>
      </div>
    )
  }
}
