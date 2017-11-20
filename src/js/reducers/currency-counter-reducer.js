const initialState =  {transmute: 0,
                       augment: 0,
                       alteration: 0,
                       regal: 0,
                       exalt: 0,
                       chaos: 0,
                       alchemy: 0,
                       scour: 0,
                       annulment: 0,
                       divine: 0};

export default function (state = initialState, action) {
    let newCurrencyCount = Object.assign({}, state);
    switch (action.type) {
        case 'COUNT_CURRENCY':
            newCurrencyCount[action.payload[0]] += action.payload[1]
            return newCurrencyCount;
            break;
        case 'RESET_CURRENCY_COUNTER':
            return initialState;
            break;
        default:
            return state;
    }
};
