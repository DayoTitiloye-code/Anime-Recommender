import React, { useState } from 'react';
import './App.css'
import {Header, SearchForm, AnimeShowList } from './components'

const App = () =>{

  const[searchValue, setSearchValue] = useState('')

  return (
    <>
    <Header/>
    <SearchForm setSearchValue={setSearchValue}/>
    <AnimeShowList searchValue={searchValue}/>
    </>
  )
}

export default App
