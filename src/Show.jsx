import AddFav from "./AddFav";

const Show = ({ item, addToFavs }) => {
    return (
        <div className="card border-0 shadow-sm p-2 text-center" style={{ backgroundColor: "#fff" }}>
            <h5 className="card-title">{item.show.name}</h5>
            {item.show.image ? (
                <img className="img-fluid border-0" src={item.show.image.medium} alt={item.show.name} />
            ) : (
                <img
                    className="mb-5 img-fluid"
                    src="https://imgs.search.brave.com/-vjXuv9JQkC3Dq-MZpraCOg0lznsozEeUqod0Ys1-w4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MzAyMjA2L2VzL2Zv/dG8vZXJyb3ItNDA0/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1iUVptU2dIY2tJ/THVxMVdsYlFTZDZX/bk9tZlEwSXdobTJT/M01tNTlFdGowPQ"
                    alt="No disponible"
                />
            )}
            <AddFav addToFavs={addToFavs} item={item.show} />
        </div>
    );
};

export default Show;
