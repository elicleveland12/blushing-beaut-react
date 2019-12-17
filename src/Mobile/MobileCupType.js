import React, {Component} from 'react';
import '../App.css';

import MobileTumblerCustomizer from './MobileTumblerCustomizer'

export default class MobileCupType extends Component {

  state = {
    topColorCoffee: "white",
    bottomColorCoffee: "white",
    topColorWine: "white",
    bottomColorWine: "white",
    coffeeTextLine1: "",
    coffeeTextLine2: "",
    coffeeTextLine3: "",
    coffeeTextLine4: "",
    coffeeTextColor: "black",
    coffeeAdditionalInfo: "",
    wineTextLine1: "",
    wineTextLine2: "",
    wineTextLine3: "",
    wineTextLine4: "",
    wineTextColor: "black",
    wineAdditionalInfo: "",
    textInputNum: 1
  }

  setAddInfo = (type, targ) => {
    if (type === "coffee") {
      this.setState({coffeeAdditionalInfo: targ})
    } else {
      this.setState({wineAdditionalInfo: targ})
    }
  }

  selectColor = (side, color, type) => {
    if (side === "top") {
      if (type === "coffee") {
        this.setState({topColorCoffee: color})
      } else {
        this.setState({topColorWine: color})
      }
    } else {
      if (type === "coffee") {
        this.setState({bottomColorCoffee: color})
      } else {
        this.setState({bottomColorWine: color})
      }
    }
  }

  setTextInputNum = (num) => {
    this.setState({textInputNum: num})
  }

  setTextLineValue = (lineNum, targ, type) => {
    if (type === "coffee"){
      if (lineNum === 1) {
        this.setState({coffeeTextLine1: targ})
      } else if (lineNum === 2) {
        this.setState({coffeeTextLine2: targ})
      } else if (lineNum === 3) {
        this.setState({coffeeTextLine3: targ})
      } else if (lineNum === 4) {
        this.setState({coffeeTextLine4: targ})
      }
    } else {
      if (lineNum === 1) {
        this.setState({wineTextLine1: targ})
      } else if (lineNum === 2) {
        this.setState({wineTextLine2: targ})
      } else if (lineNum === 3) {
        this.setState({wineTextLine3: targ})
      } else if (lineNum === 4) {
        this.setState({wineTextLine4: targ})
      }
    }
  }

  setTextColor = (targ, type) => {
    type === "coffee" ? this.setState({coffeeTextColor: targ}) : this.setState({wineTextColor: targ})
  }

