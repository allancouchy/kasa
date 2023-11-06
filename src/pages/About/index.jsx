import React from 'react'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'

import about from '../../data/about.json'
import image from '../../assets/about-page-banner-image.png'

const About = () => (
  <main>
    <Banner image={image} />
    {about.map((content, index) => (
      <Dropdown
        key={index}
        open={false}
        title={content.title}
        content={content.text}
        style={{ width: '71%', margin: '15px 0' }}
      />
    ))}
  </main>
)

export default About
