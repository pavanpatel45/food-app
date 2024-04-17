import React, { useState, useEffect } from 'react'
import {NavLink ,Link} from 'react-router-dom';
import file from '../Images/file.png';
import search from '../Images/search.png';
export default function Navbar() {
  const [searchText, setSearchText] = useState('');
  const [index, setIndex] = useState(0);
  const [isWritten, setIsWritten] = useState(false);
  const data = ['Search for delicious food...', 'Try Searching Sandwitch...'];
  const [searchTextToType, setSearchTextToType] = useState(data[0]);
  const [index2, setIndex2] = useState(0);
  useEffect(() =>{
    if(index2 < data.length){
      setSearchTextToType(data[index2]);
    }
    else{
      setIndex(-1);
    }
  },[index2])
  const [delay,setDelay ]= useState(100);
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDelay(100);
      if (index < searchTextToType.length && index >= 0) {
        if (isWritten) {
          setSearchText(prevSearchText => prevSearchText.slice(0, -1));
          setIndex(prevIndex => prevIndex - 1);
        }
        else {
          setSearchText(prevSearchText => prevSearchText + searchTextToType.charAt(index));
          setIndex(prevIndex => prevIndex + 1);
        }
      } else {
        clearInterval(typingInterval);
        if (index == -1) {
          setIsWritten(false);
          setIndex(0);
          setIndex2(prevIndex => (prevIndex +1));
        }
        else {
          setIsWritten(true);
          setIndex(searchTextToType.length - 1);
         setDelay(1000);
        }

      }
    }, delay);

    return () => {
      clearInterval(typingInterval);

    };

  }, [index, searchTextToType]);
  return (
    <div className='flex flex-row justify-between m-2 px-4 py-2 border-2'>
      <div>Logo</div>
      <div className='flex gap-4 items-center' >
       <Link to="/search"><div className='w-64 h-6 flex gap-4 items-center px-1' style={{ border: "1px solid black" }}>
          <div className='h-4 w-4 '><img src={search} /></div>
          <div>{searchText}</div>
        </div></Link> 
        <NavLink to="/"><div>Home</div></NavLink>
        <NavLink to="/bookmark"><div>Bookmark</div></NavLink>
        <NavLink to="/About"><div>About Us</div></NavLink>
        <NavLink to="/Contact"><div>Contact Us</div></NavLink>
      </div>
    </div>
  )
}
