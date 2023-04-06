import React from 'react'
import Country from './country'
import {v4 as uuidv4} from "uuid"

import style from "./countries.module.css"
const Countries = ({countries, onRemoveCountry}) => {
  return (
    <div className={style.container}>
        {countries.map(country=>{
            const countryNew = {country, id: uuidv4()}

            return <Country {...countryNew} key={countryNew.id} onRemoveCountry={onRemoveCountry} />
        })}
    </div>
  )
}

export default Countries