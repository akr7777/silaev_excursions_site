import {ReactNode} from "react";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {v4 as uuidv4} from "uuid"
import clsx from "clsx";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./carusel.scss"

import {CaruselCustomButtonBack, CaruselCustomButtonForward} from "./arrow-buttons";
import {DotPagination} from "./DotPagination";
import {useMediaQuery} from "react-responsive";

type ReactCaruselPropsType = {
    slides: Array<ReactNode>,
    // titleNode: ReactNode,
    slidesCount: number,
    naturalSlideWidth?: number,
    naturalSlideHeight?: number,
    isButtonsOn?: boolean,
    isButtonsPaddingRight?: boolean
    dots?: boolean
    isButtonsOnSlides?: boolean
}

const ReactCarusel = (props: ReactCaruselPropsType) => {
    const caruselBtnsClass: string = clsx(
        "carusel_arrow_area",
        props.isButtonsPaddingRight && "carusel_buttons_padding_right"
    )

    const isLaptop = useMediaQuery({ query: '(min-width: 1134px)' })


    return (
      <CarouselProvider
        naturalSlideWidth={props.naturalSlideWidth || 1}
        naturalSlideHeight={props.naturalSlideHeight || 1.3}
        totalSlides={props.slides.length}
        visibleSlides={props.slidesCount}
      >
        <div className="carusel_wrapper">

            <div className="slider_container">
                {props.isButtonsOnSlides && isLaptop && (
                    <div className="carusel_buttons_on_slides">
                    <CaruselCustomButtonBack isHugeArrow isCaruselButtonsOnSlides/>
                    <CaruselCustomButtonForward isHugeArrow isCaruselButtonsOnSlides/>
                    </div>
                    )}
                <Slider
                >
                    {
                        props.slides.map((s:ReactNode, caruselIndex: number) => {
                            return (
                                <Slide
                                    index={caruselIndex}
                                    key={uuidv4()}
                                >
                                    {s}
                                </Slide>
                            )
                        })
                    }
                </Slider>
            </div>


            {props.isButtonsOn &&
                <div className={caruselBtnsClass}>
                    <CaruselCustomButtonBack />
                    <CaruselCustomButtonForward />
                </div>
            }

            {props.dots && (
              <DotPagination />
            )}

        </div>

      </CarouselProvider>
    );
}


export default ReactCarusel