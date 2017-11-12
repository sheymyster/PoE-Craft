import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'


class ItemAffixs extends Component {
    renderList() {
        return this.props.currentAffixs.map((affix) => {
            return (
                <li>
                    {affix.stat} {affix.type} {affix.tier} {affix.value}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        currentAffixs: state.currentAffixs
    };
}

export default connect(mapStateToProps)(ItemAffixs);
