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
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="slider-container container gap-1 p-3" style={{background: 'lightgray', height: '250px'}}>
      <Slider {...settings}>
      <div >
        <img src={img1}className="w-100 h-100"alt="" />
      </div>
      <div>
        <img src= {img2}className="w-100 h-100"alt="" />
      </div>
      <div>
        <img src={img3}className="w-100 h-100"alt="" />
      </div>
      <div>
        <img src={img4} className="w-100 h-100"alt="" />
      </div>
      <div>
        <img src={img5} className="w-100 h-100"alt="" />
      </div>
      </Slider>
    </div>
  );
}
  