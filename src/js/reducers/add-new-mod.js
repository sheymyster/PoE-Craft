export default function (state = [], action) {
    let newArray = state.slice();
    switch (action.type) {
        case 'ADD_NEW_AFFIX':
            newArray.splice(newArray.length, 0, action.payload)
            return newArray;
            break;
        case 'CRAFT_SCOUR':
            return action.payload;
            break;
        case 'REMOVE_RANDOM_AFFIX':
            return action.payload;
            break;
        case 'RANDOMIZE_AFFIX_VALUES':
            return action.payload;
            break;
        default:
            return state;
    }
};
