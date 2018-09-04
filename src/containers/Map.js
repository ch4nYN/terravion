import '../styles/Map.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LeafletMap from './LeafletMap';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEpoch: 0
    }
  }
  componentDidMount() {
    this.props.getLayers();
  }
  selectDate(date, datesArr) {
    var obj;
    for (var i = 0; i < datesArr.length; i++) {
      if (date === datesArr[i]) {
        obj = document.getElementById(date);
        obj.style.backgroundColor = '#50C878';
        obj.style.color = 'white';
        obj.style.fontSize = '24px';
      } else {
        obj = document.getElementById(datesArr[i]);
        obj.style.backgroundColor = 'white';
        obj.style.color = 'black';
        obj.style.fontSize = '20px';
      }
    }
    
    
    this.setState({ selectedEpoch: date });
  }
  renderDates() {
    var dates = this.props.layersDates;
    if (!dates)
      return <li>...</li>;

    return dates.map(date => {
      var dateForm = new Date(date * 1000).toString().split(" ");
      dateForm = dateForm.splice(0, 4).join(" ");
      return <li key={date} id={date} onClick={() => this.selectDate(date, dates)}>{ dateForm }</li>
    });
  }
  render() {
    return(
      <div className="content">
        <LeafletMap epoch={this.state.selectedEpoch}/>
        <div id="dates">
          <p id="date-header">D A T E S</p>
          <ul>
            {this.renderDates()}
          </ul>
        </div>
      </div>
    ) 
  }
}
function mapStateToProps(state) {
  return { layersDates: state.layersDates };
}

export default connect(mapStateToProps, actions)(Map);