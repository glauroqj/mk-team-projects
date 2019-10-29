import React from 'react'
import PropTypes from 'prop-types'

/** components */
import { Carousel } from 'react-responsive-carousel'
/** style */
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarrouselBanner = ({ images }) => {

  return(
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
      {images.map((item, index) => (
        <div key={index}>
          <img 
            className="img-slider-responsive"
            src={item}
            alt="banner-images"
          />
        </div>
      ))}
    </Carousel>
  )
}

CarrouselBanner.propTypes = {
  images: PropTypes.array
}

export default CarrouselBanner