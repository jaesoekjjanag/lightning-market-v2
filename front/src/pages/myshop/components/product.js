import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import EachProduct from './EachProduct'
import axios from 'axios'
import Tab from '../layout/Tab'


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
        const res = await axios.post('/post/mypost', { id })
        setMyPosts(res.data);
      } catch (err) {
        return console.log(err)
      }
    }
    return loadPost();
  }, [])

  return (
    <React.Fragment>
      {/* <div>
        <h3>상품 n</h3>
        <hr />
      </div> */}
      <Wrapper>
        {myPosts && myPosts.map((v, i) => (
          <EachProduct data={v} />
        )
        )}
      </Wrapper>
    </React.Fragment>
  )
}

export default Product
