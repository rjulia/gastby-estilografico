import _ from 'lodash'
import React from 'react'
import Slider from 'react-slick'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ArrowLeft from '../../assets/icons/left-chevron.svg'
import ArrowRight from '../../assets/icons/right-chevron.svg'
import './carousel.scss'

function NextArrow(props) {
  const { onClick } = props
  return (
    <div
      className="arrow nextArrow"
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className="arrow prevArrow"
      onClick={onClick}
    >
      <ArrowLeft/>
    </div>
  )
}

function Carousel({ images }) {
  const settings = {
    dots: false,
    dotsClass: 'slick-dots slick-dots-slider',
    className: 'center',
    // Carousel: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 1,
    speed: 500,
    swipeToSlide: true,
    arrows: true,
    nextArrow: <NextArrow className="arrow right" />,
    prevArrow: <PrevArrow className="arrow right"/>,
  }

  return (
    <div className="box-carousel">
      <Slider {...settings}>
        {
          images && images.map((item, idx) => {
            const colorsSlider = _.split(item.bgc, ',')
            return (
              <div key={item.url + idx} >
                <div className="content-carousel" style={{ backgroundColor: `${colorsSlider[0]}` }}>
                  <div className="text-carousel" style={{ color: `${colorsSlider[1]}` }}>
                    <div className="text-carousel-content">{documentToReactComponents(item.textoEs.json)}</div>
                  </div>
                  <div className="image-carousel">
                    <img src={item.imagen.url} alt={item.texto || ''}/>
                  </div>
                </div>
              </div>

            )
          })
        }
      </Slider>
    </div>
  )
}

export default Carousel
