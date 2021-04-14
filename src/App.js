import logo from './logo.svg';
import './App.css';

import React from "react";
import {Map as MapContainer, Marker, TileLayer, FeatureGroup} from "react-leaflet";
import {EditControl} from "react-leaflet-draw";

function App() {

    const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const POSITION_MAP = [51.505, -0.09];
    const POSITION_MARKER = [51.505, -0.09];
    const ZOOM_MAP = 13;

    const Map = () => (
        <MapContainer center={POSITION_MAP} zoom={ZOOM_MAP} style={{width: 580, height: 520}}>
            <TileLayer attribution={ATTRIBUTION} url={URL}/>

            <FeatureGroup>
                <EditControl
                    position='topright'
                    onEdited={this._onEditPath}
                    onCreated={this._onCreate}
                    onDeleted={this._onDeleted}
                    draw={{
                        rectangle: false
                    }}
                />
                <Circle center={[51.51, -0.06]} radius={200} />
            </FeatureGroup>

            <Marker position={POSITION_MARKER}/>
        </MapContainer>
    );

    return (
    <div className="App">
        <Map/>
    </div>
    );
}

export default App;
