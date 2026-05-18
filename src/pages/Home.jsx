import { SearchListContext } from "../contexts/SearchListContext";
import { useContext } from "react";

function Home() {
    const {testList} = useContext(SearchListContext);
  return (
    <>
        <div>Home</div>
        {testList.map(current => {
            return <div key={current.id}>
                 <p>{current.title}</p>
                 <p>{current.original_title}</p>
                 <p>{current.original_language}</p>
                 <p>{current.vote_average}</p>
                </div>
        })}
    </>
    
  );
}

export default Home