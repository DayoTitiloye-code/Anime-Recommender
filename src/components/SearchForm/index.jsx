import React, {useState} from 'react';

const SearchForm = () =>{
    const[textInput, setTextInput] = useState('')

    function handleChange(e){
        setTextInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(textInput)
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