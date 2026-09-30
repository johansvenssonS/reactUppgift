import { useEffect, useState } from "react";
import { UserData } from "../types/Types";
import UserTable from "../components/UserTable";
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
      <UserTable users={users}></UserTable>
    </div>
  );
};

export default UserPage;
