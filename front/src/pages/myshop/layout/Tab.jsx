import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Tabs = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom:3rem;

  a{
    width: 100%;
    text-align:center;
    padding: 1% 3%;
    border: solid gray;
    border-width:0.3px 0 2px 0.3px;
    cursor:pointer;

    &:hover{
    background-color:var(--main-yellow);
    }
  }

  a:last-child{
    border-right: 0.3px solid gray;
  }
`
const Hr = styled.hr`
  margin: 1rem 0 2rem 0;
`

const Tab = memo(({ id }) => {
  const [tabName, setTabName] = useState('상품')

  const changeTabName = (e) => {
    switch (e.target.name) {
      case '상품':
        return setTabName('상품')
      case '상점문의':
        return setTabName('상점문의')
      case '찜':
        return setTabName('찜')
      case '상점후기':
        return setTabName('상점후기')
      case '팔로잉':
        return setTabName('팔로잉')
      case '팔로워':
        return setTabName('팔로워')
      default:
        setTabName('상품')


    }
  }

  return (
    <>
      <Tabs>
        <Link name='상품' onClick={changeTabName} to={`/myshop/${id}/product`}>상품</Link >
        <Link name='상점문의' onClick={changeTabName} to={`/myshop/${id}/ask`}>상점문의</Link>
        <Link name='찜' onClick={changeTabName} to={`/myshop/${id}/jjim`}>찜</Link>
        <Link name='상점후기' onClick={changeTabName} to={`/myshop/${id}/review`}>상점후기</Link>
        <Link name='팔로잉' onClick={changeTabName} to={`/myshop/${id}/following`}>팔로잉</Link>
        <Link name='팔로워' onClick={changeTabName} to={`/myshop/${id}/follower`}>팔로워</Link>
      </Tabs>
      <div><h3>{tabName} n</h3></div>
      <Hr />
    </>
  )
})

export default Tab;
