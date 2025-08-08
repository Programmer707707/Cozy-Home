import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const coordinates: [number, number] = [41.3159, 69.2481]; 

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg mt-8">
      <MapContainer
        center={coordinates}
        zoom={14}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            Tashkent, Uzbekistan <br /> Cozy Home Store
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
