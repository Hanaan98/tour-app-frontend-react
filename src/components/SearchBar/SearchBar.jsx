import { useState } from "react";
import { FaSearchLocation, FaCalendarAlt } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

function SearchBar() {
  const [date, setDate] = useState("");

  return (
    <div className=" hidden md:flex items-center px-2  justify-center rounded-md shadow-md py-3">
      <div className="flex items-center border-r border-gray-400 pr-4">
        <FaSearchLocation className="w-6 h-6 text-secondary mr-2" />
        <input
          className=" bg-transparent border-none focus:outline-none focus:border-secondary"
          type="text"
          placeholder="Where are you going?"
        />
      </div>
      <div className="flex items-center pl-4">
        <FaCalendarAlt className="w-6 h-6 text-secondary mr-2" />
        <input
          className="search-bar-input bg-transparent border-none focus:outline-none focus:border-secondary"
          type="text"
          placeholder="Date for the tour"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="flex items-center justify-center bg-secondary text-white rounded-md p-2">
        <MdSearch className="w-6 h-6" />
      </button>
    </div>
  );
}

export default SearchBar;
