import { WellcomeCarousel } from "./wellcome-carusel/wellcome-carusel"

import img1 from "../../assets/images/wellcome-slides/pexels-67117688-8285167.jpg"
import img2 from "../../assets/images/wellcome-slides/pexels-67117688-8299382.jpg"
import img3 from "../../assets/images/wellcome-slides/pexels-agapy-92412.jpg"
import img4 from "../../assets/images/wellcome-slides/pexels-arthur-shuraev-67501761-9016133.jpg"
import img5 from "../../assets/images/wellcome-slides/pexels-mike-468229-1181805.jpg"
import img6 from "../../assets/images/wellcome-slides/pexels-platon-matakaev-162269967-11422436.jpg"
import img7 from "../../assets/images/wellcome-slides/pexels-sergey-sh-1439367-2775742.jpg"

import "./wellcome.scss"

// const images: Array<string> = [
//     "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-67117688-8285167.jpg",
//     "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-67117688-8299382.jpg",
//     "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-agapy-92412.jpg",
//     "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-arthur-shuraev-67501761-9016133.jpg",
//     "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-mike-468229-1181805.jpg",
//     "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-platon-matakaev-162269967-11422436.jpg",
//     "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-sergey-sh-1439367-2775742.jpg"
// ]
const images: Array<string> = [img1, img2, img3, img4, img5, img6, img7]

export const WellcomeWidget = () => {
    return (
        <div className="wellcome-container chapter-wrapper">
            <h2>Экскурсии по достопримечательностям России</h2>
            <WellcomeCarousel images={images} />
        </div>
    )
}
