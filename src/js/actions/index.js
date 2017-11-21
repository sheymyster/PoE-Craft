import {BodyDEX} from '../all-mods';
import {rarePrefixText, rareSuffixText} from '../rarePrefixSuffixNames';
import store from '../../index';


export const craftTransmute = () => {
    if (store.getState().currentAffixs.length<6 && store.getState().currentProperties.rarity==="normal") {
      return function(dispatch) {
        dispatch({type: 'SET_RARITY_MAGIC'})
        var newModCount = (Math.floor(Math.random()*(2))+1);
        for (var i=0; i<newModCount; i++) {
          dispatch({type: 'ADD_NEW_AFFIX',
                  payload: chooseRandomAffix()})
        }
        dispatch({type: 'COUNT_CURRENCY',
                  payload: ['transmute', 1]})
      }
    } else if (store.getState().currentAffixs.length>=6) {
        alert("No more room for mods");
      return {
        type: 'ITEM_AFFIXS_FULL'
      }
    };
};

export const craftAugment = () => {
    if (store.getState().currentAffixs.length<6) {
      return function(dispatch) {
        dispatch({type: 'ADD_NEW_AFFIX',
                  payload: chooseRandomAffix()})
        dispatch({type: 'COUNT_CURRENCY',
                  payload: ['augment', 1]})
      }
    } else if (store.getState().currentAffixs.length>=6) {
        alert("No more room for mods");
      return {
        type: 'ITEM_AFFIXS_FULL'
      }
    };
};

export const craftScour = () => {
  if (store.getState().currentProperties.rarity!=="normal") {
    return function(dispatch) {
      dispatch({type: 'CRAFT_SCOUR'})
      dispatch({type: 'SET_RARITY_NORMAL'})
      dispatch({type: 'COUNT_CURRENCY',
                payload: ['scour', 1]})
    };
  } else {
    alert("Item is already normal rarity");
    return {
      type: 'ALREADY_NORMAL'
    }
  };
};

export const craftAlteration = () => {
  return function(dispatch) {
    dispatch({type: 'CRAFT_SCOUR'})
    var newModCount = (Math.floor(Math.random()*(2))+1);
    for (var i=0; i<newModCount; i++) {
      dispatch({type: 'ADD_NEW_AFFIX',
              payload: chooseRandomAffix()})
    }
    dispatch({type: 'COUNT_CURRENCY',
              payload: ['alteration', 1]})
  }
};

export const craftRegal = () => {
  return function(dispatch) {
    dispatch({type: 'SET_RARITY_RARE'})
    dispatch({type: 'ADD_NEW_AFFIX',
              payload: chooseRandomAffix()})
    dispatch({type: 'COUNT_CURRENCY',
              payload: ['regal', 1]})
    dispatch({type: 'CHANGE_RARE_PREFIX',
              payload: chooseNewRarePrefixName()})
    dispatch({type: 'CHANGE_RARE_SUFFIX',
              payload: chooseNewRareSuffixName()})
  }
};

export const craftExalt = () => {
  if (store.getState().currentAffixs.length<6) {
    return function(dispatch) {
      dispatch({type: 'ADD_NEW_AFFIX',
                payload: chooseRandomAffix()})
      dispatch({type: 'COUNT_CURRENCY',
                payload: ['exalt', 1]})
    };
  } else if (store.getState().currentAffixs.length>=6) {
      alert("No more room for mods");
    return {
      type: 'ITEM_AFFIXS_FULL'
    }
  };
};

export const craftChaos = () => {
  return function(dispatch) {
    dispatch({type: 'CRAFT_SCOUR'})
    var newModCount = (Math.floor(Math.random()*(2))+4);
    for (var i=0; i<newModCount; i++) {
      dispatch({type: 'ADD_NEW_AFFIX',
              payload: chooseRandomAffix()})
    }
    dispatch({type: 'COUNT_CURRENCY',
              payload: ['chaos', 1]})
    dispatch({type: 'CHANGE_RARE_PREFIX',
              payload: chooseNewRarePrefixName()})
    dispatch({type: 'CHANGE_RARE_SUFFIX',
              payload: chooseNewRareSuffixName()})
  }
};

