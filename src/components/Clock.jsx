import { useState, useEffect } from 'react'
import { FiWatch, FiGlobe } from 'react-icons/fi'
import Tooltip from './Tooltip'

function Clock({ handleSwitch }) {
  const [date, setDate] = useState(new Date())

  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  const currentTime = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <div className='group flex items-center'>
      <Tooltip
        content="after:content-['stopwatch']"
        position='left'
        method={() => handleSwitch('Stopwatch')}>
        <FiWatch size='1.5em' />
      </Tooltip>

      <time
        className='font-mukta font-bold text-[12rem] select-none px-4'
        dateTime={currentTime}>
        {currentTime}
      </time>

      <Tooltip
        content="after:content-['world_clock']"
        position='right'
        method={() => handleSwitch('Timezones')}>
        <FiGlobe size='1.5em' />
      </Tooltip>
    </div>
  )
}

export default Clock
