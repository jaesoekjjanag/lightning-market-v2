import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UPLOAD_IMAGES, uploadImages } from '../../reducer/post'

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

  &:hover div{
    display:block;
  }
`
const Img = styled.img`
  width:100%;
  height:100%;
  object-fit:scale-down;
`
const Input = styled.input`
  position:absolute;
  right: 1rem; 
  bottom: 1rem;
  marginTop: 20px;
  width:6rem;
  height:2rem;
`
const Overlay = styled.div`
  position:absolute;
  height:200px;
  width:200px;
  background: rgba(0,0,0,0.55);
  top:0;
  display:none;
  text-align:center;

  & > img{
    position:relative;
    height:50px;
    width:50px;
    top:calc(50% - 25px);    
  }
`

const Image = () => {
  const [thumbnailImg, setThumbnailImg] = useState([])
  const [uploadImg, setUploadImg] = useState([])
  const { id } = useSelector(state => state.user.userInfo)
  const dispatch = useDispatch();

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
    const imageForm = new FormData();
    uploadImg.forEach((v) => {
      imageForm.append('image', v)
    })
    const res = await axios.post('http://localhost:5000/post/image', imageForm)
    // console.log(Array.from(res.data));
    const imagesName = uploadImages(Array.from(res.data));
    dispatch(imagesName);
  }

  return (
    <ImageForm onSubmit={onSumbitImage} encType='mutipart/form-data'>
      <ImageInput onClick={onClickBlock} title='사진 등록'><img src="plus.png" alt="plus.png" /></ImageInput>
      {thumbnailImg && thumbnailImg.map((v) => (
        <ImgBlock key={v}><Img src={v} alt={v} />
          <Overlay title='사진 제거'><img src="thinX.png" alt="deleteImage" /></Overlay>
        </ImgBlock>)
      )}
      <input type="file" onChange={uploadImage} ref={imgRef} hidden multiple />
      <Input type="submit" value='이미지 등록' />
    </ImageForm>
  )
}

export default Image
