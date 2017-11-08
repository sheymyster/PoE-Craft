import {BodyDEX} from '../all-mods.js';
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    console.log(BodyDEX);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
