import React from 'react'
import style from './country.module.css'
const Country = (props) => {
    const {name, flags, capital, population, area, region} = props.country

    const handleRemove = (name) =>{
        props.onRemoveCountry(name)
    }
  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common} className={style.flag}></img>
            <div className={style.middle}>
                <h3>Name: {name.common}</h3>
                <h4>Capital: {capital}</h4>
                <span>Population: {population}</span>
                <p>Area: {area}</p>
                <p>Region: {region}</p>
                <button  className={style.btn} onClick={()=>{handleRemove(name.common)}}>Remove Country</button>
            </div>
        </div>
    </article>
    )
}

export default Country