import { useLinkClickHandler, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import Loading from './../components/Loading';
import Title from './../components/Title';


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
            <Loading />
        ) : (
            <div className={styles.detail}>
              <Title />
                <img className={styles.detailimg} src={detail.background_image} alt={detail.title} />
                <div className={styles.detailbox}>
                  <img style={{borderRadius: "10px"}}src={detail.medium_cover_image} alt={detail.year} />
                  <div className={styles.detailex}>
                      <h1>{detail.title}</h1>
                      <div> 💯: {detail.rating} 👍:{detail.like_count}</div>
                      <div>{Math.floor((detail.runtime)/60)}시간 {(detail.runtime)%60}분</div>
                      <p>{detail.description_full}</p>
                    </div>
                  </div>
             </div>
            
        )}
    </div>
  )
}
export default Detail;
