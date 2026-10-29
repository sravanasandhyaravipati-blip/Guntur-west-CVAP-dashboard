import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

function App() {
  const barData = {
    labels: ['Schools', 'PHCs', 'Roads', 'Waste', 'Jobs'],
    datasets: [{
      label: 'Guntur West % Completed',
      data: [85, 72, 90, 78, 65],
      backgroundColor: ['#2E7D32', '#1976D2', '#F57C00', '#7B1FA2', '#00796B']
    }]
  };

  const pieData = {
    labels: ['P4 Adopted', 'Pending'],
    datasets: [{
      data: [1200, 800],
      backgroundColor: ['#4CAF50', '#E0E0E0']
    }]
  };

  return (
    <div style={{padding: '20px', fontFamily: 'Arial'}}>
      <h2>Guntur West CVAP Dashboard - APSDPS Demo</h2>
      <p>Candidate: Sravana | React + ChartJS + GIS</p>

      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
        
        <div style={{width: '400px', height: '300px', border: '1px solid #ccc', padding: '10px'}}>
          <h4>KPI Status</h4>
          <Bar data={barData} />
        </div>

        <div style={{width: '350px', height: '300px', border: '1px solid #ccc', padding: '10px'}}>
          <h4>P4 Progress</h4>
          <Pie data={pieData} />
        </div>

        <div style={{width: '400px', height: '300px', border: '1px solid #ccc'}}>
          <h4>GIS - Guntur West Map</h4>
          <MapContainer center={[16.3067, 80.4365]} zoom={12} style={{height: '230px', width: '100%'}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[16.3067, 80.4365]}>
              <Popup>Guntur West PHC - 72% Developed</Popup>
            </Marker>
            <Marker position={[16.32, 80.45]}>
              <Popup>Municipal School - 85% Completed</Popup>
            </Marker>
          </MapContainer>
        </div>

      </div>
    </div>
  );
}

export default App;