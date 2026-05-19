import { useContext, useState } from "react"
import { SearchListContext, SearchListProvider } from "../contexts/SearchListContext"
import useFetchPerGenre from "../hooks/useFetchPerGenre";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

function Genres() {
    const { movieGenreList,
        seriesGenreList } = useContext(SearchListContext);
    const [category, setCategory] = useState('');
    const [genre, setGenre] = useState('');
    const { searchByGenre } = useFetchPerGenre(category, genre);

    const starArr = Array(5).fill(0);

    function changeHandler(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'shows-per-genre') {
            setCategory('tv');
            setGenre(value);
        } if (name === 'movies-per-genre') {
            setCategory('movie');
            setGenre(value);
        }
    }
    return (
        <>
            <h1>Genres</h1>
            <div className="d-flex justify-content-center gap-3 ">
                <div className="d-flex flex-column align-items-center">
                    <label htmlFor="shows-per-genre">Shows genre</label>
                    <select className="btn btn-primary" name="shows-per-genre" id="shows-per-genre" onChange={changeHandler}>
                        {seriesGenreList.map(genre => {
                            return <option value={genre.id} key={genre.id}>{genre.name}</option>
                        })}
                    </select>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <label htmlFor="movies-per-genre">Movies genre</label>
                    <select className="btn btn-primary" name="movies-per-genre" id="movies-per-genre" onChange={changeHandler}>
                        {movieGenreList.map(genre => {
                            return <option value={genre.id} key={genre.id}>{genre.name}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="d-flex cards-wrapper movies-wrapper gap-2">
                {searchByGenre.map(current => {
                    return <div key={current.id} className="flex-shrink-0 w-25 h-25">
                        <div className="w-100">
                            {current.poster_path === null ? <div className="poster-without-img"><h1>{current.title === undefined ? current.name : current.title}</h1></div> :
                                <img src={`https://image.tmdb.org/t/p/w500/${current.poster_path}`} alt="" className="poster-img" />}
                        </div>
                        <p>
                            {starArr.map((star, index) => {
                                console.log(current.vote_average / 2);

                                if (current.vote_average / 2 - index >= 0.75) {
                                    return <StarFill />
                                } else if (current.vote_average / 2 - index <= 0.74 && current.vote_average / 2 - index >= 0.26) {
                                    return <StarHalf />
                                } else {
                                    return <Star />
                                }
                            })}
                            {`(${current.vote_count})`}
                        </p>
                    </div>
                })}
            </div>
        </>

    )
}

export default Genres