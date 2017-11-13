import React, {Component} from 'react';
import {connect} from 'react-redux';


class ItemModsDisplay extends Component {
    formatAffixData() {
      var A = this.props.currentAffixs;
      var arr = [];
      var i;
      var n = A.length;
      for (i=0;i<n;i++) {
        var j;
        var m = A[i].length
        for (j=0;j<m;j++) {
          arr.push(A[i][j]);
        }
      }
      return arr.map((affix) => {
          return (
              <div>
                  {affix.stat} {affix.type} {affix.tier} {affix.value}
              </div>
          );
      });
    }

    render() {
        if (!this.props.currentAffixs) {
            return (<div>No Mods</div>);
        }
        return (
          <div>
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
