import React, { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";

const SearchBar = () => {
  const { search, setSearch } = useContext(AuthContext);

  return (
    <div className="flex ml-12 mt-2">
      <input
        type="text"
        placeholder="Find your transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-white px-3 py-1 rounded-md text-white bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;