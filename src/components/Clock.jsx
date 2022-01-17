import useClock from '../hooks/useClock'

// const [clocks, setClocks] = useState([])

// // restore stored clocks
// useEffect(() => {
//   const storedClocks = JSON.parse(localStorage.getItem('clocks'))
//   setClocks(storedClocks)
// }, [])

// // update clocks in localStorage
// useEffect(() => {
//   localStorage.setItem('clocks', JSON.stringify(clocks))
// }, [clocks])

// const addClock = (city) => {
//   setClocks([city, ...clocks])
// }

// const removeClock = (id) => {
//   setClocks(
//     clocks.filter((city) => city.fields.geonameid !== parseInt(id, 10))
//   )
// }

function Clock({ utcOffset }) {
  const clock = useClock(utcOffset)

  const currentTime = clock.toLocaleTimeString('en-GB')

  return (
    <time className='font-mukta text-white text-[12rem]' dateTime={currentTime}>
      {currentTime}
    </time>
  )
}

export default Clock
