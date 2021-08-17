import React, { useState, memo, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Tab from './layout/Tab'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import axios from 'axios'

import Top from './layout/Top'
import Product from './components/Product'
import Follower from './components/Follower'
import Ask from './components/Ask'
import Following from './components/Following'
import Review from './components/Review'
import Jjim from './components/Jjim'
import { LinkTagStyle } from '../../pages/main'


const BtmDiv = styled.div`
  margin:30px 0;

  & h3 {
    font-weight:500;
  }
`


const Router = memo(({ match }) => {
  const id = (match.url.replace('/myshop/', ''))

  const [userInfo, setUserInfo] = useState();
  //* true라면 내가 나의 상점에, false라면 다른 사람의 상점에
  const [me, setMe] = useState(true);

  const data = useSelector(state => state.user && state.user.userInfo)
  useEffect(() => {
    if (id === data.id) {
      console.log(data)
      setUserInfo(data)
    } else {
      axios.get(`/user?id=${id}`)
        .then((res) => {
          setUserInfo(res.data)
          setMe(p => !p);
        })
    }
  }, [id, data])






  return (
    <React.Fragment>
      <Layout>
        <Top id={id} me={me} userInfo={userInfo} />
        <BtmDiv>
          <LinkTagStyle />
          <Tab id={id} />
          <Route path={`${match.url}/product`} component={Product} />
          <Route path={`${match.url}/ask`} component={Ask} />
          <Route path={`${match.url}/jjim`} component={Jjim} />
          <Route path={`${match.url}/review`} component={Review} />
          <Route path={`${match.url}/following`} component={Following} />
          <Route path={`${match.url}/follower`} component={Follower} />
        </BtmDiv>
      </Layout>
    </React.Fragment>
  )
})

export default Router;