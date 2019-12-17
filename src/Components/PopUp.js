import React, {Component} from 'react';
import '../App.css';
import CloseIcon from '@material-ui/icons/Close';

export default class PopUp extends Component {

  render(){
    return(
      <div className="pop-up">
        <div className="hover-class" style={{position: 'absolute', top: 5, right: 5, zIndex: 999}} onClick={this.props.closePopUp}>
          <CloseIcon style={{fontSize: 50, color: 'rgba(256,256,256,0.7)'}} />
        </div>
        <img src={require('../images/MXmasJenna.png')} alt="Merry Xmas" style={{height: 120, backgroundColor: 'rgba(223, 230, 233,0.5)', borderRadius: 10 }} />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', width: '100%'}}>
          <img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/80008016_1041096749573933_7256975985049208060_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=105&_nc_ohc=SWyw6aNyhsoAX-Y_EQq&oh=58927a6a60b36706cefa13963954294e&oe=5EAEA660" alt="Whitmeyer family" style={{width: 501, height: 400}}/>
          <img src={require('../images/LvJesse.png')} alt="Love Jesse" style={{width: 150}} />
        </div>
      </div>
    )
  }
}
