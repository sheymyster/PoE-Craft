import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {addNewMod} from '../actions/index';


export default class AddModButton extends Component {
    render() {
        return (
            <button onClick={() => this.props.addNewMod()}>ADD</button>
        );
    }
}
