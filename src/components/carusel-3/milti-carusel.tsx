import { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { v4 } from "uuid";
import { ButtonGroup } from "./button-group";

type PropsType = {
    slides: Array<ReactNode>
    
}
const responsive = {
    desctopBig: {
        breakpoint: {  min: 1350, max: 4000 },
        items: 4.2,
        slidesToSlide: 3 // optional, default to 1.
    },
    desktop: {
      breakpoint: {  min: 1024, max: 1350 },
      items: 3.2,
      slidesToSlide: 2 // optional, default to 1.
    },
    tabletBig: {
      breakpoint: { min: 880, max: 1024 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    tabletSmall: {
        breakpoint: { min: 600, max: 880 },
        items: 2.1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { min: 370, max: 600  },
      items: 1.1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobileSmall: {
        breakpoint: { min: 0, max: 370  },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
  };

export const ReactMultiCarusel = (props: PropsType) => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={false} 
            renderButtonGroupOutside={true} 
            customButtonGroup={<ButtonGroup next={() => {}} previous={() => {}} goToSlide={() => {}} />}
        >
            {/* <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div> */}
            {props.slides.map(s => {
                return <div key={v4()}>{s}</div>
            })}
        </Carousel>
    )
}

