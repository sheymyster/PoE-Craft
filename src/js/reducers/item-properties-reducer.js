const initialState = {
  "rarity" : "normal",
  baseItem : 'BodyEV',
  "defenseStats" : [["Evasion Rating:", 737]],
  "levelRequirements" : [["Requires Level", 68], [183, "Dexterity"]]}


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
        default:
            return state;
    }
  };
