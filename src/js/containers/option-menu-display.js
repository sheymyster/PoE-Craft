import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeOptionConfiguration} from '../actions/index';
require('../../index.css');


class OptionMenu extends Component {

  render() {
    var affixDetailToggleImage;
    if (this.props.optionConfiguration.affixDetail) {
      affixDetailToggleImage = require("../../assets/Buttons/affixDetailToggleON.png")
    } else {
      affixDetailToggleImage = require("../../assets/Buttons/affixDetailToggleOFF.png")
    }
      return (
        <div className='optionMenuContainer'>
          <div className='optionDIV'>Show Property Details  <img id='optionToggleImages' src={affixDetailToggleImage} onClick={() => this.props.changeOptionConfiguration('TOGGLE_AFFIX_DETAILS', !this.props.optionConfiguration.affixDetail)} /></div>
          <button className='resetCurrencyCounter' onClick={() => this.props.changeOptionConfiguration('CHANGE_DISPLAY_STATUS', 'currencyCounterDisplay')}><span>BACK</span></button>
        </div>
      );
    }
  }





  function mapStateToProps(state) {
      return {
          optionConfiguration: state.optionConfiguration
      };
  }

  function matchDispatchToProps(dispatch){
      return bindActionCreators({
                                 changeOptionConfiguration: changeOptionConfiguration}, dispatch);
  }
  export default connect(mapStateToProps, matchDispatchToProps)(OptionMenu);
