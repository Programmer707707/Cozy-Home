import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className="flex items-center bg-[#f6f1ed] text-brown-700 px-4 py-2 rounded-full w-full max-w-sm">
      <MagnifyingGlassIcon className="h-5 w-5 text-[#7c4b2b] mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none text-[#7c4b2b] placeholder-[#7c4b2b] w-full"
      />
    </div>
  );
};

export default SearchBar;
