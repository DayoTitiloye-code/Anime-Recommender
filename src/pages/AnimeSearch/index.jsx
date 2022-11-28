import React, { useState }  from 'react'
import {Header, SearchForm, AnimeShowList } from '../../components'

const AnimeSearch = () =>{
    const[searchValue, setSearchValue] = useState('')
    return(
        <>
        <Header/>
    <SearchForm setSearchValue={setSearchValue}/>
    <AnimeShowList searchValue={searchValue}/>
        </>
    )  
}

export default AnimeSearch;
