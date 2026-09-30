import { Home, MapPinned, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingSidebar = () => {
  const navItems = [
    { name: "Home", icon: <Home></Home>, location: "/" },
    { name: "Users", icon: <User2Icon></User2Icon>, location: "/users" },
    { name: "Map", icon: <MapPinned></MapPinned>, location: "/map" },
  ];
  //prettier-ignore
  return (
  <aside className=" w-72 h-full bg-gray-200 border-1 rounded-[1rem]">
    {/* LOGO */}
    <div className="flex px-8">
        <div className="flex-1 mt-4 flex-col">
            
        </div>
        
    </div>
    
    {/* NAVIGATION */}
    <nav>
        <ul className="flex flex-col  mt-2 gap-5">

        {
            navItems.map((item, i) => (
                <Link to={item.location} key={i}>
                <li className="flex items-center bg-white p-5  gap-5 " key={i}>{item.icon} {item.name}</li>
                </Link>
            ))
        }
        </ul>
    </nav>

    {/* ACTION BUTTONS */}
  </aside>
  )
};

export default FloatingSidebar;
