export default function (state = [[{affix:'Flat Evasion', stat:'Flat Evasion', type:'Prefix', tier:1, value:5 }]], action) {
    switch (action.type) {
        case 'ADD_NEW_AFFIX':
            let newArray = state.slice();
            newArray.splice(newArray.length, 0, action.payload);
            return newArray;
        default:
            return state;
    }
};
