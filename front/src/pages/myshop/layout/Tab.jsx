import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Tabs = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom:3rem;

  & > span{
    width: 100%;
    text-align:center;
    padding: 1% 3%;
    border: solid gray;
    border-width:0.3px 0 2px 0.3px;
    cursor:pointer;
  }

  & > span:last-child{
    border-right: 0.3px solid gray;
  }
`

const Tab = memo(({ id, changeTab }) => {
  return (
    <Tabs>
      <span onClick={() => changeTab('상품')}><Link to={`/myshop/${id}/product`}>상품</Link ></span>
      <span onClick={() => changeTab('상점문의')}><Link to={`/myshop/${id}/ask`}>상점문의</Link></span>
      <span onClick={() => changeTab('찜')}><Link to={`/myshop/${id}/jjim`}>찜</Link></span>
      <span onClick={() => changeTab('상점후기')}><Link to={`/myshop/${id}/review`}>상점후기</Link></span>
      <span onClick={() => changeTab('팔로잉')}><Link to={`/myshop/${id}/following`}>팔로잉</Link></span>
      <span onClick={() => changeTab('팔로워')}><Link to={`/myshop/${id}/follower`}>팔로워</Link></span>
    </Tabs>
  )
})

export default Tab;
