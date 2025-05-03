import { WellcomeCarousel } from "./wellcome-carusel/wellcome-carusel"

import "./wellcome.scss"

const images: Array<string> = [
    "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-67117688-8285167.jpg",
    "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-67117688-8299382.jpg",
    "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-agapy-92412.jpg",
    "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-arthur-shuraev-67501761-9016133.jpg",
    "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-mike-468229-1181805.jpg",
    "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-platon-matakaev-162269967-11422436.jpg",
    "https://storage.yandexcloud.net/silaev-excursions-bucket/site-images/pexels-sergey-sh-1439367-2775742.jpg"
]

export const WellcomeWidget = () => {
    return (
        <div className="wellcome-container chapter-wrapper">
            <h2>Экскурсии по достопримечательностям России</h2>
            <WellcomeCarousel images={images} />
        </div>
    )
}
