import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import {Gents,Ladies} from '../data'
import WomanCollection from '../components/WomanCollection'
const Mainpage = () => {
  const[gentsFashion,setGentsFashion] = useState(Gents)
  const[ladiesfashion,setLadiesFashion]=useState(Ladies)
   console.log(Gents)
  return (

    
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFashion={gentsFashion}/>
      <WomanCollection ladiesFashion= {ladiesfashion}/>
      <Footer/>
    </div>
  )
}

export default Mainpage