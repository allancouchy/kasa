import { useEffect, useState } from 'react'
import Gallery from '../components/Gallery'
import Banner from '../components/Banner'
import image from '../assets/homepage-banner-image.png'

const Home = () => {
  const [housings, setHousings] = useState([])

  // simulate retrieving data from an API with JSON server
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetch('http://localhost:4000/housings')
        const data = await response.json()
        setHousings(data)
      } catch (error) {
        Error('une erreur est survenue', error)
      }
    }
    fetchRequest()
  }, [])

  return (
    <main>
      <Banner image={image} title='Chez vous, partout et ailleurs' />
      <Gallery housings={housings} />
    </main>
  )
}

export default Home
