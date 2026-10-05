import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useUsers } from "../hooks/userCalls";
import { ClimbingBoxLoader } from "react-spinners";
import MapComponent from "../components/MapComponent";
import UserTable from "../components/UserTable";
const MapPage = () => {
  const { data: users, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div className="loading">
        <ClimbingBoxLoader size={100} color="red">
          Laddar användare...
        </ClimbingBoxLoader>
        <p>Laddar användare..</p>
      </div>
    );
  }

  console.log(users);

  return (
    <div className="flex flex-col items-center p-8 w-full ">
      <MapComponent users={users}></MapComponent>
      <UserTable users={users}></UserTable>
    </div>
  );
};
export default MapPage;
