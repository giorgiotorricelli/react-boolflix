import { createContext, useState } from "react";

const SearchListContext = createContext(null);

function SearchListProvider({ children }) {
    const [testList, setTestList] = useState([])
    const value = {
        testList,
        setTestList
    }

    return <SearchListContext.Provider value={value}>
        {children}
    </SearchListContext.Provider>
}

export {SearchListContext, SearchListProvider}