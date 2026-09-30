import { UserData, Users } from "../types/Types";
import UserRow from "./UserRow";

const UserTable = (props: Users) => {
  return (
    <div className="overflow-x-auto p-4 w-full">
      <table className="min-w-full border-collapse border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Användarnamn
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Profil
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Inställningar
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Roller
            </th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user: UserData) => (
            <UserRow key={user.id} userData={user}></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
