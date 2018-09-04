import { combineReducers } from 'redux';
import layersReducer from './layersReducer';

export default combineReducers({
    layersDates: layersReducer,

});