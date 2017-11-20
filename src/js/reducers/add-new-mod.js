export default function (state = [], action) {
    let newArray = state.slice();
    switch (action.type) {
        case 'ADD_NEW_AFFIX':
            newArray.splice(newArray.length, 0, action.payload)
            return newArray;
            break;
        case 'CRAFT_SCOUR':
            let blankArray = [];
            return blankArray;
            break;
        case 'REMOVE_RANDOM_AFFIX':
            newArray.splice(action.payload, 1)
            return newArray;
            break;
        case 'RANDOMIZE_AFFIX_VALUES':
            return action.payload;
            break;
        default:
            return state;
    }
};
