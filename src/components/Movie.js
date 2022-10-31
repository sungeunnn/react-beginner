import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #719e71;
`;

const StyledMovie = styled.div`
  width: 1000px;
  height: 1200px;
  border: 2px solid black;
  margin: 10px 50px px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f0fff0;
`;

const StyledMovieEx = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledMovieG = styled.div`
  border: 2px solid black;
  width: 230px;
  height: 200px;
  margin: 10px 10px 10px 20px;
`;

const StyledMovieS = styled.div`
  border: 2px solid black;
  width: 600px;
  height: 200px;
  margin: 10px 20px 10px 10px;
  float: ${(props) => props.float || "none"};
`;

const StyledImg = styled.img`
  width: 250px;
  height: 350px;
  margin: 20px;
  border-radius: 20px;
`;

const StyledSpace = styled.div`
  height : 50px;
`

function Movie({ id, coverImg, title, genres, summary }) {
  return (
    <StyledMain>
      <StyledSpace />
      <StyledMovie>
        <Link to={`/movie/${id}`}>
          <StyledImg src={coverImg} alt={title}></StyledImg>
        </Link>
        <h2>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/movie/${id}`}
          >
            "{title}"
          </Link>
        </h2>
        <StyledMovieEx>
          <StyledMovieG>
            <h3>Genres</h3>
            <ul>
              <li>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </li>
            </ul>
          </StyledMovieG>
          <StyledMovieS>
            <h3>Summary</h3>
            <p>{summary.slice(0, 400)}...</p>
          </StyledMovieS>
        </StyledMovieEx>
      </StyledMovie>
      <StyledSpace />
    </StyledMain>
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
