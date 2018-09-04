import React, { Component } from 'react';
import { Map, TileLayer, LayersControl } from 'react-leaflet';



class LeafletMap extends Component {
  render() {
    var apiUrl = 'https://api2.terravion.com'
    var access_token='2e68cee0-b2fd-4ef5-97f6-8e44afb09ffa'
    var user_id='5bad4dfa-7262-4a0a-b1e5-da30793cec65'
    
    var epochStart = this.props.epoch - 12 * 60 * 60;
    var epochEnd = this.props.epoch + 12 * 60 * 60;
    var tileUrlTemplate = apiUrl + '/users/'+user_id+'/{z}/{x}/{y}.png?epochStart='+epochStart+'&epochEnd='+epochEnd+'&access_token='+access_token;
    
    return(
      <Map center={[38.541580, -121.874271]} zoom={15} style={{height:'calc(100vh - 75px)', width: '75%' }}>
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="mapbox">
            <TileLayer url="https://api.tiles.mapbox.com/v2/cgwright.ca5740e5/{z}/{x}/{y}.jpg" />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="nc">
            <TileLayer url={tileUrlTemplate + '&product=NC'} attribution="Terravion" tms="true"/>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="cir">
            <TileLayer url={tileUrlTemplate + '&product=CIR'}  attribution="Terravion" tms="true"/>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="ndvi">
            <TileLayer url={tileUrlTemplate + '&product=NDVI&colorMap=GRANULAR'}  attribution="Terravion" tms="true"/>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="thermal">
            <TileLayer url={tileUrlTemplate + '&product=TIRS&colorMap=T'}  attribution="Terravion" tms="true"/>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="zone">
            <TileLayer url={tileUrlTemplate + '&product=ZONE&colorMap=GRANULAR'}  attribution="Terravion" tms="true"/>
          </LayersControl.Overlay>
        </LayersControl>
      </Map>
    );
  }
}

export default LeafletMap;