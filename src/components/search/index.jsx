import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <form className=" flex items-center mx-8 my-5 border border-blue-500  md:mx-32 rounded-full px-4 py-2">
      <input
        type="text"
        placeholder="Search..."
        className=" focus:outline-none w-full"
      />
      <button type="submit" className="text-blue-500">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
