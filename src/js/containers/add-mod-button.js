import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DynamicDisplay from './dynamic-display-container';
import {craftTransmute, craftAugment, craftScour, craftAlteration, craftRegal, craftExalt, craftAlchemy,
  craftChaos, craftDivine, craftAnnulment, resetCurrencyCounter, changeOptionConfiguration, masterCraft,
  removeMasterCraft} from '../actions/index';
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
      if (this.props.currentAffixs.length+this.props.currentProperties.craftedAffix.length>0) {
        this.props.craftAnnulment();
      } else {
        alert("Item must have at least one property to use an Annulment Orb")
      }
    }

    divineItem() {
      if (this.props.currentAffixs.length>0) {
        this.props.craftDivine();
      } else {
        alert("Item must have at least one property to use a Divine Orb")
      }
    }

    openOptionsMenu() {
      this.props.changeOptionConfiguration('CHANGE_DISPLAY_STATUS','optionMenuDisplay');
    }

    render() {
        return (
          <div className="craftingOptionsContainer">
            <div className='buttonContainer'>
              <button className="orbButton" data-tooltip="Upgrades a normal item to magic and gives it 1 or 2 random affixes" id="transmute" onClick={() => this.transmuteItem()} />
              <button className="orbButton" data-tooltip="Adds an additional property to a magic item if it only has 1 affix" id="augment" onClick={() => this.augmentItem()} />
              <button className="orbButton" data-tooltip="Rerolls a magic item giving it 1 or 2 new random affixes" id="alteration" onClick={() => this.alterationItem()} />
              <button className="orbButton" data-tooltip="Upgrades a magic item to rare and gives it 1 additional random affix" id="regal" onClick={() => this.regalItem()} />
              <button className="orbButton" data-tooltip="Adds 1 additional affix to a rare item" id="exalt" onClick={() => this.exaltItem()} />
              <button className="orbButton" data-tooltip="Rerolls a rare item giving it 4 to 6 new random affixes" id="chaos" onClick={() => this.chaosItem()} />
              <button className="orbButton" data-tooltip="Upgrades a normal item to rare and givings it 4 to 6 random affixes" id="alchemy" onClick={() => this.alchemyItem()} />
              <button className="orbButton" data-tooltip="Randomly removes one affix, but this will not change the items rarity" id="annulment" onClick={() => this.annulmentItem()} />
              <button className="orbButton" data-tooltip="Downgrades a magic or rare item to normal and removes all affixes" id="scour" onClick={() => this.props.craftScour()} />
              <button className="orbButton" data-tooltip="Rerolls all affix values, but only in the tier they already were" id="divine" onClick={() => this.divineItem()} />
            </div>
            <div className="metamodButtonContainer">
              <button data-tooltip="Crafts the Master Meta-Mod 'Prefixes cannot be changed' Cost: 2 Exalt" className= "resetCurrencyCounter" onClick={() => this.props.masterCraft('Tora', 'MetaMod')}><span>Prefix Cannot Change</span></button>
              <button data-tooltip="Removes any mods crafted through a master crafting" className="resetCurrencyCounter" onClick={() => this.props.removeMasterCraft()}><span>Remove Craft</span></button>
              <button data-tooltip="Crafts the Master Meta-Mod 'Suffixes cannot be changed' Cost: 2 Exalt" className="resetCurrencyCounter" onClick={() => this.props.masterCraft('Haku', 'MetaMod')}><span>Suffix Cannot Change</span></button>
            </div>
            <DynamicDisplay />
            <div className="resetButtonDiv">
              <button className= "resetCurrencyCounter" onClick={() => this.props.resetCurrencyCounter()}><span>RESET</span></button>
              <button className= 'resetCurrencyCounter' onClick={() => this.openOptionsMenu()}><span>OPTIONS</span></button>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentProperties: state.currentProperties,
        currentAffixs: state.currentAffixs,
        optionConfiguration: state.optionConfiguration
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
                               craftDivine: craftDivine,
                               craftAlteration: craftAlteration,
                               resetCurrencyCounter: resetCurrencyCounter,
                               masterCraft: masterCraft,
                               removeMasterCraft: removeMasterCraft,
                               changeOptionConfiguration: changeOptionConfiguration}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(CraftingButtonField);
