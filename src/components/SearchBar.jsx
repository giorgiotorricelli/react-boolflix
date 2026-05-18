import { useState } from "react";
import useFetch from "../hooks/useFetch";
import countries from "../data/countries";

function SearchBar() {
    const [searchInputValue, setSearchInputValue] = useState('');
    const [languageSelected, setLanguageSelected] = useState('it-IT');
    const [searchSubmitValue, setSearchSubmitValue] = useState([]);
    const { movieList } = useFetch(searchSubmitValue);

    function changeHandler(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if (name === "search-by-name") {
            setSearchInputValue(value);
        } else if (name === "country") {
            setLanguageSelected(value)
        }
        
    }

    function submitHandler(event) {
        event.preventDefault();
        const submitArr = [searchInputValue, languageSelected];
        setSearchSubmitValue(submitArr);
        setSearchInputValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="search-by-name" id="search-by-name" value={searchInputValue} onChange={changeHandler} />
            <button type="submit" className="btn btn-primary">Search</button>
            <select name="country" id="country" onChange={changeHandler}>
                {countries.map(country => {
                    return <option value={`${country.language_code}-${country.country_code}`} key={country.country}>{country.country}</option>
                })}
            </select>
        </form>
    );
}

export default SearchBar