import React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxMap = () => {
  return (
    <Map
      mapboxAccessToken="YOUR_MAPBOX_TOKEN"
      initialViewState={{
        longitude: 69.2401,
        latitude: 41.2995,
        zoom: 12,
      }}
      style={{ width: '100%', height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      <NavigationControl position="top-left" />
      <Marker longitude={69.2401} latitude={41.2995} />
    </Map>
  );
};

export default MapboxMap;
