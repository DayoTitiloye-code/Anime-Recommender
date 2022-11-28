import React, {useState} from 'react';

const SearchForm = ({setSearchValue }) =>{
    const[textInput, setTextInput] = useState('')

    function handleChange(e){
        setTextInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        setSearchValue(textInput)
        console.log(textInput)
        setTextInput('')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="anime">Search here: </label>
            <input type="text" id="anime" placeholder='Your anime here' value={textInput} onChange={handleChange}/>
            <input type="submit" value="Search" id='submit'/>
        </form>
        </>
    )
}

export default SearchForm
