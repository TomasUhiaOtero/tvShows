import { useState } from "react";
import ListShow from "./ListShow";
import SearchShow from "./SearchShow";

const Home = () => {

    const [search, setSearch] = useState("man")

    return (
        <div className="text-center">
            <SearchShow search = {search} setSearch={setSearch}/>
            <ListShow search = {search}/>
        </div>
    )
}

export default Home;