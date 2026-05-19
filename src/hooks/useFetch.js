import { useEffect, useState } from "react";
import { useContext } from "react";
import { SearchListContext, SearchListProvider } from "../contexts/SearchListContext";
const default_search_url = 'https://api.themoviedb.org/3/search';
const api_key = import.meta.env.VITE_tmdb_api_key;


function useFetch(searchSubmitValue) {
    let searchWithPlus = '';
    if (searchSubmitValue[0] !== undefined){
        searchWithPlus = searchSubmitValue[0].split(' ').join('+');
    }

    const { movieList,
        setMovieList,
        seriesList,
        setSeriesList } = useContext(SearchListContext);
    

    useEffect(() => {
        if (searchSubmitValue.length === 2) {
            fetch(`${default_search_url}/movie?api_key=${api_key}&query=${searchWithPlus}&language=${searchSubmitValue[1]}`)
                .then(resp => resp.json())
                .then(json => {
                    setMovieList(json.results);
                })
            
            fetch(`${default_search_url}/tv?api_key=${api_key}&query=${searchWithPlus}&language=${searchSubmitValue[1]}`)
                .then(resp => resp.json())
                .then(json => {
                    setSeriesList(json.results);
                })
        } else {
            setMovieList([]);
            setSeriesList([]);
        }


    }, [searchSubmitValue]);

    return { movieList, seriesList };
}




export default useFetch