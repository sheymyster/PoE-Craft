export default function ( state = {
  "rarity" : "normal",
  "defenseStats" : [["Evasion Rating:", 737]],
  "levelRequirements" : [["Requires Level", 68], [183, "Dexterity"]]}, action) {
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
