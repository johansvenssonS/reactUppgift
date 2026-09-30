import { UserData } from "../types/Types";

//passing props sak
type UserRowProps = {
  userData: UserData;
};

const UserRow = ({ userData }: UserRowProps) => {
  return (
    <tr className="even:bg-gray-50 hover:bg-gray-100">
      <td className="border border-gray-300 px-4 py-2 align-top">
        {userData.username}
      </td>
      <td className="border border-gray-300 px-4 py-2 align-top">
        {userData.profile.name}
      </td>
      <td className="border border-gray-300 px-4 py-2 align-top">
        {userData.settings.theme}
      </td>
      <td className="border border-gray-300 px-4 py-2 align-top">
        {userData.roles}
      </td>
    </tr>
  );
};
export default UserRow;
