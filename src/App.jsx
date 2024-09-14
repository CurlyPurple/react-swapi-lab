import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import * as swService from './services/sw-api.js'

import StarshipPage from './components/StarshipPage.jsx'

import './App.css'

function App() {
  const [starShips, setStarShips] = useState([])

  useEffect(() => {
    const fetchStarShips = async () => {
      const starShipData = await swService.index()
      setStarShips(starShipData.results)
    }
    fetchStarShips()
  },[])
  
  if (!starShips.length) return <h1>Loading StarShips</h1>

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
          <h1>Hello Starships!</h1>
          <div className='board'>
            {starShips.map(starShip => 
                <div className='card' key={starShip.url.slice(32)} >
                  <Link to={`/starships/${starShip.url.slice(32)}`} key={starShip.url.slice(32)}><h2>{starShip.name}</h2></Link>
                </div>
            )}
          </div>
          </>
          } >
        </Route>
        <Route path='/starships/:starshipId' element={<StarshipPage />} ></Route>
      </Routes>
    </>
  )
}

export default App
