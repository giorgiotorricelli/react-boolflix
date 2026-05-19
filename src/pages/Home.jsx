import { SearchListContext } from "../contexts/SearchListContext";
import { useContext } from "react";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

function Home() {
  const { movieList, seriesList } = useContext(SearchListContext);
  const starArr = Array(5).fill(0);
  return (
    <>
      <div>Home</div>
      <h1>Movies</h1>
      <div className="d-flex cards-wrapper movies-wrapper gap-2">
        {movieList.map(current => {
          return <div key={current.id} className="flex-shrink-0 w-25 h-25">
            <div className="w-100">
              {current.poster_path === null ? <div className="poster-without-img"><h1>{current.title}</h1></div> : 
              <img src={`https://image.tmdb.org/t/p/w500/${current.poster_path}`} alt="" className="poster-img" />}
            </div>
            <p>
              {starArr.map((star, index) => {
                console.log(current.vote_average / 2);
                
                if (current.vote_average / 2 - index >= 0.75){
                  return <StarFill/>
                } else if (current.vote_average / 2 - index <= 0.74 && current.vote_average / 2 - index >= 0.26) {
                  return <StarHalf/>
                } else {
                  return <Star/>
                }
              })}
              {`(${current.vote_count})`}
            </p>
          </div>
        })}
      </div>
      <h1>TV SHOWS</h1>
      <div className="d-flex cards-wrapper movies-wrapper gap-2">
        {seriesList.map(current => {
          return <div key={current.id} className="flex-shrink-0 w-25 h-25">
            <div className="w-100">
              {current.poster_path === null ? <div className="poster-without-img"><h1>{current.name}</h1></div> : 
              <img src={`https://image.tmdb.org/t/p/w500/${current.poster_path}`} alt="" className="poster-img" />}
              
            </div>
            <p>
              {starArr.map((star, index) => {
                console.log(current.vote_average / 2);
                
                if (current.vote_average / 2 - index >= 0.75){
                  return <StarFill/>
                } else if (current.vote_average / 2 - index <= 0.74 && current.vote_average / 2 - index >= 0.26) {
                  return <StarHalf/>
                } else {
                  return <Star/>
                }
              })}
              {`(${current.vote_count})`}
            </p>
          </div>
        })}
      </div>

    </>

  );
}

export default Home