import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"

import * as swService from '../services/sw-api.js'

const StarshipPage = () => {
  const [starShipDetails, setStarShipDetails] = useState({})
  const { starshipId } = useParams()
  

  useEffect (() => {
    const fetchStarShipDetails = async () => {
      const starShipDetailData = await swService.show(starshipId)
      setStarShipDetails(starShipDetailData)
    }
    fetchStarShipDetails()
  }, [starshipId])

  if (!starShipDetails) return <h1>Loading StarShip</h1>

  return (  
    <>
      <h1>StarShip Details</h1>
      <section className='cardShow'>
        <div>
          <h3> Name: {starShipDetails.name}</h3>
        </div>
        <div>
          <h3>Model: {starShipDetails.model}</h3>
        </div>
        <div>
          <Link to={'/'}><h4 className="return">Return</h4></Link>
        </div>
      </section>
    </>
  )
}

export default StarshipPage;