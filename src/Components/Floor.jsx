import React from 'react'
import Studio from './Floor/Studio'
import Bedroom2 from './Floor/Bedroom2'
import Bedroom3 from './Floor/Bedroom3'
import Penthouse from './Floor/Penthouse'
import Double from './Floor/Double'

const Floor = () => {
  return (
    <>
      <Penthouse/>
      <Studio/>
      <Bedroom2/>
      <Bedroom3/>
      <Double/>
    </>
  )
}

export default Floor
