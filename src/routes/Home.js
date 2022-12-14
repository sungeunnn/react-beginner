import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Loading from './../components/Loading';
import Title from './../components/Title';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=7.0&&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <Loading />
      ): (
        <div>
          <Title />
          <div className={styles.movie} >
          {movies.map((movie) => (
            <Movie
              key={movie.key}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
          </div>
        </div>
      )}
      <div className={styles.minscreen}>
        <div>๐ํ๋ฉด ํฌ๊ธฐ๋ฅผ <strong style={{color:"red"}}>๋ ํฌ๊ฒ</strong> ์กฐ์ ํด์ฃผ์ธ์๐</div>
      </div>
    </div>
  );
}

export default Home;
