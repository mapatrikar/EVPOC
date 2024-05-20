// MapComponent.tsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapComponent.css';

// Import custom marker icon image
/*import customMarkerIcon from './custom-marker-icon.png';*/


// Fix for default marker icon issue in Leaflet when using with Webpack
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

interface ChargingStation {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

const MapComponent: React.FC = () => {
    const [chargingStations, setChargingStations] = useState<ChargingStation[]>([]);

    useEffect(() => {
        // Fetch EV charging stations data
        // Replace this with your actual data fetching logic
        const stations: ChargingStation[] = [
            { id: 1, name: 'Station 1', latitude: 51.505, longitude: -0.09 },
            { id: 2, name: 'Station 2', latitude: 51.51, longitude: -0.1 },
            // Add more stations as needed
        ];
        setChargingStations(stations);
    }, []);

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} className="map-container">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {chargingStations.map((station) => (
                <Marker key={station.id} position={[station.latitude, station.longitude]}>
                    <Popup>{station.name}</Popup>
                </Marker>
            ))}
        </MapContainer>

    );
};

export default MapComponent;
