import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Solutions Producer</title>
        <meta property="og:title" content="Principal Solutions Producer" />
      </Helmet>
    </div>
  )
}

export default Home
