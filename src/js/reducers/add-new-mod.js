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
        default:
            return state;
    }
};
