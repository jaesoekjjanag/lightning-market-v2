import React, { useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ImageBlock = styled.div`
  height:200px;
  width:200px;
  background-color:#FAFAFD;
  cursor:pointer;
  border:0.1px solid lightgray;

  &:hover{
    box-shadow: inset 0 0 3px
  }
`

const Image = () => {
  // const [images, setImages] = useState()

  const img = useRef();

  const onClickBlock = () => {
    img.current.click();
  }

  const uploadImage = (e) => {
    const imageForm = new FormData();
    const { files } = e.target;
    Array.from(files).forEach((v) => {
      imageForm.append('image', v)
    })
    axios.post('http://localhost:5000/post/image', imageForm)
  }

  return (
    <div>
      <ImageBlock onClick={onClickBlock}></ImageBlock>
      <input type="file" onChange={uploadImage} ref={img} style={{ display: "none" }} multiple />
    </div>
  )
}

export default Image
