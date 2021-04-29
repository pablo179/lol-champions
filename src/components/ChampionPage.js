import React from 'react';
import { useParams } from 'react-router-dom';

const ChampionPage = ({champions}) => {
    const name = useParams().name;
    if (!champions || Object.keys(champions).length === 0) {
        return null;
    }
    const editName = champions[name].image.full.split('.')[0] + "_0.jpg"
    return (
        <div className='page' >
            <div className="page--imageContainer">
                <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+editName} alt={name} className= 'page--championImage' />
                <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+editName} alt={name} className='page--backgroundImage' />
            </div>
            <div className='dataContainer' >
                <div className="borders">
                    <div className="line"></div>
                <div className="page--titles">
                    <p>{champions[name].title}</p>
                    <p>{champions[name].name}</p>
                </div>
                <div className="line"></div>
                </div>
                <div className="page--squareData">
                    {champions[name].blurb}
                </div>
                <div className="page--squareData">
                    {champions[name].blurb}
                </div>
            </div>
        </div>
    )
}

export default ChampionPage;