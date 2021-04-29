import React from 'react'
import { Link } from 'react-router-dom'

const ChampionCard = ({ name, image, propertyName}) => {
    const editName = image.full.split('.')[0] + "_0.jpg"
    return (
      <Link to={'/champion/'+propertyName} >
        <div className="champion"  >
          <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+editName} alt={name} className="championImage" />
          <div className="championName"> {name} </div>
        </div> 
      </Link>
    )
}

export default ChampionCard