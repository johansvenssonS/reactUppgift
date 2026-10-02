const FloatingSearchBar = (props) => {
  // prettier-ignore

  return (
    <div className="flex items-center bg-white rounded-[1rem] h-20 px-4 ml-4 sticky top-0 z-30 mb-4 w-full">
      <input
        className="w-full border-2 p-2 rounded-[1rem]"
        name="userSearch"
        placeholder="Sök användare.."
        onChange={props.searchUser}
      />
    </div>
  );
};

export default FloatingSearchBar;
