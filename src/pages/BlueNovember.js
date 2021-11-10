import React, { useState, useEffect } from 'react'
/** components */
import Loading from '../components/Loading'
import CarrouselBanner from '../components/CarrouselBanner'
/** theme */
import '../assets/css/themes/blue-november.scss'

import img1 from '../assets/images/blue-november/01.png'
import img2 from '../assets/images/blue-november/02.png'
import img3 from '../assets/images/blue-november/03.png'
import img4 from '../assets/images/blue-november/04.png'
import img5 from '../assets/images/blue-november/05.png'
import img6 from '../assets/images/blue-november/06.png'
import img7 from '../assets/images/blue-november/07.png'
import img8 from '../assets/images/blue-november/08.png'
import seta from '../assets/images/blue-november/setinha.png'

const BlueNovember = () => {
  const [state, setState] = useState({
    loading: false,
    arrayImg: [img1, img2, img3, img4, img5, img6, img7, img8],
    hasArrow: true,
  })

  useEffect(() => {
    setTimeout(() => setState({ ...state, hasArrow: false }), 6000)
  }, [state])

  if (state.loading) return <Loading text='Carregando...' />

  return (
    <div className='pink-october animated fadeIn'>
      {state.hasArrow && (
        <img className='seta animated pulse infinite' src={seta} alt='seta' />
      )}

      <CarrouselBanner images={state.arrayImg} />
    </div>
  )
}

export default BlueNovember
