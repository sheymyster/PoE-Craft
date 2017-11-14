export default function (state = [], action) {
    switch (action.type) {
        case 'CRAFT_TRANSMUTE':
            let newArray = state.slice();
            newArray.splice(newArray.length, 0, action.payload)
            return newArray;
            break;
        default:
            return state;
    }
};
