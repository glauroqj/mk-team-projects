import React, { useState } from 'react'
/** components */
import { Carousel } from 'react-responsive-carousel'
import Loading from '../components/Loading'
/** theme */
import '../assets/css/themes/pink-october.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import img1 from '../assets/images/pink-october/01.png'
import img2 from '../assets/images/pink-october/02.png'
import img3 from '../assets/images/pink-october/03.png'
import img4 from '../assets/images/pink-october/04.png'
import img5 from '../assets/images/pink-october/05.png'

const PinkOctober = () => {
  const [state, setState] = useState({
    loading: false,
    arrayImg: [
      img1,
      img2,
      img3,
      img4,
      img5
    ]
  })

  if (state.loading) return <Loading text='Carregando...' />

  return (
    <div className="pink-october animated fadeIn">
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

export default PinkOctober
