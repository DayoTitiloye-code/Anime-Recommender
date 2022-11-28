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
            <label htmlFor="Search here: "></label>
            <input type="text" id="anime" placeholder='Your category here' value={textInput} onChange={handleChange}/>
            <input type="submit" value="Search"/>
        </form>
        </>
    )
}

export default SearchForm
