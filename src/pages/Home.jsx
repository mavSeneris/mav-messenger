import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

export default function Home() {
  
  return (
    <div className='home'>
      <div className='home-container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}
