import { useEffect, useState } from "react";
import { useContext } from "react";
import { SearchListContext, SearchListProvider } from "../contexts/SearchListContext";
const default_movie_search_url = 'https://api.themoviedb.org/3/search/movie';
const api_key = import.meta.env.VITE_tmdb_api_key;


function useFetch(searchSubmitValue) {
    let searchWithPlus = '';
    if (searchSubmitValue[0] !== undefined){
        searchWithPlus = searchSubmitValue[0].split(' ').join('+');
    }
    
    const [movieList, setMovieList] = useState([]);
    const { testList,
        setTestList } = useContext(SearchListContext);
    

    useEffect(() => {
        if (searchSubmitValue.length === 2) {
            fetch(`${default_movie_search_url}?api_key=${api_key}&query=${searchWithPlus}&language=${searchSubmitValue[1]}`)
                .then(resp => resp.json())
                .then(json => {
                    setMovieList(json.results);
                    setTestList(json.results);
                })
        } else {
            setMovieList([]);
        }


    }, [searchSubmitValue]);

    return { movieList };
}


export default useFetch