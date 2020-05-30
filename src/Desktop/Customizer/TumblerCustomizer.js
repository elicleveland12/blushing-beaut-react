import React, {Component} from 'react';
import ReactPhoneInput from "react-phone-input-2";
import '../../App.css';

import CupType from '../HomeScreen/CupType';
import CupTypeRowTwo from '../HomeScreen/CupTypeRowTwo';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import ColorSelector from '../../Components/ColorSelector';

const uuid = require("uuid/v4");

export default class TumblerCustomizer extends Component {

  state = {
    hoverTop: false,
    hoverBottom: false,
    topColor: "white",
    bottomColor: "white",
    textLine1: "",
    textLine2: "",
    textLine3: "",
    textLine4: "",
    textColor: "",
    additionalInfo: "",
    textInputNum: 1,
    currentCart: [],
    quantity: 1,
    size: 'small',
    fontStyle: "",
    paintType: 'paint',
    swirlOne: false,
    swirlColorOne: "white",
    swirlTwo: false,
    swirlColorTwo: "white",
    swirlThree: false,
    swirlColorThree: "white",
    addDecal: false,
    phoneNum: "",
    addedToCart: false
  }

  handleOnChange = value => {
    this.setState({ phoneNum: value })
  };

  renderColors = (side, color) => {
    if (this.state.paintType === 'alcohol_swirl') {
      if (side === "first") {
        this.setState({swirlColorOne: color})
      } else if (side === "second") {
        this.setState({swirlColorTwo: color})
      } else if (side === "third") {
        this.setState({swirlColorThree: color})
      }
    }
    if (side === "top") {
      this.setState({topColor: color})
    } else {
      this.setState({bottomColor: color})
    }
  }


  addItemToCart = async() => {
    const product = await
      {
        id: uuid(),
        topColor: this.state.topColor,
        bottomColor: this.state.bottomColor,
        textLine1: this.state.textLine1,
        textLine2: this.state.textLine2,
        textLine3: this.state.textLine3,
        textLine4: this.state.textLine4,
        additionalInfo: this.state.additionalInfo,
        textColor: this.state.textColor,
        fontStyle: this.state.fontStyle,
        cupType: this.props.coffee ? "coffee tumbler" : this.props.wine ? "wine tumbler" : this.props.sippy ? "sippy cup" : this.props.curve ? "curved tumbler" : this.props.skinny ? "skinny tumbler" : this.props.kids ? "kids tumbler" : "soda tumbler",
        amount: this.props.coffee ? (3000 * this.state.quantity) : this.props.wine ? (2000 * this.state.quantity) : this.props.sippy ? (2000 * this.state.quantity) : this.props.curve ? this.state.size === "small" ? (3000 * this.state.quantity) : (4000 * this.state.quantity) : this.props.skinny ? this.state.size === "small" ? (3000 * this.state.quantity) : (4000 * this.state.quantity) : this.props.kids ? (2000 * this.state.quantity) : (2500 * this.state.quantity),
        quantity: this.state.quantity,
        paintType: this.state.paintType,
        swirlColors: this.state.paintType === "alcohol_swirl" ? `1:${this.state.swirlColorOne}- 2:${this.state.swirlColorTwo}- 3:${this.state.swirlColorThree}` : null,
        decal: this.state.addDecal,
        phoneNum: this.state.phoneNum,
        size: this.state.size
      }
    localStorage.setItem('cart', JSON.stringify([...this.state.currentCart, product]))
    this.setState({
      topColor: "white",
      bottomColor: "white",
      textLine1: "",
      textLine2: "",
      textLine3: "",
      textLine4: "",
      textColor: "",
      textInputNum: 1,
      quantity: 1,
      size: 'small',
      fontStyle: "",
      paintType: 'paint',
      swirlColorOne: "white",
      swirlColorTwo: "white",
      swirlColorThree: "white",
      additionalInfo: "",
      addDecal: false,
      phoneNum: "",
      addedToCart: true
    })
    setTimeout(()=>this.setState({addedToCart: false}), 7500);
  }


