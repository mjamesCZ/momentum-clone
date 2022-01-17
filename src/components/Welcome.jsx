import React, { useState } from 'react'
import { useGreeting } from '../utils/useGreeting'

function Welcome() {
  const [user, setUser] = useState('Jakub')
  const greeting = useGreeting(new Date())

  return (
    <h1>
      {greeting}, {user}.
    </h1>
  )
}

export default Welcome
