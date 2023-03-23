import React, { useState } from 'react'
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from '../firebase'

export default function Search() {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState("")
  const [err, setErr] = useState(false)


  async function handleSearch() {
    const q = query(collection(
      db, "users"),
      where("displayName", "==", username))
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setErr(false)
    }
  }




  function handleKey(e) {
    e.code === "Enter" && handleSearch();
  }




  return (
    <div className='search'>
      <div className='search-form'>
        <input
          type='text'
          placeholder='Find user...'
          onKeyDown={handleKey}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      {err && <div className='search-error'>User not found! :'(</div>}
      {user && <div className='user-chat'>
        <img src={user.photoURL} />
        <span className='user-chat-info'>{user.displayName}</span>
      </div>}
    </div>
  )
}
