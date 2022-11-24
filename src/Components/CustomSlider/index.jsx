import { Box } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

function CustomSlider() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };


    return (
      <Box className="slider__wrapper" sx={{padding:"40px"}}>
          <Slider {...settings} >
              <div style={{height:"400px !important"}}>
                <img className="slider__img" style={{objectFit:"cover",borderRadius:"10px"}} width={"100%"} height={400} src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?cs=srgb&dl=pexels-anel-rossouw-2558605.jpg&fm=jpg" />
              </div>
              <div style={{height:"400px !important"}}>
                <img className="slider__img" style={{objectFit:"cover",borderRadius:"10px"}} width={"100%"} height={400} src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?cs=srgb&dl=pexels-anel-rossouw-2558605.jpg&fm=jpg" />
              </div>
              <div style={{height:"400px !important"}}>
                <img className="slider__img" style={{objectFit:"cover",borderRadius:"10px"}} width={"100%"} height={400} src="https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?cs=srgb&dl=pexels-anel-rossouw-2558605.jpg&fm=jpg" />
              </div>
          </Slider>

      </Box>
    )
}


export default CustomSlider
