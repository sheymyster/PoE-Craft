import {BodyDEX} from '../all-mods';
import {ModText} from '../mod-text';

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
    var modWeightArr = [];
    var tierWeightArr = [];
    for (const mod in baseMods) {
      if (baseMods.hasOwnProperty(mod)) {
        modWeightArr.push(mod[0].weight);
      }
    }
    function pickUsingWeights(items, weights) {
      var total = 0;
      var ranges = weights.slice(0);
      for(var i = 0, len = weights.length; i < len; i++) {
        ranges[i] = [total, total += ranges[i]];
      }
      var randomNumber = parseInt(Math.random() * total);
      for(;randomNumber < ranges[--i][0];);
      return items[i];
    }
};
