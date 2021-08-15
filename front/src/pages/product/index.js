import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Layout from '../../components/Layout';
import Top from './components/top';
import Bottom from './components/bottom';
import axios from 'axios';

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
`

const SubWrap = styled.div`
  width: 1024px;
`


const Product = ({ match }) => {
  //todo 이미지 boder-bottom이랑 버튼들의 border-bottom이랑 같은 선 상에 있었으면 좋겠음!
  //* 아래 콘솔에 찍히는게 게시글 id
  const id = match?.url.replace('/product/', '');
  useEffect(() => {
    // * 백엔드로 정보 요청
    axios.get(`/post/product?id=${id}`)
      .then((res) => { setProduct(res.data) })
  }, [id])

  const [product, setProduct] = useState('');
  //* 'http://localhost:5000/post/[유진이가 정한 주소]'로 get 또는 post 보내면 됨.
  //* 주소는 back/routes/post 경로에서 정할 수 있음.

  return (
    <Layout>
      <MainWrap>
        <SubWrap>
          <Top product={product} />
          <Bottom product={product} />
        </SubWrap>
      </MainWrap>
    </Layout>
  )
}

export default Product
