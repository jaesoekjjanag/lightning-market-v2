import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loadPosts } from '../../reducer/post';
import ImgBlock from './ImgBlock';
import { LinkTagStyle } from './index'

const ImagesWrapper = styled.div`
  display: grid;
  width:100%;
  grid-template-columns:repeat(5,1fr);
  grid-template-rows: repeat(5, 1fr);
  gap:6px;
  height: 1400px;
  padding-top: 100px;

`
// const Imgs = styled.div`
//   border:1px solid black;
// `
const ImgBlockGrid = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    async function loadPosts() {
      const posts = await axios.post('/post/posts')
      setPosts(posts.data);
    }
    loadPosts()
  }, [])

  return (
    <React.Fragment>
      <LinkTagStyle />
      <ImagesWrapper className="ImagesWrapper">
        {posts && posts.map((v, i) => (
          <Link to={`/product/${v._id}`}><ImgBlock data={v} key={v.createdAt} /></Link>
        ))}
      </ImagesWrapper>
    </React.Fragment>
  )
}

export default ImgBlockGrid;