export const craftAlchemy = () => {
  return function(dispatch) {
    dispatch({type: 'SET_RARITY_RARE'})
    var newModCount = (Math.floor(Math.random()*(2))+4);
    for (var i=0; i<newModCount; i++) {
      dispatch({type: 'ADD_NEW_AFFIX',
              payload: chooseRandomAffix()})
    }
    dispatch({type: 'COUNT_CURRENCY',
              payload: ['alchemy', 1]})
    dispatch({type: 'CHANGE_RARE_PREFIX',
              payload: chooseNewRarePrefixName()})
    dispatch({type: 'CHANGE_RARE_SUFFIX',
              payload: chooseNewRareSuffixName()})
  }
};

export const craftAnnulment = () => {
  return function(dispatch) {
    dispatch({type: 'REMOVE_RANDOM_AFFIX',
              payload: chooseAffixToRemove()})
    dispatch({type: 'COUNT_CURRENCY',
              payload: ['annulment', 1]})
  }
};

export const craftDivine = () => {
  return function(dispatch) {
    dispatch({type: 'RANDOMIZE_AFFIX_VALUES',
              payload: randomizeAffixValues()})
    dispatch({type: 'COUNT_CURRENCY',
              payload: ['divine', 1]})
  }
};

export const changeOptionConfiguration = (optionName, newConfig) => {
  return {
    type: optionName,
    payload: newConfig
  }
};

export const setRarity = (rarity) => {
  return {
    type: 'SET_RARITY_'+rarity
  }
};

export const countCurrency = (type, amount) => {
  return {
    type: 'COUNT_CURRENCY',
    payload: [type, amount]
  }
};

export const resetCurrencyCounter = () => {
  return {
    type: 'RESET_CURRENCY_COUNTER'
  }
};

function chooseNewRarePrefixName() {
  var A = rarePrefixText.slice();
  var randomPrefixNumber = Math.floor(Math.random()*(A.length));
  var prefixText = A[randomPrefixNumber];
  return prefixText;
};

function chooseNewRareSuffixName() {
  var B = Object.assign({}, rareSuffixText);
  var randomSuffixNumber = Math.floor(Math.random()*(B.BodyArmor.length));
  var suffixText = B.BodyArmor[randomSuffixNumber];
  return suffixText;
};

function chooseAffixToRemove() {
    var currentAffixCount = store.getState().currentAffixs.length;
    var removalIndex = Math.floor(Math.random()*(currentAffixCount));
    return removalIndex;
};

function randomizeAffixValues() {
    var A = store.getState().currentAffixs.slice();
    for (var i=0; i<A.length; i++) {
      for (var j=0; j<A[i].length; j++) {
        var affixTier = A[i][j].tier;
        var min = A[i][j].tierRange[0];
        var max = A[i][j].tierRange[1];
        var newValue = ((Math.floor(Math.random()*(max-min+1)))+min);
        A[i][j].value = newValue;
      }
    }
    return A;
};

function chooseRandomAffix() {
    var baseMods = BodyDEX;
    var filteredMods = filterBaseMods(baseMods);
    var chosenMod =  chooseRandomMod(filteredMods);
    var chosenTier = chooseRandomTier(chosenMod);
    var chosenValue = chooseRandomValue(chosenTier);
    if (chosenMod.length===1) {
      var firstAffixTier = chosenTier[0].tier
      return  [{"affix": chosenMod[0].Name,
                "text": chosenMod[0].Text,
                "stat": chosenMod[0].Stat,
                "type": chosenMod[0].Type,
                "tier": chosenTier[0].tier,
                "tierRange": chosenMod[0].Tiers[firstAffixTier].range,
                "tierText": chosenMod[0].Tiers[firstAffixTier].text,
                "value": chosenValue.chosenValue[0]}];
    } else if(chosenMod.length===2) {
      var firstAffixTier = chosenTier[0].tier
      var secondAffixTier = chosenTier[1].tier
      return  [{"affix": chosenMod[0].Name,
                "text": chosenMod[0].Text,
                "stat": chosenMod[0].Stat,
                "type": chosenMod[0].Type,
                "tier": chosenTier[0].tier,
                "tierRange": chosenMod[0].Tiers[firstAffixTier].range,
                "tierText": chosenMod[0].Tiers[firstAffixTier].text,
                "value": chosenValue.chosenValue[0]},
               {"affix": chosenMod[1].Name,
                "text": chosenMod[1].Text,
                "stat": chosenMod[1].Stat,
                "type": chosenMod[1].Type,
                "tier": chosenTier[1].tier,
                "tierRange": chosenMod[1].Tiers[secondAffixTier].range,
                "tierText": chosenMod[1].Tiers[secondAffixTier].text,
                "value": chosenValue.chosenValue[1]}];
    }
};