  componentDidMount = async() => {
    const currentCart = await JSON.parse(localStorage.getItem('cart'))
    if (currentCart) {
      this.setState({ currentCart })
    }
  }


  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '2%'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 5}}>
          <div style={{display: 'flex', flexDirection: 'column', position: 'fixed', top:70, left: 0, width: '8%', height: window.screen.height, backgroundColor: '#f7f1e3', textAlign: 'right', zIndex: 998}}>
            <div style={{ marginTop: 80}}>
              <h2 style={{color: '#84817a', textAlign: 'center'}}>Paint</h2>
            </div>
            {this.state.paintType === "paint" || this.state.paintType === "glitter" ?
              this.state.topColor !== 'white' || this.state.bottomColor !== 'white' ?
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                  <CheckCircleIcon style={{fontSize: 30, color: 'green', textAlign: 'center', marginTop: 5}}/>
                </div>
              :
                null
                :
                this.state.paintType === "alcohol_swirl" || this.state.paintType === "woodGrain" ?
                  <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <CheckCircleIcon style={{fontSize: 30, color: 'green', textAlign: 'center', marginTop: 5}}/>
                  </div>
            :
              null
            }
            <div style={{marginTop: 80}}><h2 style={{color: '#84817a', textAlign: 'center'}}>Styling</h2></div>
            {this.state.textLine1.length > 0 || this.state.addDecal || this.state.additionalInfo.length > 0 ?
              <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <CheckCircleIcon style={{fontSize: 30, color: 'green', textAlign: 'center', marginTop: 5}}/>
              </div>
            :
              null
            }
            <div className="hover-class" style={{marginTop: 80}}><h2 style={{color: '#84817a', textAlign: 'center'}}>Details</h2></div>
            {this.state.phoneNum.length > 9 ?
              <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <CheckCircleIcon style={{fontSize: 30, color: 'green', textAlign: 'center', marginTop: 5}}/>
              </div>
            :
              null
            }
          </div>
          <div style={{height: window.screen.height*0.68, width: window.screen.width*0.3, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{position: 'absolute', width: 400, height: 300, marginTop: -145, zIndex: 998}} onMouseEnter={()=>this.setState({hoverTop: true})} onMouseLeave={()=>this.setState({hoverTop: false})}>
            </div>
            <div style={{position: 'absolute', width: 400, height: 300, marginTop: 155, zIndex: 997}} onMouseEnter={()=>this.setState({hoverBottom: true})} onMouseLeave={()=>this.setState({hoverBottom: false})}>
            </div>
            <div style={{
              position: 'absolute',
              width: this.props.skinny ? 198 : this.props.coffee || this.props.can ? 223 : this.props.wine ? 248 : this.props.sippy ? 398 : this.props.curve ? 323 : this.props.kids ? 348 : 400,
              height: this.props.tall ? this.props.coffee ? 470 : this.props.skinny ? 485 : this.props.can ? 555 : 510 : this.props.kids ? 375 : this.props.wine ? 290 : 280,
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
              marginTop: this.props.tall ? this.props.skinny ? 10 : 0 : this.props.kids? 60 : this.props.wine ? 40 : 45,
              zIndex: 980,
              backgroundImage: this.state.paintType === "woodGrain" ? "url(" + "https://media.freestocktextures.com/cache/7e/df/7edfd8262b0df8403e5abacac62d680d.jpg" + ")" : this.state.paintType === "alcohol_swirl" ? "url(" + "https://images.pond5.com/slow-motion-swirling-paint-background-footage-090925712_prevstill.jpeg" + ")" : this.state.paintType === "glitter" ? "url(" + "https://i.ya-webdesign.com/images/gold-glitter-background-png-1.png" + ")" : null,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
              }}>
              {this.state.textLine1.length > 0 ? <h1 style={{color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine1}</h1> : null}
              {this.state.textLine2.length > 0 ? <h1 style={{color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine2}</h1> : null}
              {this.state.textLine3.length > 0 ? <h1 style={{color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine3}</h1> : null}
              {this.state.textLine4.length > 0 ? <h1 style={{color: this.state.textColor === "" ? 'black' : this.state.textColor, textAlign: 'center'}}>{this.state.textLine4}</h1> : null}
            </div>
            {this.props.coffee ?
              <div>
                <div style={{width: 225, height: 475, zIndex: 990, position: 'absolute'}}>
                  <img src={require('../../images/blank-inner-coffee.gif')} style={{width: 225, height: 475}} alt="coffee tumbler"/>
                </div>
                <div style={{width: 225, height: 475, background: this.state.paintType === "paint" || this.state.paintType === "glitter" ? `linear-gradient(to bottom, ${this.state.topColor} 0%, ${this.state.bottomColor} 100%)` : null, zIndex: 990}}>
                  <img src={require('../../images/blank-inner-coffee.gif')} style={{width: 225, height: 475}} alt="coffee tumbler"/>
                </div>
              </div>
            :
            this.props.wine ?
              <div>
                <div style={{width: 250, height: 300, marginTop: 75, zIndex: 990, position: 'absolute'}}>
                  <img src={require('../../images/blank-inner-wine.gif')} style={{width: 250, height: 300}} alt="wine tumbler"/>
                </div>
                <div style={{width: 250, height: 300, marginTop: 75, background: this.state.paintType === "paint" || this.state.paintType === "glitter" ? `linear-gradient(to bottom, ${this.state.topColor} 0%, ${this.state.bottomColor} 100%)` : null, zIndex: 990}}>
                  <img src={require('../../images/blank-inner-wine.gif')} style={{width: 250, height: 300}} alt="wine tumbler"/>
                </div>
              </div>
            :
            this.props.sippy ?
              <div>
                <div style={{width: 400, height: 400, position: 'absolute', zIndex: 990}}>
                  <img src={require('../../images/sippycup.001.png')} style={{width: 400, height: 400}} alt="sippy tumbler"/>
                </div>
                <div style={{width: 400, height: 400, background: this.state.paintType === "paint" || this.state.paintType === "glitter" ? `linear-gradient(to bottom, ${this.state.topColor} 0%, ${this.state.bottomColor} 100%)` : null, zIndex: 990}}>
                  <img src={require('../../images/sippycup.001.png')} style={{width: 400, height: 400}} alt="sippy tumbler"/>
                </div>
              </div>
            :
            this.props.curve ?
            <div>
              <div style={{width: 325, height: 550, position: 'absolute', zIndex: 990}}>
                <img src={require('../../images/30oz.png')} style={{width: 325, height: 550}} alt="curve tumbler"/>
              </div>
              <div style={{width: 325, height: 550, background: this.state.paintType === "paint" || this.state.paintType === "glitter" ? `linear-gradient(to bottom, ${this.state.topColor} 0%, ${this.state.bottomColor} 100%)` : null, zIndex: 990}}>
                <img src={require('../../images/30oz.png')} style={{width: 325, height: 550}} alt="curve tumbler"/>
              </div>
            </div>
            :
            this.props.skinny ?
            <div>
              <div style={{ width: 200, height: 500, marginTop: 25, position: 'absolute', zIndex: 990}}>
                <img src={require('../../images/skinny.png')} style={{ width: 200, height: 500}} alt="skinny tumbler"/>
              </div>
              <div style={{ width: 200, height: 500, marginTop: 25, background: this.state.paintType === "paint" || this.state.paintType === "glitter" ? `linear-gradient(to bottom, ${this.state.topColor} 0%, ${this.state.bottomColor} 100%)` : null, zIndex: 990}}>
                <img src={require('../../images/skinny.png')} style={{ width: 200, height: 500}} alt="skinny tumbler"/>
              </div>
            </div>
            :
            this.props.kids ?
            <div>
              <div style={{width: 350, height: 500, position: 'absolute', zIndex: 990}}>
                <img src={require('../../images/120z_straw.png')} style={{width: 350, height: 500}} alt="kids tumbler"/>
              </div>
              <div style={{width: 350, height: 500, background: this.state.paintType === "paint" || this.state.paintType === "glitter" ? `linear-gradient(to bottom, ${this.state.topColor} 0%, ${this.state.bottomColor} 100%)` : null, zIndex: 990}}>
                <img src={require('../../images/120z_straw.png')} style={{width: 350, height: 500}} alt="kids tumbler"/>
              </div>
            </div>
            :
            this.props.can ?
            <div>
              <div style={{width: 225, height: 600, position: 'absolute', zIndex: 990}}>
                <img src={require('../../images/can.png')} style={{width: 225, height: 600}} alt="can tumbler"/>
              </div>
              <div style={{width: 225, height: 600, background: this.state.paintType === "paint" || this.state.paintType === "glitter" ? `linear-gradient(to bottom, ${this.state.topColor} 0%, ${this.state.bottomColor} 100%)` : null, zIndex: 990}}>
                <img src={require('../../images/can.png')} style={{width: 225, height: 600}} alt="can tumbler"/>
              </div>
            </div>
            :
            null
            }
          </div>
          <div style={{display: 'flex', flexDirection: 'column', height: window.screen.height*0.68, width: window.screen.width*0.3, alignContent: 'space-between'}}>
              <div style={{display: 'flex', width: '100%', top: 0, height: 60 }}>
                <div className="hover-class" style={{height: '100%', width: '25%', backgroundColor: this.state.paintType === 'paint' ? '#6c5ce7' : '#a29bfe', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.setState({paintType: 'paint', topColor: 'white', bottomColor: 'white'})}>
                  <h4 style={{color: 'white'}}>Paint</h4>
                </div>
                <div className="hover-class" style={{height: '100%', width: '25%', backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMgeq5kUrySRZsErRQTXlTd9Cbr9IT-vB93epe1QQxNxd0H3go" + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.setState({paintType: 'glitter', topColor: 'white', bottomColor: 'white'})}>
                  <h4 style={{color: 'white'}}>Giltter</h4>
                </div>
                <div className="hover-class" style={{height: '100%', width: '25%', backgroundImage: "url(" + "https://images.pond5.com/slow-motion-swirling-paint-background-footage-090925712_prevstill.jpeg" + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.setState({paintType: 'alcohol_swirl', topColor: '', bottomColor: ''})}>
                  <h4 style={{color: 'white'}}>Alcohol Swirl</h4>
                </div>
                <div className="hover-class" style={{height: '100%', width: '25%', backgroundImage: "url(" + "https://media.freestocktextures.com/cache/7e/df/7edfd8262b0df8403e5abacac62d680d.jpg" + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.setState({paintType: 'woodGrain', topColor: '', bottomColor: ''})}>
                  <h4 style={{color: 'white'}}>Wood Grain</h4>
                </div>
              </div>
            {this.state.paintType === 'alcohol_swirl' ?
              <div style={{display: 'flex', width: '100%', top: 60, height: 60 }}>
                <div className="hover-class" style={{height: '100%', width: '33.33%', backgroundColor: `${this.state.swirlColorOne}`, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black'}} onClick={()=>this.setState({hoverBottom: !this.state.hoverBottom, swirlOne: true, swirlTwo: false, swirlThree: false})}>
                  <h4 style={{color: this.state.swirlColorOne === 'white' ? 'black' : 'white'}}>Swirl Color 1</h4>
                </div>
                <div className="hover-class" style={{height: '100%', width: '33.33%', backgroundColor: `${this.state.swirlColorTwo}`, display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black'}} onClick={()=>this.setState({hoverBottom: !this.state.hoverBottom, swirlTwo: true, swirlOne: false, swirlThree: false})}>
                  <h4 style={{color: this.state.swirlColorTwo === 'white' ? 'black' : 'white'}}>Swirl Color 2</h4>
                </div>
                <div className="hover-class" style={{height: '100%', width: '33.33%', backgroundColor: `${this.state.swirlColorThree}`, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black'}} onClick={()=>this.setState({hoverBottom: !this.state.hoverBottom, swirlThree: true, swirlOne: false, swirlTwo: false})}>
                  <h4 style={{color: this.state.swirlColorThree === 'white' ? 'black' : 'white'}}>Swirl Color 3</h4>
                </div>
              </div>
            :
              null
            }
            {this.state.hoverTop || this.state.hoverBottom ?
              null
            :
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '80%'}}>
                  <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine1.length > 10)} style={{marginTop: 15, width: 300}} value={this.state.textLine1} id="outlined-basic" label="Line 1" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine1: e.target.value})}/>
                  <AddIcon style={{fontSize: 30}} onClick={this.state.textInputNum === 1 ? ()=>this.setState({textInputNum: 2}) : null} />
                </div>
                {this.state.textInputNum > 1 ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '80%'}}>
                    <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine2.length > 10)} style={{marginTop: 15, width: 300}} value={this.state.textLine2} id="outlined-basic" label="Line 2" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine2: e.target.value})}/>
                    <AddIcon style={{fontSize: 30}} onClick={this.state.textInputNum === 2 ? ()=>this.setState({textInputNum: 3}) : null} />
                  </div> : null}
                {this.state.textInputNum > 2 ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '80%'}}>
                    <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine3.length > 10)} style={{marginTop: 15, width: 300}} value={this.state.textLine3} id="outlined-basic" label="Line 3" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine3: e.target.value})}/>
                    <AddIcon style={{fontSize: 30}} onClick={this.state.textInputNum === 3 ? ()=>this.setState({textInputNum: 4}) : null} />
                  </div> : null}
                {this.state.textInputNum === 4 ?
                  <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '80%'}}>
                    <TextField helperText="Max of 10 characters per line" error={!!(this.state.textLine4.length > 10)} style={{marginTop: 15, width: 300}} value={this.state.textLine4} id="outlined-basic" label="Line 4" variant="outlined" maxLength="2" onChange={(e)=>this.setState({textLine4: e.target.value})}/>
                  </div> : null}
                <FormControl variant="outlined" style={{width: '80%', display: 'flex', justifyContent: 'flex-start'}}>
                  <InputLabel  id="outlined-basic" style={{marginTop: 20}}>
                    Font Color
                  </InputLabel>
                  <Select
                    variant="outlined"
                    labelId="outlined-basic"
                    id="outlined-basic"
                    value={this.state.textColor}
                    onChange={(e)=>this.setState({textColor: e.target.value})}
                    style={{marginTop: 20, width: 300}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"black"}>Black</MenuItem>
                    <MenuItem value={"blue"}>Blue</MenuItem>
                    <MenuItem value={"brown"}>Brown</MenuItem>
                    <MenuItem value={"#CD7F32"}>Bronze</MenuItem>
                    <MenuItem value={"#B87333"}>Copper</MenuItem>
                    <MenuItem value={"#D4AF37"}>Gold</MenuItem>
                    <MenuItem value={"grey"}>Grey</MenuItem>
                    <MenuItem value={"green"}>Green</MenuItem>
                    <MenuItem value={"orange"}>Orange</MenuItem>
                    <MenuItem value={"pink"}>Pink</MenuItem>
                    <MenuItem value={"purple"}>Purple</MenuItem>
                    <MenuItem value={"red"}>Red</MenuItem>
                    <MenuItem value={"#B76E79"}>Rose Gold</MenuItem>
                    <MenuItem value={"silver"}>Silver</MenuItem>
                    <MenuItem value={"white"}>White</MenuItem>
                    <MenuItem value={"yellow"}>Yellow</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" style={{width: '80%', display: 'flex', justifyContent: 'flex-start'}}>
                  <InputLabel  id="outlined-basic" style={{marginTop: 20}}>
                    Font
                  </InputLabel>
                  <Select
                    variant="outlined"
                    labelId="outlined-basic"
                    id="outlined-basic"
                    value={this.state.fontStyle}
                    onChange={(e)=>this.setState({fontStyle: e.target.value})}
                    style={{marginTop: 20, width: 300}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"magnolia_sky"}><img src={require('../../images/fonts/font1.png')} style={{height: 30}} alt="Magnolia Sky"/></MenuItem>
                    <MenuItem value={"super_mario"}><img src={require('../../images/fonts/font2.png')} style={{height: 30}} alt="Super Mario"/> </MenuItem>
                    <MenuItem value={"waltograph"}><img src={require('../../images/fonts/font3.png')} style={{height: 30}} alt="Waltograph"/> </MenuItem>
                    <MenuItem value={"beauty_and_the_beast"}><img src={require('../../images/fonts/font4.png')} style={{height: 30}} alt="Beauty and the Beast"/> </MenuItem>
                    <MenuItem value={"welcome"}><img src={require('../../images/fonts/font5.png')} style={{height: 30}} alt="Welcome"/> </MenuItem>
                    <MenuItem value={"christmas_wish"}><img src={require('../../images/fonts/font6.png')} style={{height: 30}} alt="Christmas Wish"/> </MenuItem>
                    <MenuItem value={"minnie"}><img src={require('../../images/fonts/font7.png')} style={{height: 30}} alt="Minnie"/> </MenuItem>
                    <MenuItem value={"marlina"}><img src={require('../../images/fonts/font8.png')} style={{height: 30}} alt="Marlina"/> </MenuItem>
                    <MenuItem value={"janda_monogram"}><img src={require('../../images/fonts/font9.png')} style={{height: 30}} alt="Janda Monogram"/> </MenuItem>
                    <MenuItem value={"believer"}><img src={require('../../images/fonts/font10.png')} style={{height: 30}} alt="Believer"/> </MenuItem>
                    <MenuItem value={"brat"}><img src={require('../../images/fonts/font11.png')} style={{height: 30}} alt="Brat"/> </MenuItem>
                    <MenuItem value={"sweet_gentle"}><img src={require('../../images/fonts/font12.png')} style={{height: 30}} alt="Sweet Gentle"/> </MenuItem>
                    <MenuItem value={"symphony"}><img src={require('../../images/fonts/font13.png')} style={{height: 30}} alt="Symphony"/> </MenuItem>
                    <MenuItem value={"grinched"}><img src={require('../../images/fonts/font14.png')} style={{height: 30}} alt="Grinched"/> </MenuItem>
                    <MenuItem value={"texas_tango"}><img src={require('../../images/fonts/font15.png')} style={{height: 30}} alt="Texas Tango"/> </MenuItem>
                    <MenuItem value={"monogram"}><img src={require('../../images/fonts/font16.png')} style={{height: 30}} alt="Monogram"/> </MenuItem>
                    <MenuItem value={"american_typewriter"}><img src={require('../../images/fonts/font17.png')} style={{height: 30}} alt="American Typewriter"/> </MenuItem>
                    <MenuItem value={"chalkboard"}><img src={require('../../images/fonts/font18.png')} style={{height: 30}} alt="Chalkboard"/> </MenuItem>
                  </Select>
                </FormControl>
              </div>
            }
            {this.state.hoverTop ?
              <div style={{height: 200, marginLeft: -60, zIndex: 998}} onMouseEnter={()=>this.setState({hoverTop: true})} onMouseLeave={()=>this.setState({hoverTop: false})}>
                <ColorSelector renderColors={this.renderColors} side={"top"} />
              </div>
            :
              null
            }
            {this.state.hoverBottom ?
              <div style={{height: 200, marginTop: 225, marginLeft: -60, zIndex: 998}} onMouseEnter={()=>this.setState({hoverBottom: true})} onMouseLeave={()=>this.setState({hoverBottom: false})}>
                <ColorSelector renderColors={this.renderColors} side={this.state.swirlOne ? "first" : this.state.swirlTwo ? "second" : this.state.swirlThree ? "third" : "bottom"}  />
              </div>
            :
              null
            }
          </div>
          <div style={{height: window.screen.height*0.68, width: window.screen.width*0.3, marginLeft: 10}}>
            {this.props.curve || this.props.skinny || this.props.wine ?
              <div style={{display: 'flex', width: '100%', top: 0, height: 60 }}>
                <div className="hover-class" style={{height: '100%', width: '50%', backgroundColor: this.state.size === 'small' ? '#6c5ce7' : '#a29bfe', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.setState({size: 'small'})}>
                  <h2 style={{color: 'white'}}>{this.props.wine ? '10 oz' : '20 oz'}</h2>
                </div>
                <div className="hover-class" style={{height: '100%', width: '50%', backgroundColor: this.state.size === 'small' ? '#a29bfe' : '#6c5ce7', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.setState({size: 'large'})}>
                  <h2 style={{color: 'white'}}>{this.props.wine ? '15 oz' : '30 oz'}</h2>
                </div>
              </div>
            :
              <div style={{display: 'flex', width: '100%', top: 0, height: 60 }}>
                <div className="hover-class" style={{height: '100%', width: '100%', backgroundColor: '#6c5ce7', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <h2 style={{color: 'white'}}>{this.props.coffee ? '20 oz' : this.props.can ?  '17 oz' : this.props.kids ? '12 oz' : this.props.sippy ? '8 oz' : null}</h2>
                </div>
              </div>
            }
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <TextField helperText="Add any additional design instructions here" multiline rows="6" style={{marginTop: 15, width: '80%'}} value={this.state.additionalInfo} id="outlined-basic" label="Description" variant="outlined" maxLength="2" onChange={(e)=>this.setState({additionalInfo: e.target.value})}/>
              <div style={{width: '80%', display: 'flex', justifyContent: 'flex-start', marginTop: 20}}>
                <div style={{height: 60, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid black', borderBottom: '1px solid black', borderLeft: '1px solid black', borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}>
                  <div style={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <label style={{color: '#6c5ce7', fontWeight: 'bold', fontSize: 24}}>Add decal?</label>
                  </div>
                </div>
                <div style={{height: 62, width: '70%', display: 'flex', flexDirection: 'row'}}>
                  <div style={{width: '50%', backgroundColor: this.state.addDecal ? '#a29bfe' : '#6c5ce7', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.setState({addDecal: false})}>
                    <p style={{color: 'white', fontWeight: this.state.addDecal ? null : 'bold', fontSize: this.state.addDecal ? null : 20}}>No</p>
                  </div>
                  <div style={{width: '50%', borderTopRightRadius: 5, borderBottomRightRadius: 5, backgroundColor: this.state.addDecal ? '#6c5ce7' : '#a29bfe', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.setState({addDecal: true})}>
                    <p style={{color: 'white', fontWeight: this.state.addDecal ? 'bold' : null, fontSize: this.state.addDecal ? 20 : null}}>Yes</p>
                  </div>
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'flex-start', width: '80%'}}>
                <ReactPhoneInput
                  inputStyle={{width: 300, height: 50, borderRadius: 5, marginTop: 20, fontSize: 18}}
                  placeholder={'Phone Number'}
                  preferredCountries={['us', 'ca']}
                  inputExtraProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true
                  }}
                  defaultCountry={"us"}
                  value={this.state.phoneNum}
                  onChange={this.handleOnChange}
                />
              </div>
              <FormControl variant="outlined" style={{width: '80%', display: 'flex', justifyContent: 'flex-start'}}>
                <InputLabel  id="outlined-basic" style={{marginTop: 20, height: 40, width: 70}}>
                  Quantity
                </InputLabel>
                <Select
                  variant="outlined"
                  labelId="outlined-basic"
                  id="outlined-basic"
                  value={this.state.quantity}
                  onChange={(e)=>this.setState({quantity: e.target.value})}
                  style={{marginTop: 20, width: 100}}
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                  <MenuItem value={"1"}>1</MenuItem>
                  <MenuItem value={"2"}>2</MenuItem>
                  <MenuItem value={"3"}>3</MenuItem>
                  <MenuItem value={"4"}>4</MenuItem>
                  <MenuItem value={"5"}>5</MenuItem>
                  <MenuItem value={"6"}>6</MenuItem>
                  <MenuItem value={"7"}>7</MenuItem>
                  <MenuItem value={"8"}>8</MenuItem>
                  <MenuItem value={"9"}>9</MenuItem>
                </Select>
              </FormControl>
              <div style={{marginTop: 10, width: '80%', display: 'flex', justifyContent: 'flex-start'}}>
                <div className="hover-class" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', border: '0.5px solid rgba(99, 110, 114,1.0)', backgroundColor: 'rgba(108, 92, 231,0.8)', width: 250, height: 60, borderRadius: 5, marginTop: 20}} onClick={()=>this.addItemToCart()}>
                  <h3 style={{color: 'white'}}>Add to Cart</h3>
                  <AddShoppingCartIcon style={{fontSize: 30, marginLeft: 25, color: 'white'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          {this.props.tall ?
            <CupType />
          :
            <CupTypeRowTwo />
          }
        </div>
        {this.state.addedToCart &&
          <div className="Added-To-Cart-Modal">
            <h1>Added to cart! :)</h1>
            <div className="hover-class" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 30, width: 100, backgroundColor: '#0984e3', borderRadius: 5}} onClick={()=>this.setState({addedToCart: false})}>
              <h5 style={{color: 'white'}}>OK</h5>
            </div>
          </div>
        }
      </div>
    )
  }
}
