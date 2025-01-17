import prevImg from "./icons8-chevron-30-left 1.svg"
import nextImg from "./icons8-chevron-30-right 2.svg"

type PropsType = {
    next: () => void
    previous: () => void
    goToSlide: () => void
}
export const ButtonGroup = ({ next, previous, goToSlide, ...rest } : PropsType) => {
    // const { carouselState: { currentSlide } } = rest;

    return (
      <div className="carousel-button-group"> 
      {/* // remember to give it position:absolute */}
        {/* <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} /> */}

        {/* <ButtonOne onClick={() => previous()} />
        <ButtonTwo onClick={() => next()} /> */}
        <img alt="" src={prevImg} onClick={() => previous() }/>
        <img alt="" src={nextImg} onClick={() => next() }/>

        {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
      </div>
    );
  };