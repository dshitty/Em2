import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icon issue in Leaflet + React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// TypeScript interface
interface Hospital {
  id: number;
  lat: number;
  lng: number;
  name: string;
}

const Dashboard1: React.FC = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => 
       { console.log("Position received:", pos);
      setPosition([pos.coords.latitude, pos.coords.longitude])

        }
,
      (err) => {
        console.error(err);
        alert('Please allow location access');
      }
    );
  }, []);

  // Fetch nearby hospitals from Overpass API
  useEffect(() => {
    if (!position) return;

    const fetchHospitals = async () => {
      try {
        const [lat, lng] = position;
        const radius = 3000; // in meters (3km)
        const overpassQuery = `
          [out:json];
          node(around:${radius},${lat},${lng})["amenity"="hospital"];
          out;
        `;
        const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;
        const response = await fetch(url);
        const data = await response.json();

        // Map data to Hospital type
        const mapped: Hospital[] = data.elements.map((el: any) => ({
          id: el.id,
          lat: el.lat,
          lng: el.lon,
          name: el.tags?.name || 'Unknown Hospital',
        }));

        setHospitals(mapped);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospitals();
  }, [position]);

  if (!position) return <div>Loading your location..</div>;

  return (
    <div className='w-screen h-screen'>
      <MapContainer
        center={position}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
        className='relative z-0'
      >
      
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      
        <Marker position={position}>
          <Popup>Your location</Popup>
        </Marker>

        
        <Circle center={position} radius={50} pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.2 }} />

       
        {hospitals.map((h) => (
          <Marker key={h.id} position={[h.lat, h.lng]}>
            <Popup>{h.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      </div>
  );
};

export default Dashboard1;
