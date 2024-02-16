import React, {useState, useEffect} from 'react';
const Search=(props)=>{
const [searchText, setSearchText]=useState("")
const {onSearch}=props;
  const handleChange=(e)=>{
  setSearchText(e.target.value);
  };
  useEffect(()=>{
    onSearch(searchText)
});
  return <div>
  <input style={{height:"3rem", fontSize:"2rem"}} type="text" placeholder="search country" name="name" value={searchText} onChange={handleChange}/>
  </div>
}
export default Search;