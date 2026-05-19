import { useEffect, useState } from "react";
const default_search_url = 'https://api.themoviedb.org/3/discover/';
const api_key = import.meta.env.VITE_tmdb_api_key;

function useFetchPerGenre(category, genreId){
    const [searchByGenre, setSearchByGenre] = useState([]);

    useEffect(()=> {
        if (category !== '' && genreId !== ''){
            fetch(`${default_search_url}${category}?api_key=${api_key}&with_genres=${genreId}`)
        .then(resp => resp.json())
        .then(json => setSearchByGenre(json.results))
        } else {
            setSearchByGenre([]);
        }
        

    }, [category, genreId]);

    return {searchByGenre};
}

export default useFetchPerGenre