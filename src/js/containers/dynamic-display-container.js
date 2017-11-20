import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CurrencyCounter from './currency-counter-display';
import OptionMenu from './option-menu-display';
require('../../index.css');


class DynamicDisplay extends Component {

  render() {
    switch (this.props.optionConfiguration.dynamicDisplayStatus) {
      case 'currencyCounterDisplay':
        return <CurrencyCounter />;
        break;
      case 'optionMenuDisplay':
        return <OptionMenu />;
        break;
    }
  }
}






function mapStateToProps(state) {
    return {
        optionConfiguration: state.optionConfiguration
    };
}
export default connect(mapStateToProps)(DynamicDisplay);
