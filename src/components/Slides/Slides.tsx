import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
//import * as $ from '../img/'
//import logo from '../../img'

function importAll(r:any) {
  let images:any = {};
  r.keys().forEach((item:any, index:any) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images:any = importAll(require.context('../../img/', false, /\.(png|jpe?g|svg)$/));


const Slides = () => {
  return (
  <Container>
    <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY2.jpg']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100 gay"
        src={images['ROXY1.png']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY3.jpg']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY4.jpg']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY5.jpg']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY6.png']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY7.jpg']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY8.jpg']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY9.jpg']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY10.jpg']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100"
        src={images['ROXY11.jpg']}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img w-100 gay"
        src={images['ROXY12.png']}
        alt="First slide"
      />
    </Carousel.Item>
  </Carousel>
  </Container>
  )
}

export default Slides