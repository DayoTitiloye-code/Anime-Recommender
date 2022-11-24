import React, { useState, useEffect } from 'react'
import AnimeShowDisplay from '../AnimeShowDisplay'
import axios from 'axios';

const AnimeShowList = ({ searchValue }) =>{

    const[animeData, setAnimeData] = useState({})

    useEffect(() =>{
        async function getAnimeData (){
            const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${ searchValue }`)
            console.log(response.data)
            // JSON.parse(response.data)
            setAnimeData(response.data)
        }

        getAnimeData();
    }, [searchValue])

    function displayAnime(){
        return Object.values(animeData).forEach((anime, index) => <AnimeShowDisplay key={index} data={anime.anime}/>)
    }

    return(
        <div id='anime-shows'>
            {displayAnime()}
        </div>
    )
}

export default AnimeShowList
