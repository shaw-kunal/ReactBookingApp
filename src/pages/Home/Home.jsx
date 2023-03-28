import React from 'react'
import "./home.css"
import { Feature } from '../../component/feature/Feature'
import { Header } from '../../component/header/Header'
import Navbar from '../../component/navbar/Navbar'
import PropertyList from '../../component/propertyList/PropertyList'
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainerz">
        <Feature />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes Guest love</h1>
      </div>


    </div>
  )
}
