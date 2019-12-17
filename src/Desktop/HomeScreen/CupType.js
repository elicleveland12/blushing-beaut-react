import React, {Component} from 'react';

import '../../App.css';

export default class CupType extends Component {

  render(){
    return(
      <div className="cup-type">
        <div className="hover-class" style={{border: '3px solid #6c5ce7', height: 200, width: 450, borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} onClick={()=>this.props.customizeCup("coffee")}>
          <div>
            <img src={require('../../images/whiteCoffee.png')} alt="wine outline" height="200" style={{marginTop: 4, marginLeft: -70}}/>
          </div>
          <div>
            <h3>Shop Customizable Coffee Tumblers</h3>
            <h4>20 oz</h4>
            <h4>Stainless Steel</h4>
            <h4>Custom Glitter and Decal</h4>
          </div>
        </div>
        <div className="hover-class" style={{border: '3px solid #6c5ce7', height: 200, width: 450, borderRadius: 10,  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} onClick={()=>this.props.customizeCup("wine")}>
          <div>
            <img src={require('../../images/whiteWine.png')} alt="wine outline" height="200" style={{marginTop: 37, marginLeft: -70}}/>
          </div>
          <div>
            <h3>Shop Customizable Wine Tumblers</h3>
            <h4>10 oz</h4>
            <h4>Stainless Steel</h4>
            <h4>Custom Glitter and Decal</h4>
          </div>
        </div>
      </div>
    )
  }
}
