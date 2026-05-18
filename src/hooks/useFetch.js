import { useEffect, useState } from "react";
const default_movie_search_url = 'https://api.themoviedb.org/3/search/movie';
const api_key = import.meta.env.VITE_tmdb_api_key;


function useFetch(searchStr) {
    const searchWithPlus = searchStr.split(' ').join('+');
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        if (searchStr !== '') {
            fetch(`${default_movie_search_url}?api_key=${api_key}&query=${searchWithPlus}&language=it-IT`)
                .then(resp => resp.json())
                .then(json => setMovieList(json.results))
        } else {
            setMovieList([]);
        }


    }, [searchStr]);

    return { movieList };
}


export default useFetch