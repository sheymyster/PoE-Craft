import {BodyDEX} from '../all-mods';


export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const addNewAffix = () => {
    return {
        type: 'ADD_NEW_AFFIX',
        payload: chooseRandomAffix()
    }
};

function chooseRandomAffix() {
    var baseMods = BodyDEX;
    var chosenMod =  chooseRandomMod(baseMods);
    var chosenTier = chooseRandomTier(chosenMod);
    var chosenValue = chooseRandomValue(chosenTier);
    console.log(chosenMod);
    console.log(chosenTier);
    console.log(chosenValue);
    return  [{"stat": chosenMod[0].Stat,
                    "type": chosenMod[0].Type,
                    "tier": chosenTier.tier,
                    "value": chosenValue.chosenValue}]

    //return {
      //newAffix
    //}
};

function chooseRandomTier(chosenMod) {
    var tierNames = Object.keys(chosenMod[0].Tiers);
    var chosenTier;
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
        chosenTier = chosenMod[0].Tiers[tierNames[l]];
        return chosenTier
      }
    }
    return {
      chosenTier
    }
};

function chooseRandomMod(baseMods) {
    var baseModNames = Object.keys(baseMods);
    var chosenMod;
    var modWeightArr = [];
    var totalModWeight = 0;
    for (var i=0; i<baseModNames.length; i++) {
        modWeightArr.push(baseMods[baseModNames[i]][0].Weight);
    }
    for (var k=0; k<modWeightArr.length; k++) {
      totalModWeight += modWeightArr[k];
    }
    var random = Math.floor(Math.random() * totalModWeight);
    for (var j=0; j<baseModNames.length; j++) {
      random -= modWeightArr[j];
      if (random<0) {
        chosenMod = baseMods[baseModNames[j]];
        return chosenMod
      }
    }
    return {
      chosenMod
    }
};

function chooseRandomValue(chosenTier) {
    var min = Math.ceil(chosenTier.range[0]);
    var max = Math.floor(chosenTier.range[1]);
    var chosenValue = Math.floor(Math.random()*(max-min+1))+min;
    return {
      chosenValue
    }
};
