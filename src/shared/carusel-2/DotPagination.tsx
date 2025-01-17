import {CarouselContext, DotGroup} from "pure-react-carousel";

import "./carusel.scss"
import {useContext, useEffect, useState} from "react";

export const DotPagination = () => {
    const carouselContext = useContext(CarouselContext);
    const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide);
    const visibleSlides = carouselContext.state.visibleSlides
    const totalSlides = carouselContext.state.totalSlides

    useEffect(() => {
        function onChange() {
            setCurrentSlide(carouselContext.state.currentSlide);
        }
        carouselContext.subscribe(onChange);
        return () => carouselContext.unsubscribe(onChange);
    }, [carouselContext]);

    return (
        <div>
            <div className="carusel_dots">
                <DotGroup currentSlide={Math.ceil(currentSlide)} showAsSelectedForCurrentSlideOnly totalSlides={Math.ceil(totalSlides - visibleSlides) + 1} />
            </div>
        </div>
    )
}

