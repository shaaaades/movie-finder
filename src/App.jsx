import "../index.css";
import Header from "./components/Header";
import MovieIntro from "./components/MovieIntro";
import MovieCard from "./components/MovieCard";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <MovieIntro />
        <MovieCard />
      </div>
    </>
  );
}