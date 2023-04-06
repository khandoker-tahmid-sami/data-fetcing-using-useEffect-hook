import React, {useState, useEffect} from 'react'
import style from "./search.module.css"
const Search = ({onSearch}) => {
    const [search, setSearch] = useState("")

    const handleChange = (e) =>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        onSearch(search)
    },[search])
  return (
    <div className={style.input}>
        <input type="text" placeholder='search country' value={search} onChange={handleChange} className={style.input}/>
    </div>
  )
}

export default Search