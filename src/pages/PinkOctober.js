import React, { useState } from 'react'
/** components */
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel'
import Loading from '../components/Loading'
/** theme */
import '../assets/css/themes/pink-october.scss'
import 'pure-react-carousel/dist/react-carousel.es.css'

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
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={180}
        currentSlide={0}
        step={1}
        dragStep={1}
        touchEnabled={true}
        totalSlides={state.arrayImg.length}
        lockOnWindowScroll={true}
      >
        <Slider>
          {state.arrayImg.map((item, index) => (
            <Slide index={index}>
              <Image key={index} className="img-slider-responsive" src={item} alt="outuro-rosa-imagens" />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  )
}

export default PinkOctober
