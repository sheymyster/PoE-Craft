import React, {Component} from 'react';
import {connect} from 'react-redux';
import ItemPropertiesDisplay from './item-properties-display';


class ItemModsDisplay extends Component {
    formatAffixData() {
      var A = this.props.currentAffixs.slice();
      var arr = [];
      var i;
      var n = A.length;
      for (i=0;i<n;i++) {
        var j;
        var m = A[i].length
        for (j=0;j<m;j++) {
          if (A[i][j].affix==="Life Regen") {
            A[i][j].value /= 100;
          }
          arr.push(A[i][j]);
        }
      }
      return arr.map((affix) => {
          return (
              <div id='affix' className="tooltipText">
                  {affix.text[0]}{affix.value}{affix.text[1]}
              </div>
          );
      });
    }

    render() {
        if (!this.props.currentAffixs) {
            return (<div>No Mods</div>);
        }
        return (
          <div className='itemStatsContainer'>
              <ItemPropertiesDisplay />
              <img className='itemImage' src={require("../../assets/BodyDEX/AssassinsGarb.png")} alt='BodyDEX'/>
              {this.formatAffixData()}
          </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentAffixs: state.currentAffixs
    };
}
export default connect(mapStateToProps)(ItemModsDisplay);
