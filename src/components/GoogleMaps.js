import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { ninvoke } from 'q';

const mapStyles = {
  width: '80vw',
  height: '40vh'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false, //Hides or shows info window
        activeMarker:{}, //shows the active market upon click
        selectedPlace: {} //shows the info window to the selected place upon a marker
    }

    //Shows pop-up info window of clicked place
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    //closes info window when user clicks the close button on the info window
    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
         lat: 51.507351,
         lng: -0.127758
        }}
      >
            <Marker
            onClick={this.onMarkerClick}
            name={"Jamshed's E-Bike Store"}
            address={"St Cycles Road, Cycle Kingdom, CY7 LES"}
            subtext={"E-Bike Specialist"}
            />

            <InfoWindow
            marker = {this.state.activeMarker}
            visible = {this.state.showingInfoWindow}
            onClose = {this.onClose}
            >
                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                    <h6>{this.state.selectedPlace.subtext}</h6>
                    <p>{this.state.selectedPlace.address}</p>
                    
                </div>
            </InfoWindow>
        </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB-auusJ87N5x3O0QIWixqCkx0jvo11ceE'
})(MapContainer);