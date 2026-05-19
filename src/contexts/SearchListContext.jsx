import { createContext, useState } from "react";

const SearchListContext = createContext(null);

function SearchListProvider({ children }) {
    const [movieList, setMovieList] = useState([]);
    const [seriesList, setSeriesList] = useState([]);
    const value = {
        movieList,
        setMovieList,
        seriesList,
        setSeriesList
    }

    return <SearchListContext.Provider value={value}>
        {children}
    </SearchListContext.Provider>
}

export {SearchListContext, SearchListProvider}