  closeCustomizer = (type) => {
    if (type === "coffee") {
      this.setState({
        topColorCoffee: "white",
        bottomColorCoffee: "white",
        coffeeTextLine1: "",
        coffeeTextLine2: "",
        coffeeTextLine3: "",
        coffeeTextLine4: "",
        coffeeTextColor: "black",
        textInputNum: 1
      })
      this.props.customizeCup("neither")
    } else {
      this.setState({
        topColorWine: "white",
        bottomColorWine: "white",
        wineTextLine1: "",
        wineTextLine2: "",
        wineTextLine3: "",
        wineTextLine4: "",
        wineTextColor: "black",
        textInputNum: 1
      })
      this.props.customizeCup("neither")
    }
  }

  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center'}}>
        <div className="mobile-cup-check" onClick={()=>this.props.customizeCup("coffee")}>
          <div style={{width: '50%'}}>
            <div style={{position: 'absolute', height: 200, width: 90, marginLeft: 10}}>
              {this.state.coffeeTextLine1.length > 0 ? <h5 style={{marginTop: 40, color: this.state.coffeeTextColor === "" ? 'black' : this.state.coffeeTextColor, textAlign: 'center'}}>{this.state.coffeeTextLine1}</h5> : null}
              {this.state.coffeeTextLine2.length > 0 ? <h5 style={{marginTop: 20, color: this.state.coffeeTextColor === "" ? 'black' : this.state.coffeeTextColor, textAlign: 'center'}}>{this.state.coffeeTextLine2}</h5> : null}
              {this.state.coffeeTextLine3.length > 0 ? <h5 style={{marginTop: 20, color: this.state.coffeeTextColor === "" ? 'black' : this.state.coffeeTextColor, textAlign: 'center'}}>{this.state.coffeeTextLine3}</h5> : null}
              {this.state.coffeeTextLine4.length > 0 ? <h5 style={{marginTop: 20, color: this.state.coffeeTextColor === "" ? 'black' : this.state.coffeeTextColor, textAlign: 'center'}}>{this.state.coffeeTextLine4}</h5> : null}
            </div>
            <div style={{height: 200, width: 101, marginTop: 5, marginLeft: 5, background: `linear-gradient(to bottom, ${this.state.topColorCoffee} 0%, ${this.state.bottomColorCoffee} 100%)`}}>
              <img src={require('../images/blank-inner-coffee.gif')} alt="coffee tumbler" style={{height: 200.5, width: 101.5}}/>
            </div>
          </div>
          <div style={{width: '50%', marginLeft: -5, alignItems: 'center'}}>
            <h3>Shop Customizable Coffee Tumblers</h3>
            <h4>20 oz</h4>
            <h4>Stainless Steel</h4>
            <h4>Custom Glitter and Decal</h4>
          </div>
        </div>
        {this.props.type === "coffee" ?
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <MobileTumblerCustomizer
              type={this.props.type}
              customizeCup={this.props.customizeCup}
              topColorCoffee={this.state.topColorCoffee}
              bottomColorCoffee={this.state.bottomColorCoffee}
              selectColor={this.selectColor}
              setTextInputNum={this.setTextInputNum}
              setTextLineValue={this.setTextLineValue}
              setTextColor={this.setTextColor}
              coffeeTextColor={this.state.coffeeTextColor}
              textInputNum={this.state.textInputNum}
              coffeeTextLine1={this.state.coffeeTextLine1}
              coffeeTextLine2={this.state.coffeeTextLine2}
              coffeeTextLine3={this.state.coffeeTextLine3}
              coffeeTextLine4={this.state.coffeeTextLine4}
              closeCustomizer={this.closeCustomizer}
              toggleCounter={this.props.toggleCounter}
              setAddInfo={this.setAddInfo}
              coffeeAdditionalInfo={this.state.AdditionalInfo}
            />
          </div>
        :
          null
        }
        <div className="mobile-cup-check" onClick={()=>this.props.customizeCup("wine")}>
          <div style={{width: '50%'}}>
            <div style={{position: 'absolute', height: 142, width: 110, marginLeft: 8, marginTop: 38}}>
              {this.state.wineTextLine1.length > 0 ? <h5 style={{marginTop: 20, color: this.state.wineTextColor === "" ? 'black' : this.state.wineTextColor, textAlign: 'center'}}>{this.state.wineTextLine1}</h5> : null}
              {this.state.wineTextLine2.length > 0 ? <h5 style={{marginTop: 20, color: this.state.wineTextColor === "" ? 'black' : this.state.wineTextColor, textAlign: 'center'}}>{this.state.wineTextLine2}</h5> : null}
              {this.state.wineTextLine3.length > 0 ? <h5 style={{marginTop: 20, color: this.state.wineTextColor === "" ? 'black' : this.state.wineTextColor, textAlign: 'center'}}>{this.state.wineTextLine3}</h5> : null}
              {this.state.wineTextLine4.length > 0 ? <h5 style={{marginTop: 20, color: this.state.wineTextColor === "" ? 'black' : this.state.wineTextColor, textAlign: 'center'}}>{this.state.wineTextLine4}</h5> : null}
            </div>
            <div style={{height: 150, width: 122, marginTop: 35, marginLeft: 5, background: `linear-gradient(to bottom, ${this.state.topColorWine} 0%, ${this.state.bottomColorWine} 100%)`}}>
              <img src={require('../images/blank-inner-wine.gif')} alt="wine tumbler" style={{height: 150.5, width: 122.5}}/>
            </div>
          </div>
          <div style={{width: '50%', marginLeft: -5, alignItems: 'center'}}>
            <h3>Shop Customizable Wine Tumblers</h3>
            <h4>10 oz</h4>
            <h4>Stainless Steel</h4>
            <h4>Custom Glitter and Decal</h4>
          </div>
        </div>
        {this.props.type === "wine" ?
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <MobileTumblerCustomizer
              type={this.props.type}
              customizeCup={this.props.customizeCup}
              selectColor={this.selectColor}
              topColorWine={this.state.topColorWine}
              bottomColorWine={this.state.bottomColorWine}
              setTextInputNum={this.setTextInputNum}
              setTextLineValue={this.setTextLineValue}
              setTextColor={this.setTextColor}
              wineTextColor={this.state.wineTextColor}
              textInputNum={this.state.textInputNum}
              wineTextLine1={this.state.wineTextLine1}
              wineTextLine2={this.state.wineTextLine2}
              wineTextLine3={this.state.wineTextLine3}
              wineTextLine4={this.state.wineTextLine4}
              closeCustomizer={this.closeCustomizer}
              toggleCounter={this.props.toggleCounter}
              setAddInfo={this.setAddInfo}
              wineAdditionalInfo={this.state.AdditionalInfo}
            />
          </div>
        :
          null
        }
      </div>
    )
  }
}
