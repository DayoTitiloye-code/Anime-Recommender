import React from 'react';
import { Routes, Route} from 'react-router-dom'

import './App.css'
import AnimeSearch from './pages/AnimeSearch'

const App = () =>{
  return (
    // <>
    // <Header/>
    // <SearchForm setSearchValue={setSearchValue}/>
    // <AnimeShowList searchValue={searchValue}/>
    // </>
    <Routes>
      <Route path='/' element={<AnimeSearch/>}></Route>
    </Routes>
  )
}

export default App
