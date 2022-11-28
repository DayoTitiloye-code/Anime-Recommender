import React from 'react'

const AnimeShowDisplay = ({ data }) => {
    console.log(data)
    console.log('Hello')
    return (
    <div id="animeShows">
        <h2>{data.attributes.canonicalTitle}</h2>
        <em>{data.attributes.ageRatingGuide}</em>
        <p>Anime Status: {data.attributes.status}</p>
        <p>{data.attributes.description}</p>
        <img src={data.attributes.posterImage.medium} />
    </div>
  )
}

export default AnimeShowDisplay
