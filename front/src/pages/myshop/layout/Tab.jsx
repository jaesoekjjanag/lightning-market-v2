import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Tabs = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom:2rem;

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

const Tab = ({ id }) => {
  console.log(id)
  return (
    <Tabs>
      <span ><Link to={`/myshop/${id}/product`}>상품</Link ></span>
      <span ><Link to={`/myshop/${id}/ask`}>상점문의</Link></span>
      <span ><Link to={`/myshop/${id}/jjim`}>찜</Link></span>
      <span ><Link to={`/myshop/${id}/review`}>상점후기</Link></span>
      <span ><Link to={`/myshop/${id}/following`}>팔로잉</Link></span>
      <span ><Link to={`/myshop/${id}/follower`}>팔로워</Link></span>
    </Tabs>
  )
}

export default Tab
