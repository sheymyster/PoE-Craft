import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
require('../../index.css');


class OptionMenu extends Component {

  render() {
      return (
        <div>
          
        </div>
      );
    }
  }






function mapStateToProps(state) {
    return {
        optionConfiguration: state.optionConfiguration
    };
}
export default connect(mapStateToProps)(OptionMenu);
