import {BodyDEX} from '../all-mods';
import store from '../../index';


export const addNewAffix = () => {
    if (store.getState().currentAffixs.length<6) {
      return {
        type: 'ADD_NEW_AFFIX',
        payload: chooseRandomAffix()
      };
    } else {
        alert("No more room for mods");
      return {
        type: 'ITEM_AFFIXS_FULL'
      }
    };
};

function chooseRandomAffix() {
    var baseMods = BodyDEX;
    var filteredMods = filterBaseMods(baseMods);
    var chosenMod =  chooseRandomMod(filteredMods);
    var chosenTier = chooseRandomTier(chosenMod);
    var chosenValue = chooseRandomValue(chosenTier);
    if (chosenMod.length===1) {
      return  [{"affix": chosenMod[0].Name,
                "stat": chosenMod[0].Stat,
                "type": chosenMod[0].Type,
                "tier": chosenTier[0].tier,
                "value": chosenValue.chosenValue[0]}];
    } else if(chosenMod.length===2) {
      return  [{"affix": chosenMod[0].Name,
                "stat": chosenMod[0].Stat,
                "type": chosenMod[0].Type,
                "tier": chosenTier[0].tier,
                "value": chosenValue.chosenValue[0]},
               {"affix": chosenMod[1].Name,
                "stat": chosenMod[1].Stat,
                "type": chosenMod[1].Type,
                "tier": chosenTier[1].tier,
                "value": chosenValue.chosenValue[1]}];
    }
};

function filterBaseMods(baseMods) {
    var unAllowedAffixs = [];
    var allowed = Object.keys(baseMods);
    var prefixCount = 0;
    var suffixCount = 0;
    for (var i=0; i<store.getState().currentAffixs.length; i++) {
      unAllowedAffixs.push(store.getState().currentAffixs[i][0].affix);
      if (store.getState().currentAffixs[i][0].type==="Prefix") {
        prefixCount++
      } else if (store.getState().currentAffixs[i][0].type==="Suffix"){
        suffixCount++
      };
    }
    if (prefixCount===3) {
      for (var m=0; m<allowed.length; m++) {
        if (baseMods[allowed[m]][0].Type==="Prefix") {
          unAllowedAffixs.push(allowed[m]);
        }
      }
    }
    if (suffixCount===3) {
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
      chosenValue.push(Math.floor(Math.random()*(max-min+1))+min)};
    return {
      chosenValue
    }
};
