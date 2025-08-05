import { useEffect, useState } from "react";
import Show from "./Show";

const ListFavs = ({ favs }) => {

    return (
        <div className="text-center mt-3">
            <h2 className="mb-5">Favoritos</h2>
            {favs.length > 0 ?
                favs.map((item) => 
                <><h3>{item.name}</h3>
                {item.image ?
                    <img key={item.name} className="mb-5" src={item.image.medium} alt="" />
                    :
                    <img key={item.name} className="mb-5" src="https://imgs.search.brave.com/-vjXuv9JQkC3Dq-MZpraCOg0lznsozEeUqod0Ys1-w4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MzAyMjA2L2VzL2Zv/dG8vZXJyb3ItNDA0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1iUVptU2dIY2tJ/THVxMVdsYlFTZDZX/bk9tZlEwSXdobTJT/M01tNTlFdGowPQ" alt="" />
                }
                </>

                )
                :
                <p className="tex-center">No hay imagen disponible</p>
            }

        </div>
    )
}

export default ListFavs;