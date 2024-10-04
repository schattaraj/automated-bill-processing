import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import regionsData from "@/public/geojson/regions.json";
const DashBoardMap = () => {
  const [geoData, setGeoData] = useState(null);
  useEffect(() => {
    setGeoData(regionsData);
  }, []);

  const geoJSONStyle = {
    color: "black", // Outline color
    weight: 1,
    fillColor: "transparent", // Transparent fill
    fillOpacity: 0.5,
  };

  // Function to handle hover effects and show tooltips with custom data
  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        e.target.setStyle({
          weight: 3,
          color: "#FF0000",
          fillColor: "#FF0000", // Highlight on hover
        });
        const tooltip = e.target.bindTooltip(
          `<div>
            <h4>${feature.properties.name}</h4>
            <p>Provider: 678</p>
          </div>`,
          { direction: "top", permanent: false, opacity: 0.9 }
        );
        tooltip.openTooltip();
      },
      mouseout: (e) => {
        e.target.setStyle({
          weight: 2,
          color: "black",
          fillColor: "transparent",
        });
        e.target.closeTooltip();
      },
    });
  };

  return (
    <MapContainer
      center={[0,30]}
      zoom={3.5}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      {/* Add base map tiles */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Conditionally render the GeoJSON data when loaded */}
      {geoData && (
        <GeoJSON
          data={geoData}
          style={geoJSONStyle}
          onEachFeature={onEachFeature} // Define hover effects and tooltips
        />
      )}
    </MapContainer>
  );
};

export default DashBoardMap;
