import axios from 'axios';

export const GET_LAYERSDATES = 'get_layers';

export const getLayers = () => {
  return function(dispatch) {
    axios.get("https://api2.terravion.com/layers/getLayersFromBlockId?blockId=48ed28ca-d272-4d1f-bfe0-cb95b61eecbc&access_token=2e68cee0-b2fd-4ef5-97f6-8e44afb09ffa")
      .then(res => {
        var arr = [];
        res.data.map(d => {
          return arr.push(d['layerDateEpoch']);
        });
        arr.reverse();
        dispatch({ type: GET_LAYERSDATES, payload: arr });
      });
  }
}