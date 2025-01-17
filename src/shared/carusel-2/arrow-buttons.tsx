import { ButtonBack, ButtonNext, CarouselContext } from "pure-react-carousel";
import { useContext, useEffect, useState } from "react";
import { CaruselArrowBack, CaruselArrowForward } from "./carusel-arrow";

import "./carusel.scss"
import "pure-react-carousel/dist/react-carousel.es.css";

type Props = {
    isHugeArrow?: boolean
    isCaruselButtonsOnSlides?: boolean
    isHover?: boolean
}

export const CaruselCustomButtonBack = ({isHugeArrow, isCaruselButtonsOnSlides}: Props) => {
  const carouselContext = useContext(CarouselContext);
    const [isHover, setIsHover] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
  useEffect(() => {
      function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
      }
      carouselContext.subscribe(onChange);
      return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);
  return (
    <ButtonBack
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      // className={currentSlide === 0 ? 'disabled' : ''}
      className={isCaruselButtonsOnSlides ? "carusel_arrow_div_on_slides" : "carusel_arrow_div"}
      disabled={currentSlide === 0}
        // Отключаем кнопку, если это первый слайд
    >
      <CaruselArrowBack isHover={isHover && currentSlide !== 0} hugeArrow={isHugeArrow} isDisabled={currentSlide === 0}/>
    </ButtonBack>
  );
};

export const CaruselCustomButtonForward = ({isHugeArrow, isCaruselButtonsOnSlides}: Props) => {
  const carouselContext = useContext(CarouselContext);
    const [isHover, setIsHover] = useState(false);

    const totalSlides = carouselContext.state.totalSlides
  const visibleSlides = carouselContext.state.visibleSlides
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)
  
  const isLastVisible = currentSlide >= totalSlides - visibleSlides;
  
  useEffect(() => {
      function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
      }
      carouselContext.subscribe(onChange);
      return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  return (
    <ButtonNext
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      className={isCaruselButtonsOnSlides ? "carusel_arrow_div_on_slides" : "carusel_arrow_div"}
      disabled={isLastVisible} // Отключаем кнопку, если это последний слайд
    >
      <CaruselArrowForward isHover={isHover && !isLastVisible} hugeArrow={isHugeArrow} isDisabled={isLastVisible}/>
    </ButtonNext>
  );
}; 
