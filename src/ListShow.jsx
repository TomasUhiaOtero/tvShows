import { useEffect, useState } from "react";
import Show from "./Show";

const ListShow = ({search}) => {

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
            list.map((item) => <Show item={item}/>)
            : 
            <p className="tex-center">No hay imagen disponible</p>
            }
            
        </div>
    )
}

export default ListShow;