import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import List from '../components/List'
import Host from '../components/Host'
import Rating from '../components/Rating'
import Dropdown from '../components/Dropdown'
import { HousingDropdowns, HousingTop, HousingTopLeft, HousingTopRight } from '../styled-components/Housing'

const Housing = () => {
  // retrieve id in url params
  const { id } = useParams()
  const [housing, setHousing] = useState([])
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetch('http://localhost:4000/housings')
        const data = await response.json()
        const value = data.find(h => h.id === id)

        // page not loaded when housing not found
        if (value === undefined) {
          setIsLoaded(iL => !iL)
        }

        setHousing([value])
      } catch (error) {
        Error('une error est survenue', error)
      }
    }
    fetchRequest()
  }, [id])

  return isLoaded ? (
    housing.map(housing => (
      <main key={housing.id}>
        <Carousel pictures={housing.pictures} />
        <HousingTop>
          <HousingTopLeft>
            <h1>{housing.title}</h1>
            <p>{housing.location}</p>
            <List items={housing.tags} />
          </HousingTopLeft>
          <HousingTopRight>
            <Host name={housing.host.name} picture={housing.host.picture} />
            <Rating score={housing.rating} />
          </HousingTopRight>
        </HousingTop>
        <HousingDropdowns>
          <Dropdown
            open={true}
            title={'Description'}
            content={<p>{housing.description}</p>}
            style={{ width: '49%' }}
          />
          <Dropdown
            open={true}
            title={'Equipements'}
            content={<List items={housing.equipments} />}
            style={{ width: '49%' }}
          />
        </HousingDropdowns>
      </main>
    ))
  ) : (
    <>
      {/* housing is not loaded redirect to error */}
      <Navigate to={'/*'} />
    </>
  )
}

export default Housing
