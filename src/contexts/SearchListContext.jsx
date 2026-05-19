import { createContext, useState, useEffect } from "react";

const SearchListContext = createContext(null);

function SearchListProvider({ children }) {
    const [movieList, setMovieList] = useState([]);
    const [seriesList, setSeriesList] = useState([]);
    const [movieGenreList, setMovieGenreList] = useState([]);
    const [seriesGenreList, setSeriesGenreList] = useState([]);

    useEffect(() => { //faccio una fetch al mount per prendermi tutti i generi

        fetch(`https://api.themoviedb.org/3/genre/movie/list?&api_key=fb6446cb5695fde500f3c849ab416b7c`)
            .then(resp => resp.json())
            .then(json => {
                setMovieGenreList(json.genres);
            })
        fetch(`https://api.themoviedb.org/3/genre/tv/list?&api_key=fb6446cb5695fde500f3c849ab416b7c`)
            .then(resp => resp.json())
            .then(json => {
                setSeriesGenreList(json.genres);
            })

    }, []);

    const value = {
        movieList,
        setMovieList,
        seriesList,
        setSeriesList,
        movieGenreList,
        seriesGenreList
    }

    return <SearchListContext.Provider value={value}>
        {children}
    </SearchListContext.Provider>
}

export { SearchListContext, SearchListProvider }