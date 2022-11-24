import React, { useState, useEffect } from 'react'
import AnimeShowDisplay from '../AnimeShowDisplay'
// console.log(AnimeShowDisplay)
import axios from 'axios';

const AnimeShowList = ({ searchValue }) =>{

    const[animeData, setAnimeData] = useState([])

    useEffect(() =>{
        async function getAnimeData (){
            const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[categories]=${ searchValue}`)
            console.log(response.data.data)
            // JSON.parse(response.data)
            setAnimeData(response.data.data)
        }

        getAnimeData();
    
    }, [searchValue])

    // function displayAnime(){
    //     return Object.values(animeData).forEach((anime, index) => {<AnimeShowDisplay key={index} data={anime.anime}/>
    
    //     console.log(anime)})
    // }
    const animeArray = animeData.map((a, index) => { return <AnimeShowDisplay key={index} data={a}/>})
    console.log(animeArray)
    return(
        <div id='anime-shows'>
            {animeArray}
        </div>
    )
}

export default AnimeShowList
