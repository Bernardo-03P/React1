import React from 'react'
import Banner from '../imagens/banner.jpg'

function Delivery() {
  return (
    <div className='delivery '>
      <img src={Banner} alt='Delivery'/>
      <div className='textodelivery'><h1>Atendimento Delivery</h1>
      <h2>0800 555 3232</h2></div>
    </div>
  )
}

export default Delivery
