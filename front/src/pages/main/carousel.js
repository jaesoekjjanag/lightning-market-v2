import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const Carousel = () => {
//     return <React.Fragment>
//         {/* <div className="carouselBox">
//             <ul className="carousel">
//                 <li><img src="캐러셀1.jpg" alt="" width="1030px" height="300px"/></li>
//                 <li><img src="캐러셀2.jpg" alt="" width="1030px" height="300px"/></li>
//                 <li><img src="캐러셀3.jpg" alt="" width="1030px" height="300px"/></li>
//             </ul>
//         </div> */}

//     </React.Fragment>
// }

// export default Carousel;


const WrapDiv = styled.div`
    width: 1024px;
    margin: 0 auto;
`

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true
    };
    return (
      <WrapDiv>
        <Slider {...settings}>
          <div>
            <img src="캐러셀1.jpg" alt="" width="1024px" height="300px" />
          </div>
          <div>
            <img src="캐러셀2.jpg" alt="" width="1024px" height="300px" />
          </div>
          <div>
            <img src="캐러셀3.jpg" alt="" width="1024px" height="300px" />
          </div>

        </Slider>
      </WrapDiv>
    );
  }
}