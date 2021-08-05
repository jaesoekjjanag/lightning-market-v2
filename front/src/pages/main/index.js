import React from 'react'
import ImgBlockGrid from './ImgBlockGrid';
import Carousel from './Carousel';
import Layout from '../../components/Layout';
import { createGlobalStyle } from 'styled-components';
import Login from '../../components/Login';
export const LinkTagStyle = createGlobalStyle`
    a{
        text-decoration: none;
        color:balck;
    }

    a:visited{
        color:black;
    }
`
const Main = () => {
  return (
    <React.Fragment>
      <Layout>
        <Carousel />
        <ImgBlockGrid />
      </Layout>
    </React.Fragment>
  )
}

export default Main;