const SearchShow = ({search, setSearch}) => {

    const handleInput = (ev) => {
        setSearch(ev.target.value)
    }

    return (
        <div className="text-center">
            <form action="">
                <input className="form-control w-25 mx-auto" type="text" placeholder="Introduce Serie" onChange={handleInput} value={search}/>
                
            </form>
        </div>
    )
}

export default SearchShow;