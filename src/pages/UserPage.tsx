import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import FloatingSearchBar from "../components/FloatingSearchBar";
const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("users.JSON");
      const data = await response.json();
      setUsers(data);
      console.log(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center p-8 w-full">
      <FloatingSearchBar ></FloatingSearchBar>
      <UserTable users={users}></UserTable>
    </div>
  );
};

export default UserPage;
