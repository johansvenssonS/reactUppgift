import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import FloatingSearchBar from "../components/FloatingSearchBar";
import { useQuery } from "@tanstack/react-query";
import { ClimbingBoxLoader } from "react-spinners";

const UserPage = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearched] = useState(false);

  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("users.JSON");
      if (!response.ok)
        throw new Error("Kunde inte hämta användare" + response.status);
      return response.json();
    },
  });

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

  const searchUser = (e) => {
    let searchedStr = e.target.value;
    const ressArr = users.filter((u) =>
      u.profile.name.toLowerCase().startsWith(searchedStr.toLowerCase()),
    );
    setFilteredUsers(ressArr);
    setSearched(true);
  };

  let visibleUsers = [];

  if (filteredUsers.length > 1) {
    visibleUsers = filteredUsers;
  } else {
    visibleUsers = users;
  }

  if (search) {
    visibleUsers = filteredUsers;
  }

  return (
    <div className="flex flex-col items-center p-8 w-full">
      <FloatingSearchBar searchUser={searchUser}></FloatingSearchBar>
      <UserTable users={visibleUsers}></UserTable>
    </div>
  );
};

export default UserPage;
