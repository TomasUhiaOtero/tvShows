import AddFav from "./AddFav";

const Show = ({ item }) => {
    return (
        <div className="text-center">
            <section>
                <h2>{item.show.name}</h2>
                {item.show.image ?
                    <img src={item.show.image.medium} alt="" />
                    :
                    <img src="https://imgs.search.brave.com/-vjXuv9JQkC3Dq-MZpraCOg0lznsozEeUqod0Ys1-w4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MzAyMjA2L2VzL2Zv/dG8vZXJyb3ItNDA0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1iUVptU2dIY2tJ/THVxMVdsYlFTZDZX/bk9tZlEwSXdobTJT/M01tNTlFdGowPQ" alt="" />
                }
                <AddFav />
            </section>
        </div>
    )
}

export default Show;