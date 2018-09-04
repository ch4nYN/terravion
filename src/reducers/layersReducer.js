import { GET_LAYERSDATES } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case GET_LAYERSDATES:
      return action.payload;
    default: 
      return state;
  }
}