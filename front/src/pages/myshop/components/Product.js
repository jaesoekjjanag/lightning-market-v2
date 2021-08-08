import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import EachProduct from './EachProduct'
import axios from 'axios'

const Wrapper = styled.div`
  display:flex;
  gap:2rem;
`

const Product = () => {
  const { id } = useSelector(state => state.user.userInfo)
  const [myPosts, setMyPosts] = useState();

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await axios.post('http://localhost:5000/post/mypost', { id })
        console.log(res.data)
        setMyPosts(res.data);
      } catch (err) {
        return console.log(err)
      }
    }
    return loadPost();
  }, [])

  return (
    <Wrapper>
      {myPosts && myPosts.map((v, i) => (
        <EachProduct data={v} />
      )
      )}
    </Wrapper>
  )
}

export default Product
