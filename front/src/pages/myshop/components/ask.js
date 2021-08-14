import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
const Form = styled.form`
  width: 100%;

  & textarea{
    height: 100px;
    width:100%;
    padding:1%;
    resize:none;
    margin:none;
    font-size:1rem;
    overflow:hidden;

    &:focus{
      outline:none;
    }
  }

`
const Bottom = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:3rem;
  border:0.1px solid black;
  padding:1%;

  button {
    border: 0.1px solid black;
    height: 1.5rem;
    padding:0 1rem;
  }
`

const Ask = ({ match }) => {
  const id = (match.url.replace('/myshop/', '')).replace('/ask', '')
  const [text, setText] = useState('');
  // const [comment, ]

  const submitComment = async (e) => {
    e.preventDefault();
    await axios.post('/comment', { id: id, text: text })
  }

  const onChangeText = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <Form onSubmit={submitComment}>
        <textarea name="ask" id="ask" maxLength='300' onChange={onChangeText}></textarea>
        <Bottom>
          <span>{text.length}/300</span>
          <button>입력</button>
        </Bottom>
      </Form>
    </div>
  )
}

export default Ask
