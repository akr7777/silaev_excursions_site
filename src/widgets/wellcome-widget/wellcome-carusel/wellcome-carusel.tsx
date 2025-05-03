import React from 'react';
import Carousel from "react-multi-carousel";
import { v4 } from 'uuid';

import './wellcome-carusel.scss'

const responsive = {
  desctopBig: {
      breakpoint: {  min: 0, max: 4000 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
  },
}

interface Props {
  images: Array<string>
}

export const WellcomeCarousel: React.FC<Props> = (props: Props) => {

  return (
    <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={false} 
        renderButtonGroupOutside={true}
    >
        {props.images.map(image => {
          return (
            <div key={v4()} className='wellcome-carusel-img'>
              <img alt="" src={image} />
            </div>
          )
        })}
    </Carousel>
  );
};
