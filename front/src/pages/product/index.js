import React from 'react';
import styled from 'styled-components'
import Layout from '../../components/Layout';
import Top from './components/top';
import Bottom from './components/bottom';

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
`

const SubWrap = styled.div`
  width: 1024px;
`


const Product = () => {
  return (
    <Layout>
      <MainWrap>
        <SubWrap>
          <Top/>
          <Bottom/>
        </SubWrap>
      </MainWrap>
    </Layout>
  )
}

export default Product
