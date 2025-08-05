const AddFav = ({addToFavs, item}) => {
    return (
        <div>
            <button className="btn btn-primary mt-2 mb-5" 
            onClick={() => addToFavs(item)}>Añadir Fav</button>
        </div>
    )
}

export default AddFav;