import React from 'react'

const AnimeShowDisplay = ({ data }) => {
  return (
    <div className="animeShows">
        <h2>{data.attributes.slug}</h2>
        <p>{data.attributes.synopsis}</p>
        <p>{data.startDate}</p>
        <p>{data.endDate}</p>
        <img src={data.medium} />
    </div>
  )
}

export default AnimeShowDisplay
