import React, { useState, useEffect } from 'react'
/** components */
import { Carousel } from 'react-responsive-carousel'
import Loading from '../components/Loading'
/** theme */
import '../assets/css/themes/blue-november.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../assets/images/pink-october/01.png'
import img2 from '../assets/images/pink-october/02.png'
import img3 from '../assets/images/pink-october/03.png'
import img4 from '../assets/images/pink-october/04.png'
import img5 from '../assets/images/pink-october/05.png'
import seta from '../assets/images/pink-october/seta.png'

const BlueNovember = () => {
  const [state, setState] = useState({
    loading: true,
    arrayImg: [
      img1,
      img2,
      img3,
      img4,
      img5
    ],
    hasArrow: true
  })

  useEffect(() => {

    setTimeout(() => setState({...state, hasArrow: false}), 6000)

  }, [])

  if (state.loading) return <Loading text='Carregando...' />

  return (
    <div className="pink-october animated fadeIn">
      {state.hasArrow && (
        <img className="seta animated pulse infinite" src={seta} alt="seta" />
      )}
      <Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay
        interval={10000}
        stopOnHover
        dynamicHeight
        emulateTouch
      >
        {state.arrayImg.map((item, index) => (
          <div key={index}>
            <img 
              className="img-slider-responsive"
              src={item}
              alt="outubro-rosa-imagens"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default BlueNovember
