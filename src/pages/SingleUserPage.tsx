import { useParams } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { useUsers } from "../hooks/userCalls";
import { User } from "lucide-react";
import { UserData } from "../types/Types";
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

  const user = users?.find((u: UserData) => String(u.id) === userId);
  console.log(user);

  let selectedBackground = "";
  let textColor = "";
  if (user.settings.theme === "dark") {
    selectedBackground = "bg-black";
    textColor = "text-white";
  } else {
    selectedBackground = "bg-white";
    textColor = "text-black";
  }

  return (
    <div className="flex flex-col items-center p-8 w-full">
      <div
        className={`flex flex-col items-center h-200 w-full border-3 rounded-[1rem] p-8 ${textColor} ${selectedBackground}`}
      >
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
      </div>
    </div>
  );
};

export default SingleUserPage;
