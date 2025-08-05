import { useState } from "react";
import ListShow from "./ListShow";
import SearchShow from "./SearchShow";
import ListFavs from "./ListFavs";

const Home = () => {

    const [search, setSearch] = useState("man")
    const [favs, setFavs] = useState([])

    const addToFavs = (show) => {
        if(!favs.find(f => f.id === show.id)) {
            setFavs(favs => [...favs, show])
        }
    }

    return (
        <div className="text-center">
            <SearchShow search = {search} setSearch={setSearch}/>
            <ListShow search = {search} addToFavs={addToFavs}/>
            <ListFavs favs={favs}/>
        </div>
    )
}

export default Home;