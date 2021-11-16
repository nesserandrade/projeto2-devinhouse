import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Menu from "../../components/Menu";
import URL_SERVER from "../../util/servers";

const Map = () => {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    async function getCompanies() {
      const result = await fetch(`${URL_SERVER}/empresas`);
      const data = await result.json();
      setCompanies(data);
    }

    getCompanies();

  }, []);

  return (
      <>
      <Menu />
    <div className="container-mapa">
      <MapContainer center={[-15.7801, -47.9292]} zoom={4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {companies.map((item) => (
          <Marker position={item.coordinates}>
            <Popup>
              <p>Empresa: {item.fantasy_name}</p>
              <p>Email: {item.email}</p>
              <p>Endereço: {item.address}, {item.number}</p>
              <p>CEP: {item.CEP}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    </>
  );
}

export default Map;