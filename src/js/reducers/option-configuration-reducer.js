const initialState =  {dynamicDisplayStatus: 'currencyCounterDisplay',
                       affixDetail: false};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_DISPLAY_STATUS':
            return {...state, dynamicDisplayStatus : action.payload};
            break;
        case 'TOGGLE_AFFIX_DETAILS':
            return {...state, affixDetail : action.payload};
            break;
        default:
            return state;
    }
};
