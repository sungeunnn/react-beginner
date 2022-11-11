import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, genres, summary }) {
  return (
    <div className={styles.movie_box}>
      <div className={styles.movie_align}>
        <Link to={`/movie/${id}`}>
          <img className={styles.movie_img} src={coverImg} alt={title}></img>
        </Link>

        <h2>
          <Link
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              textShadow: "3px 0 0 grey"
            }}
            to={`/movie/${id}`}
          >
            "{title}"
          </Link>
        </h2>

        <div className={styles.movie_ex}>
          <div className={styles.movie_g}>
            <h3>Genres</h3>
            <ul>
              <li>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </li>
            </ul>
          </div>

          <div className={styles.movie_s}>
            <h3>Summary</h3>
            <p>
              {summary.length > 195 ? `${summary.slice(0, 195)}` : summary}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
