import React, { useState, useEffect, memo } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import EachProduct from './EachProduct'
import axios from 'axios'


const Wrapper = styled.div`
  display:flex;
  gap:2rem;
`

const Product = memo(({ match }) => {
  const { id } = useSelector(state => state.user.userInfo)
  const shopId = match.url.replace('/myshop/', '').replace('/product', '')
  const { posts } = useSelector(state => state.user)

  const [myPosts, setMyPosts] = useState();

  useEffect(() => {
    if (id === shopId) {
      setMyPosts(posts)
    } else {
      try {
        axios.post('/post/mypost', { id: shopId })
          .then((res) => setMyPosts(res.data))
      } catch (err) {
        return console.log(err)
      }
    }
  }, [id, shopId, setMyPosts, posts, match])

  return (
    <React.Fragment>
      <Wrapper>
        {myPosts && myPosts.map((v, i) => (
          <EachProduct data={v} />
        )
        )}
      </Wrapper>
    </React.Fragment>
  )
})

export default Product
