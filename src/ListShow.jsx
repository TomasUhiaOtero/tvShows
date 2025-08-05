import { useEffect, useState } from "react";
import Show from "./Show";

const ListShow = ({search, addToFavs}) => {

    const [list, setList] = useState([])

    async function getDataApi() {
        const data = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        const response = await data.json()
        setList(response)
    }

    useEffect(() => {
        getDataApi()
    }, [search])

    return (
        <div className="text-center">
            {list.length > 0 ?
            list.map((item) => <Show item={item} addToFavs={addToFavs}/>)
            : 
            <p className="tex-center">No hay imagen disponible</p>
            }
            
        </div>
    )
}

export default ListShow;