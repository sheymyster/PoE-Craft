export default function (state = [], action) {
    switch (action.type) {
        case 'ADD_NEW_AFFIX':
            let newArray = state.slice();
            newArray.splice(newArray.length, 0, action.payload);
            return newArray;
            break;
        case 'ITEM_AFFIXS_FULL':
            return state;
        default:
            return state;
    }
};
