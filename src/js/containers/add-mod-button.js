import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {craftTransmute} from '../actions/index';
import {normalToMagic} from '../actions/index';
require('../../index.css');


class CraftingButtonField extends Component {

    transmuteItem() {
      if (this.props.currentProperties.rarity!=="normal") {
        alert("You can only Transmute a normal rarity item");
      } else {
        var newModCount = (Math.floor(Math.random()*(2))+1);
        for (var i=0; i<newModCount; i++) {
          this.props.craftTransmute();
        }
        this.props.normalToMagic();
      }
    }

    render() {
        return (
          <div className='buttonContainer'>
            <button id="transmute" onClick={() => this.transmuteItem()} />
            <button id="augment" onClick={() => this.props.addNewAffix()} />
            <button id="alteration" onClick={() => this.props.addNewAffix()} />
            <button id="regal" onClick={() => this.props.addNewAffix()} />
            <button id="exalt" onClick={() => this.props.addNewAffix()} />
            <button id="chaos" onClick={() => this.props.addNewAffix()} />
            <button id="alchemy" onClick={() => this.props.addNewAffix()} />
            <button id="scour" onClick={() => this.props.addNewAffix()} />
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentProperties: state.currentProperties
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({craftTransmute: craftTransmute,
                              normalToMagic: normalToMagic}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(CraftingButtonField);
