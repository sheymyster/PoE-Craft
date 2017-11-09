import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

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
              <li>
                  {affix.amount} {affix.stat}
              </li>
          );
      });
    }

    render() {
        if (!this.props.currentAffixs) {
            return (<div>No Mods</div>);
        }
        return (
            <ul>
                {this.formatAffixData()}
            </ul>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        currentAffixs: state.currentAffixs
    };
}

export default connect(mapStateToProps)(ItemModsDisplay);
