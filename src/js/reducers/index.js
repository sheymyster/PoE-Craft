import {combineReducers} from 'redux';
import AddNewAffixReducer from './add-new-mod';
import ItemPropertiesReducer from './item-properties-reducer';
import CurrencyCount from './currency-counter-reducer';
import optionConfiguration from './option-configuration-reducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    currentAffixs: AddNewAffixReducer,
    currentProperties: ItemPropertiesReducer,
    currencyCount: CurrencyCount,
    optionConfiguration: optionConfiguration
});

export default allReducers