function filterBaseMods(baseMods) {
    var unAllowedAffixs = [];
    var allowed = Object.keys(baseMods);
    var prefixCount = 0;
    var suffixCount = 0;
    var maxPrefix = 1;
    var maxSuffix = 1;
    if (store.getState().currentProperties.rarity==="rare") {
      maxPrefix = 3;
      maxSuffix = 3;
    }
    for (var i=0; i<store.getState().currentAffixs.length; i++) {
      unAllowedAffixs.push(store.getState().currentAffixs[i][0].affix);
      if (store.getState().currentAffixs[i][0].type==="Prefix") {
        prefixCount++
      } else if (store.getState().currentAffixs[i][0].type==="Suffix"){
        suffixCount++
      };
    }
    if (prefixCount===maxPrefix) {
      for (var m=0; m<allowed.length; m++) {
        if (baseMods[allowed[m]][0].Type==="Prefix") {
          unAllowedAffixs.push(allowed[m]);
        }
      }
    }
    if (suffixCount===maxSuffix) {
      for (var n=0; n<allowed.length; n++) {
        if (baseMods[allowed[n]][0].Type==="Suffix") {
          unAllowedAffixs.push(allowed[n]);
        }
      }
    }
    for (var j=0; j<unAllowedAffixs.length; j++) {
      allowed = allowed.filter(item => item !==unAllowedAffixs[j]);
    }
    var filteredMods = Object.keys(baseMods)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = baseMods[key];
        return obj;
      }, {});
    return {
      filteredMods
    }
};

function chooseRandomTier(chosenMod) {
    var tierNames = Object.keys(chosenMod[0].Tiers);
    var chosenTier =[];
    var tierWeightArr = [];
    var totalTierWeight = 0;
    for (var i=0; i<tierNames.length; i++) {
      tierWeightArr.push(chosenMod[0].Tiers[tierNames[i]].weight);
    }
    for (var j=0; j<tierWeightArr.length; j++) {
      totalTierWeight += tierWeightArr[j];
    }
    var random = Math.floor(Math.random() * totalTierWeight);
    for (var l=0; l<tierNames.length; l++) {
      random -= tierWeightArr[l];
      if (random<0) {
        for (var k=0; k<chosenMod.length; k++) {
          chosenTier.push(chosenMod[k].Tiers[tierNames[l]])};
        return chosenTier
      }
    }
    return {
      chosenTier
    }
};

function chooseRandomMod(filteredMods) {
    var baseModNames = Object.keys(filteredMods.filteredMods);
    var chosenMod;
    var modWeightArr = [];
    var totalModWeight = 0;
    for (var i=0; i<baseModNames.length; i++) {
        modWeightArr.push(filteredMods.filteredMods[baseModNames[i]][0].Weight);
    }
    for (var k=0; k<modWeightArr.length; k++) {
      totalModWeight += modWeightArr[k];
    }
    var random = Math.floor(Math.random() * totalModWeight);
    for (var j=0; j<baseModNames.length; j++) {
      random -= modWeightArr[j];
      if (random<0) {
        chosenMod = filteredMods.filteredMods[baseModNames[j]];
        return chosenMod
      }
    }
    return {
      chosenMod
    }
};

function chooseRandomValue(chosenTier) {
    var chosenValue = [];
    for (var i=0; i<chosenTier.length; i++) {
      var min = Math.ceil(chosenTier[i].range[0]);
      var max = Math.floor(chosenTier[i].range[1]);
      chosenValue.push((Math.floor(Math.random()*(max-min+1)))+min)};
    return {
      chosenValue
    }
};
