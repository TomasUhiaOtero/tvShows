import { useEffect, useState } from "react";
import Show from "./Show";

const ListShow = ({ search, addToFavs }) => {
  const [list, setList] = useState([]);

  async function getDataApi() {
    const data = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
    const response = await data.json();
    setList(response);
  }

  useEffect(() => {
    getDataApi();
  }, [search]);

  return (
    <div className="text-center mt-4">
      <h2 className="mb-4">Resultados</h2>
      {list.length > 0 ? (
        <div className="d-flex overflow-auto gap-3 p-3">
          {list.map((item) => (
            <div key={item.show.id} style={{ minWidth: "200px" }}>
              <Show item={item} addToFavs={addToFavs} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay imagen disponible</p>
      )}
    </div>
  );
};

export default ListShow;
