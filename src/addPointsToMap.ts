import L, { LayerGroup, Map } from 'leaflet';
import { MyPoint } from './points';

export const addPointsToMap = (map: Map, points: MyPoint[]): LayerGroup[] => {
    const layers: LayerGroup[] = [];
  points.forEach((point) => {
    // Create a circle marker
    const circle = L.circle([point.lat, point.lng], {
      radius: 200, // Adjust radius as needed
      color: 'blue',
      fillColor: '#30a3dc',
      fillOpacity: 0.5,
    });

    // Create a custom divIcon for the label
    const icon = L.divIcon({
      html: `<div style="text-align: center; font-size: 12px; color: black;">${point.id}</div>`,
      className: 'custom-div-icon',
      iconSize: [20, 20], // Adjust size as needed
      iconAnchor: [10, 10], // Adjust anchor point
    });

    // Add the label as a marker on top of the circle
    const marker = L.marker([point.lat, point.lng], { icon });

    // Optional: You can group the circle and marker together if you need to manage them later
    layers.push(L.layerGroup([circle, marker]).addTo(map));
  });
  return layers;
};
