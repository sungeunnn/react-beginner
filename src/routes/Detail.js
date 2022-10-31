import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledBasic = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const StyledBody = styled.img`
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
`;


const StyledBox = styled.div`
display: flex;
align-items: center;
background-color: white;
width: 80%;
height: 100%;
border: 1px solid white;
opacity: 50%;
margin-top: 150px;
`;

const StyledMovie = styled.div`
padding: 20px;
`
const StyledImg = styled.img`
  height: 400px;
  width : 40%;

`


function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(detail);

  return(
    <div>
        {loading ? (
            <h1>Loaidng . . .</h1>
        ) : (
            <StyledBasic>
                <StyledBody src={detail.background_image} alt={detail.title} />
                <StyledBox>
                  <StyledImg src={detail.medium_cover_image} alt={detail.year} />
                  <StyledMovie>
                      <h1>{detail.title}</h1>
                      <div>{Math.floor((detail.runtime)/60)}시간 {(detail.runtime)%60}분</div>
                      <p>{detail.description_full}</p>
                    </StyledMovie>
                  </StyledBox>
            </StyledBasic>
            
        )}
    </div>
  )
}
export default Detail;
