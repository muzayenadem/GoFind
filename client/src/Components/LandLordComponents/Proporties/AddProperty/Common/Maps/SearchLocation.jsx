import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLandlordLocationOpen } from '../../../../../../controller/Buttons/locationForLandlord';

const SearchForLandlord = ({ onLocationSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [location,setLocation] = useState('')
 
  const dispatch = useDispatch()
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: query,
          format: 'json',
          addressdetails: 1,
        },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

console.log({location})

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onInput={handleSearch}
          className='px-6 py-2 border-[1px]  border-neutral-400 focus:outline-none '
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by country, state, or zip code"
        />
      </form>
      <div className='  bg-white shadow-md shadow-neutral-700'>
      <ul>
        {results.map((result) => (
          <li key={result.place_id}  onClick={()=>setLocation(result.display_name)  & setResults([]) & setQuery(result.display_name)} className='text-lg px-3 text-neutral-700 hover:bg-neutral-300 py-1 t-2'>
            {result.display_name}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default SearchForLandlord;