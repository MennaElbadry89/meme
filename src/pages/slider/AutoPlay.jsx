import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import img1 from '../../../public/imag/imgi_13.jpg'
import img2 from '../../../public/imag/imgi_14.jpg'
import img3 from '../../../public/imag/imgi_15.jpg'
import img4 from '../../../public/imag/imgi_16.jpg'
import img5 from '../../../public/imag/imgi_17.jpg'
// import { Autoplay } from "swiper/modules";



export default function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container container pt-5" style={{background: 'lightgray', height: '250px'}}>
      <Slider {...settings}>
      <div >
        <img src={img1} alt="" />
      </div>
      <div>
        <img src= {img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
      <div>
        <img src={img4} alt="" />
      </div>
      <div>
        <img src={img5} alt="" />
      </div>
      </Slider>
    </div>
  );
}
  