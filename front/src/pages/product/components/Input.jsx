import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const InputWrap = styled.form`
  border-right: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  border-left: 1px solid rgb(238, 238, 238);
`
const TextareaWrap = styled.div`
  width: 100%;
  padding: 20px;
  height: 100px;
  border-bottom: 1px solid rgb(238, 238, 238);
`
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 13px;
  line-height: 1.5;
  border: none;
  outline: none;
`
const AskPostWrap = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`
const CharCount = styled.div`
  margin-left: 10px;
  font-size: 12px;
  color: rgb(136, 136, 136);
`
const PostBtn = styled.button`
  border: 1px solid rgb(238, 238, 238);
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  font-size: 13px;
  color: rgb(136, 136, 136);

  & > * {
    width: 15px;
    height: 16px;
    margin-right: 4px;
  }
`
const Input = ({ product, setComments }) => {
  // * 상품문의 길이 
  const [askLen, setAskLen] = useState(0);

  // * 상품문의 길이 계산
  const charLength = (e) => {
    setAskLen(e.target.value.length);
  };

  const userId = decodeURIComponent(document.cookie.split(';')[1]).replace('id=j', '').match(/[0-9a-z]/g).join('');

  const uploadComment = async (e) => {
    e.preventDefault();
    const res = await axios.post('/comment', { post: product._id, writer: userId, content: e.target.comment.value })
    setComments(prev => (prev.concat(res.data)));
    e.target.reset();
  }

  return (
    <InputWrap onSubmit={uploadComment}>
      <TextareaWrap>
        <TextArea name='comment' placeholder="상품문의 입력" maxLength="100" onInput={charLength}></TextArea>
      </TextareaWrap>
      <AskPostWrap>
        <CharCount>{askLen} / 100</CharCount>
        <PostBtn >
          <img src="pencil.png" alt="문의등록버튼 아이콘" />
          등록
        </PostBtn>
      </AskPostWrap>
    </InputWrap>
  )
}

export default Input
