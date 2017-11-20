const initialState =  {dynamicDisplayStatus: 'currencyCounterDisplay'};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_DISPLAY_STATUS':
            return {...state, dynamicDisplayStatus : action.payload};
            break;
        default:
            return state;
    }
};
