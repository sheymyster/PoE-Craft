const initialState = {
  "rarity" : "normal",
  baseItem : 'BodyEV',
  rarePrefixText: "",
  rareSuffixText: "",
  "defenseStats" : [["Evasion Rating:", 737]],
  "levelRequirements" : [["Requires Level", 68], [183, "Dexterity"]],
  craftedAffix: {}}


export default function ( state = initialState, action) {
    switch (action.type) {
        case 'SET_RARITY_MAGIC':
            return {...state, "rarity" : "magic"};
            break;
        case 'SET_RARITY_NORMAL':
            return {...state, "rarity" : "normal"};
            break;
        case 'SET_RARITY_RARE':
            return {...state, "rarity" : "rare"};
            break;
        case 'CHANGE_LEVEL-REQUIREMENTS':
            return state;
            break;
        case 'CHANGE_RARE_PREFIX':
            return {...state, rarePrefixText : action.payload};
            break;
        case 'CHANGE_RARE_SUFFIX':
            return {...state, rareSuffixText : action.payload};
            break;
        case 'CRAFT_MASTER_MOD':
            return {...state, craftedAffix: action.payload};
            break;
        default:
            return state;
    }
  };
