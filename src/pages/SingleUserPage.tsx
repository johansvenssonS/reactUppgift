import { useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { useUsers } from "../hooks/userCalls";
import { User } from "lucide-react";
const SingleUserPage = () => {
  const { userId } = useParams();

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

  const user = users?.find((u) => String(u.id) === userId);
  console.log(user);

  let selectedBackground = "";
  if (user.settings.theme === "dark") {
    selectedBackground = "bg-black";
  } else {
    selectedBackground = "bg-white";
  }

  return (
    <div className="flex flex-col items-center p-8 w-full">
      <div className="flex flex-col items-center h-200 w-full border-3 rounded-[1rem] p-8">
        <User size={50}></User>
        <h3>ID: {user.id}</h3>
        <h3> Användarnamn: {user.username}</h3>
        <h3>Namn: {user.profile.name}</h3>
        <h3>Email: {user.profile.email}</h3>
        <h2>Adress</h2>
        <h4>
          Stad: {user.profile.address.city}, Gata: {user.profile.address.street}{" "}
          Postnummer: {user.profile.address.zipCode}
        </h4>
        <h3>Roller: {user.roles}</h3>

        <div className={`h-50 w-50 ${selectedBackground}`}></div>
      </div>
    </div>
  );
};

export default SingleUserPage;
