import React from "react";
import { SearchXIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        className="w-full bg-white px-3 py-2 pl-10 neo transition-all duration-300"
        placeholder="Search ..."
      />
    </div>
  );
};

export default Search;
