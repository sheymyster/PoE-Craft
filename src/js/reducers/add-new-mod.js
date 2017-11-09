export default function (state = null, action) {
    switch (action.type) {
        case 'ADD_NEW_AFFIX':
            return action.payload;
            break;
    }
    return state;
}
