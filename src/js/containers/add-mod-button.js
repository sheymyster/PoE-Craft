import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {craftTransmute, craftAugment, craftScour, craftAlteration, craftRegal, craftExalt, craftAlchemy, craftChaos, craftAnnulment} from '../actions/index';
require('../../index.css');


class CraftingButtonField extends Component {

    transmuteItem() {
      if (this.props.currentProperties.rarity!=="normal") {
        alert("Item must be normal rarity to use a Transmute Orb");
      } else {
          this.props.craftTransmute();
      }
    }

    augmentItem() {
      if (this.props.currentProperties.rarity==="magic" && this.props.currentAffixs.length===1) {
          this.props.craftAugment();
      } else if (this.props.currentProperties.rarity!=="magic" || this.props.currentAffixs.length!==1) {
        alert("Item must be magic rarity with 1 affix to use an Augment Orb")
      }
    }

    alterationItem() {
      if (this.props.currentProperties.rarity==="magic") {
          this.props.craftAlteration();
      } else {
        alert("Item must be magic rarity to use an Alteration Orb")
      }
    }

    regalItem() {
      if (this.props.currentProperties.rarity==="magic") {
        this.props.craftRegal();
      } else {
        alert("Item must be magic rarity to use a Regal Orb")
      }
    }

    exaltItem() {
      if (this.props.currentProperties.rarity==="rare") {
        this.props.craftExalt();
      } else {
        alert("Item must be rare rarity to use an Exalt Orb")
      }
    }

    chaosItem() {
      if (this.props.currentProperties.rarity==="rare") {
        this.props.craftChaos();
      } else {
        alert("Item must be rare rarity to use a Chaos Orb")
      }
    }

    alchemyItem() {
      if (this.props.currentProperties.rarity==="normal") {
        this.props.craftAlchemy();
      } else {
        alert("Item must be normal rarity to use an Alchemy Orb")
      }
    }

    annulmentItem() {
      if (this.props.currentAffixs.length>0) {
        this.props.craftAnnulment();
      } else {
        alert("Item must have at least one property to use an Annulment Orb")
      }
    }

    render() {
        return (
          <div className="craftingOptionsContainer">
          <div className='buttonContainer'>
            <button id="transmute" onClick={() => this.transmuteItem()} />
            <button id="augment" onClick={() => this.augmentItem()} />
            <button id="alteration" onClick={() => this.alterationItem()} />
            <button id="regal" onClick={() => this.regalItem()} />
            <button id="exalt" onClick={() => this.exaltItem()} />
            <button id="chaos" onClick={() => this.chaosItem()} />
            <button id="alchemy" onClick={() => this.alchemyItem()} />
            <button id="annulment" onClick={() => this.annulmentItem()} />
            <button id="scour" onClick={() => this.props.craftScour()} />
          </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentProperties: state.currentProperties,
        currentAffixs: state.currentAffixs
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({craftTransmute: craftTransmute,
                               craftAugment: craftAugment,
                               craftScour: craftScour,
                               craftRegal: craftRegal,
                               craftExalt: craftExalt,
                               craftAlchemy: craftAlchemy,
                               craftChaos: craftChaos,
                               craftAnnulment: craftAnnulment,
                               craftAlteration: craftAlteration}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(CraftingButtonField);
