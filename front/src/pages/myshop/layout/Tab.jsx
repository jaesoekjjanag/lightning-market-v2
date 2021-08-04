import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkTagStyle } from '../../main'
import Follower from '../components/Follower'
import Ask from '../components/Ask'
import Product from '../components/Product'
import Following from '../components/Following'
import Review from '../components/Review'
import Jjim from '../components/Jjim'

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
const Hr = styled.hr`
margin: 1rem 0;
`
const Tab = ({ match }) => {
  const tabProp = match.params.tab
  const [crntTab, setCrntTab] = useState('')
  const [tabname, setTabName] = useState('');

  // const crntTab = which(tabProp)
  useEffect(() => {
    const which = (prop) => {
      switch (prop) {
        case 'product':
          setTabName('상품')
          return <Product />
        case 'ask':
          setTabName('상점문의')
          return <Ask />
        case 'jjim':
          setTabName('찜')
          return <Jjim />
        case 'review':
          setTabName('상점후기')
          return <Review />
        case 'following':
          setTabName('팔로잉')
          return <Following />
        case 'follower':
          setTabName('팔로워')
          return <Follower />
        default:
          break;
      }
    }
    setCrntTab(which(tabProp))
  }, [tabProp])

  return (
    <div>
      <Tabs>
        <LinkTagStyle />
        <span><Link to='/myshop/product'>상품</Link ></span>
        <span><Link to='/myshop/ask'>상점문의</Link></span>
        <span><Link to='/myshop/jjim'>찜</Link></span>
        <span><Link to='/myshop/review'>상점후기</Link></span>
        <span><Link to='/myshop/following'>팔로잉</Link></span>
        <span><Link to='/myshop/follower'>팔로워</Link></span>
      </Tabs >
      <div><h3>{tabname} n</h3></div>
      <Hr />
      <div>
        {crntTab}
      </div>
    </div>
  )
}

export default Tab
