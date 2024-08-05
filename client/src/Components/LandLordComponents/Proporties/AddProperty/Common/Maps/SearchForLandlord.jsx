import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLocationName } from '../../../../../../controller/AddProperty/propertyType';

const SearchLocation = ({ onLocationSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);


  const dispatch = useDispatch()
  const propertyLocation = useSelector(state => state.propertyType.location)
  console.log(propertyLocation)
  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(setLocationName(query))
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: query,
          format: 'json',
          addressdetails: 1,
        },
        withCredentials:false
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className=' sticky top-7 lef-4 z-10 '>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onInput={handleSearch}
          className='px-6 py-2 border-[1px]  border-neutral-800 focus:outline-none '
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by country, state, or zip code"
        />
        <button className='w-32 text-center py-2 rounded-md text-white font-bold bg-fuchsia-700' type="submit">Search</button>
      </form>
      <div className='py-5 px-3 bg-white shadow-md shadow-neutral-700'>
      <ul>
        {results.map((result) => (
          <li key={result.place_id} className='text-lg text-neutral-700 mt-2' onClick={()=>onLocationSelect(result) & dispatch(setLocationName(result.display_name))  & setResults([]) & setQuery(result.display_name)} >
            {result.display_name}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default SearchLocation