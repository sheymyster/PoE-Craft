import React, {Component} from 'react';
import {connect} from 'react-redux';


class ItemPropertiesDisplay extends Component {
    formatPropertyData() {
      var A = this.props.currentProperties;
      var defenseStats = [];
      for (var i=0; i<A.defenseStats.length; i++) {
        defenseStats.push(<div id="propertyText" className="tooltipText">{A.defenseStats[i][0]} <span id="propertyValue">{A.defenseStats[i][1]}</span></div>)
      }
        return (
          <div className="itemProperties">
                <div id='propertyText' className="tooltipText">Quality: <span id="qualityValue">+20%</span></div>
                {defenseStats}
          </div>
        );
    }

    render() {
        return (
          <div>
              {this.formatPropertyData()}
          </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentProperties: state.currentProperties
    };
}
export default connect(mapStateToProps)(ItemPropertiesDisplay);
