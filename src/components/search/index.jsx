import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <form className="flex items-center w-full md:w-2/3 lg:w-1/2 border bg-white rounded-full px-4 py-2 mx-4 md:mx-0">
      <input
        type="text"
        placeholder="Search..."
        className="focus:outline-none w-full bg-white"
      />
      <button type="submit" className="text-blue-500">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
