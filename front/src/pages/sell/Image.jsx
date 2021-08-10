import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ImageForm = styled.form`
  width:840px;
  gap:10px;
  margin-bottom:2rem;
`

const ImageInput = styled.div`
  height:200px;
  width:200px;
  background-color:#FAFAFD;
  cursor:pointer;
  border:0.1px solid lightgray;
  display:inline-block;
  margin-right:10px;
  position:relative;

  &:hover{
    box-shadow:  0 0 8px 0.5px rgba(0, 0, 0, 0.1)
  }

  & img{
    width:50px;
    height:50px;
    margin:0 auto;
    display:block;
    position:relative;
    top:calc(50% - 25px);
  }
`

const ImgBlock = styled.div`
  height:200px;
  width:200px;
  cursor:pointer;
  border:0.1px solid lightgray;
  margin-right:10px;
  display:inline-block;
  position:relative;

  // &:hover{
  //   background-color: black;
  // }
`
const Img = styled.img`
  width:100%;
  height:100%;
  &:hover{
    box-shadow:  0 0 8px 0.5px rgba(0, 0, 0, 0.1);
    background: rgba(0,0,0,0.7);
  }
`
const Input = styled.input`
  position:absolute;
  right: 1rem; 
  bottom: 1rem;
  marginTop: 20px;
  width:6rem;
  height:2rem;
`

const Image = () => {
  const [thumbnailImg, setThumbnailImg] = useState([])
  const [uploadImg, setUploadImg] = useState([])

  const imgRef = useRef();

  const onClickBlock = () => {
    imgRef.current.click();
  }

  const uploadImage = async (e) => {
    const { files } = e.target
    console.log(files);
    // 썸네일 이미지 코드
    for (let i of files) {
      const reader = new FileReader();
      reader.onload = (data) => setThumbnailImg((prev) => ([data.target.result, ...prev]));
      await reader.readAsDataURL(i)
    }

    // 업로드 이미지 코드
    Array.from(files).forEach((v) => {
      setUploadImg((prev) => [...prev, v])
    })
  }

  const onSumbitImage = async (e) => {
    e.preventDefault();
    // console.log(uploadImg)
    const imageForm = new FormData();
    uploadImg.forEach((v) => {
      console.log(v)
      imageForm.append('image', v)
    })
    await axios.post('http://localhost:5000/post/image', imageForm)

  }

  return (
    <ImageForm onSubmit={onSumbitImage}>
      <ImageInput onClick={onClickBlock}><img src="plus.png" alt="plus.png" /></ImageInput>
      {thumbnailImg && thumbnailImg.map((v) => (<ImgBlock key={v}><Img src={v} alt={v} /></ImgBlock>))}
      <input type="file" onChange={uploadImage} ref={imgRef} hidden multiple />
      <Input type="submit" value='이미지 등록' />
    </ImageForm>
  )
}

export default Image
