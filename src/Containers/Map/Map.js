import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl"
import image from './marker.png'


var MapboxClient = require('mapbox')
var client = new MapboxClient('pk.eyJ1IjoiYmVuc3VsbHkxNyIsImEiOiJjamkwbXMyNnAwYngwM3dtajB5ZnVmZ2J4In0.VoeqVsCF2g3xgb1Vh-nPLg');

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiYmVuc3VsbHkxNyIsImEiOiJjamkwbXMyNnAwYngwM3dtajB5ZnVmZ2J4In0.VoeqVsCF2g3xgb1Vh-nPLg"
  })


class MapView extends Component {
    state = {
        location: null
    }
    componentDidMount() {
            client.geocodeForward('4567 E. 9th Ave, Denver, CO 80220', {country: 'us', proximity: { latitude: 39.760127, longitude: -105.008693}} )
            .then(function(res) {
              // res is the http response, including: status, headers and entity properties
              var data = res.entity; // data is the geocoding result as parsed JSON
              console.log(data)
            })
            .catch(function(err) {
              // handle errors
            }) 
    }
    render() {
        return(
            <Map
            style="mapbox://styles/mapbox/streets-v9"
            center={[ -104.93402, 39.73232]}
            containerStyle={{
                height: "100vh",
                width: "100vw"
            }}>
                {/* <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[-104.93402, 39.73232]}/>
                </Layer> */}
                <Marker
                coordinates={[-104.93402, 39.73232]}>
                    <div>
                        <img src={image} height='40px'/>               
                    </div>
                </Marker>
            </Map>
        )
        
    }
}

export default MapView

