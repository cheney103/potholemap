import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const Map = () => {
  const mapContainer = useRef();
  const [mapCenter, setMapCenter] = useState({
    lat: -59.570655, //Lng center for Barbados
    lng: 13.193114, //Lat center for Barbados
  });
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    var bounds = [
      [-60.27172006347844, 12.729393667108312], // Southwest coordinates
      [-58.86958993652529, 13.655956198937346], // Northeast coordinates
    ];
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapCenter.lng, mapCenter.lat],
      zoom: zoom,
      maxBounds: bounds,
    });

    map.fitBounds([
      [-59.24930490233564, 13.427986048198505],
      [-59.8920050976494, 12.958016032319861],
    ]);

    map.on("move", () => {
      setMapCenter({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
      });
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="sidebar">
        Longitude: {mapCenter.lng} | Latitude: {mapCenter.lat} | Zoom: {zoom}
      </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default Map;
