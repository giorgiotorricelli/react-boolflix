import { useState } from "react";
import useFetch from "../hooks/useFetch";

function SearchBar() {
    const [searchInputValue, setSearchInputValue] = useState('');
    const [searchSubmitValue, setSearchSubmitValue] = useState('');
    const {movieList} = useFetch(searchSubmitValue);
    function changeHandler(event){
        const target = event.target;
        const value = target.value;
        setSearchInputValue(value);
    }

    function submitHandler(event){
        event.preventDefault();
        setSearchSubmitValue(searchInputValue);
        setSearchInputValue('');
    }

    return (
        <form onSubmit={submitHandler}> 
            <input type="text" name="search-by-name" id="search-by-name" value={searchInputValue} onChange={changeHandler}/>
            <button type="submit" className="btn btn-primary">Search</button>
            <pre>{JSON.stringify(movieList)}</pre>
        </form>
    );
}

export default SearchBar