import JSZip from "jszip";
import L, { Map } from 'leaflet';
import 'leaflet-kml';

/**
 * Function to handle KMZ file, parse it, and add the KML layer to the Leaflet map.
 * @param map - The Leaflet map instance.
 * @param kmzFile - The KMZ file to be parsed and displayed.
 */
export const handleKMZFile = async (map: Map, kmzFile: File) => {
    const reader = new FileReader();
  
    reader.onload = async function (event) {
      try {
        const zip = await JSZip.loadAsync(event.target?.result as ArrayBuffer);
  
        // Find all KML files in the ZIP archive
        const kmlFiles = Object.keys(zip.files).filter((fileName) => fileName.endsWith('.kml'));
  
        if (kmlFiles.length === 0) {
          console.error('No KML files found in the KMZ archive');
          return;
        }
  
        // Process each KML file found
        for (const kmlFileName of kmlFiles) {
          const kmlString = await zip.file(kmlFileName)?.async('string');
          if (kmlString) {
            const kmlDocument = new DOMParser().parseFromString(kmlString, 'text/xml');
            // @ts-expect-error - The Leaflet KML plugin does not have TypeScript definitions
            const kmlLayer = new L.KML(kmlDocument);
            map.addLayer(kmlLayer);
  
            // Optionally adjust the map view to fit the bounds of each KML layer
            map.fitBounds(kmlLayer.getBounds());
          }
        }
      } catch (error) {
        console.error('Error parsing KMZ file:', error);
      }
    };
  
    reader.readAsArrayBuffer(kmzFile);
  };
  