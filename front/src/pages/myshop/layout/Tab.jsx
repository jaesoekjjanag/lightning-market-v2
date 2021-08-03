import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkTagStyle } from '../../main'

const Tabs = styled.div`
  display:flex;
  justify-content: space-between;

  & > span{
    width: 100%;
    text-align:center;
    padding: 1% 3%;
    border: solid gray;
    border-width:0.3px 0 2px 0.3px;
  }

  & > span:last-child{
    border-right: 0.3px solid gray;
  }
`
const Tab = ({ match }) => {
  console.log(match)
  return (
    <Tabs>
      <LinkTagStyle />
      <span><Link to='/myshop/product'>상품</Link ></span>
      <span><Link to='/myshop/ask'>상점문의</Link></span>
      <span><Link to='/myshop/jjim'>찜</Link></span>
      <span><Link to='/myshop/review'>상점후기</Link></span>
      <span><Link to='/myshop/following'>팔로잉</Link></span>
      <span><Link to='/myshop/follower'>팔로워</Link></span>
    </Tabs >
  )
}

export default Tab
