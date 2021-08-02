import React from 'react'
import ImgBlockGrid from './ImgBlockGrid';
// import Footer from '../../components/Footer';
import Header from '../../components/header';
import Carousel from './carousel';

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <ImgBlockGrid />
      {/* <Footer /> */}
    </React.Fragment>
  )
}

export default Main;