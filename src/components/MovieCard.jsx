export default function MovieCard() {
  return (
    <div class="w-50 bg-white border border-gray-200 rounded-lg shadow-sm font-side-header p-3">
      <a href="#">
        <img class="rounded-lg" src="../src/assets/images/sample-movie-poster.png" alt="Movie Poster" />
      </a>
      <div>
        <a href="#">
          <h5 class="mb-1 font-black pt-3 text-[#121212] text-sm">
            MOVIE NAME
          </h5>
        </a>
        <p class="mb-2 font-normal text-[#5A5A5A] text-xs">
          Genre
        </p>
        <button
          class="w-full flex justify-center items-center text-center px-3 py-2 font-bold text-white text-xs bg-[#111155] rounded-lg hover:bg-blue-800"
        >
          See Details
        </button>
      </div>
    </div>
  );
}
