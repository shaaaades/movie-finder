export default function SearchBar() {
  return (
    <form class="max-w-md mx-auto font-side-header">
      <label
        for="search-movie"
        id="search-movie"
        class="mb-2 text-gray-900 sr-only"
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>

        <div class="flex flex-row items-center p-2 text-sm gap-4">
          <input
            type="search"
            id="search"
            class="block w-100 p-2.5 ps-9 text-xs rounded-lg bg-gray-50 dark:placeholder-gray-400"
            placeholder="Search for movies and more"
            required
          />
          <button
            type="submit"
            class="text-white bg-[#111155] tracking-wide hover:bg-blue-800 rounded-lg text-xs px-4 py-2 "
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
