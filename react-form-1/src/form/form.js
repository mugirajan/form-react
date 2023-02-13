import React from 'react'
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [name,setName] = useState('');
  const [description,setDes]=useState(' ')
  const [check, setCheck]=useState(' ')
  const [prio, setPrio]=useState(' ')
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h2>Task name</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      /><br/>
      <h2>Description</h2>
      <input 
        value={description}
        onChange={e => setDes(e.target.value)}
      /><br/>
      <input type="checkbox"
         onChange={e => setPrio(e.target.value)}
      >
            
      </input>priority<br/>
      <input type="checkbox"
         onChange={e => setCheck(e.target.value)}
      >

      </input>completed<br/>
      <button onClick={() => {
        setName('');
        artists.push({
          id: nextId++,
          name: name,
        });
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <p>{artist.name}</p>
            <p>{description}</p>
            <p>{prio.checked ? "yes":"no"}</p>
            <p>{check.checked ? "yes":"no"}</p>
          </li>
         
        ))}
      </ul>
      
    </>
    
  );
}
