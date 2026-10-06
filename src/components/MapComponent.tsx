import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getAllUsersLocation, useUsersLocation } from "../hooks/userCalls";

const MapComponent = (props) => {
  return (
    <MapContainer
      center={[62, 16]}
      zoom={5}
      className="h-200 w-full border-3 rounded-[1rem] "
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {props.users.map((u) => (
        <Marker
          key={u.id}
          position={[u.profile.address.lat, u.profile.address.lng]}
        >
          <Popup>
            {u.profile.name}, {u.profile.address.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
