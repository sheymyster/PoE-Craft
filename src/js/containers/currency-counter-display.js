import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
require('../../index.css');


class CurrencyCounter extends Component {

  formatCurrencyData() {
    var A = Object.assign({}, this.props.currencyCount);
    var keysAndValues = Object.entries(A);
    var filterZeros = [];
    for (var i=0; i<keysAndValues.length; i++) {
      if (keysAndValues[i][1]>0) {
        var name = keysAndValues[i][0];
        var value = keysAndValues[i][1];
        filterZeros.push(<div>{name}: {value}</div>)
      }
    }
    return (
      <div>
        {filterZeros}
      </div>
    )
  }

  render() {
      return (
        <div className='currencyCounterContainer'>
          {this.formatCurrencyData()}
        </div>
      );
    }
  }






function mapStateToProps(state) {
    return {
        currencyCount: state.currencyCount
    };
}
export default connect(mapStateToProps)(CurrencyCounter);
