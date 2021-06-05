import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Image1 from '../../Assets/Image1.png';
import Image2 from '../../Assets/Image2.png';
import Image3 from '../../Assets/Image3.png';

const items = [
  {
    src: Image1,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: Image2,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: Image3,
    altText: 'Slide 3',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;