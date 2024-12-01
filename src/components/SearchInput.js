import React, { useState, useEffect } from 'react'

const SearchInput = ({search, setSearch}) => {
    const [inputValue, setInputValue] = useState(search);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setSearch(inputValue);
        },500)
        return () => clearTimeout(timer);
    },[inputValue,setSearch]);
    const handleChage = (e) =>{
        setInputValue(e.target.value);
    }
  return (
    <div>
        <input
            type='text'
            placeholder='Type Something'
            value={inputValue}
            onChange={handleChage}
        />
    </div>
  )
}

export default SearchInput