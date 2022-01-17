import React from 'react'
import './styles/App.css'
import Welcome from './components/Welcome'

export default function App() {
  return (
    <div className='App'>
      <div className='grid h-screen place-content-between justify-items-center'>
        <div className='flex w-screen place-content-between'>
          <Welcome />
          <Welcome />
        </div>
        <Welcome />
        <div className='flex w-screen place-content-between'>
          <Welcome />
          <Welcome />
        </div>
      </div>
    </div>
  )
}
