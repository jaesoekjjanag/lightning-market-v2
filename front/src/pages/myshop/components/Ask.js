import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import EachAsk from './EachAsk'
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
  //* 상점 주인
  const ownerId = (match.url.replace('/myshop/', '')).replace('/ask', '')
  //* 문의 작성자
  const userId = decodeURIComponent(document.cookie.split(';')[1]).replace('id=j', '').match(/[0-9a-z]/g).join('');

  const [text, setText] = useState('');
  const [asks, setAsks] = useState([]);

  useEffect(() => {
    axios.get(`/comment/asks?id=${ownerId}`)
      .then((res) => setAsks(prev => prev.concat(res.data)))
  }, [ownerId])

  const submitComment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/comment/ask', { AskTo: ownerId, AskFrom: userId, content: text })
      setAsks(prev => prev.concat(res.data))
    } catch (err) {
      console.error(err)
    }
    e.target.reset();
  }

  const onChangeText = useCallback((e) => {
    setText(e.target.value)
  }, [setText])

  return (
    <div>
      <Form onSubmit={submitComment}>
        <textarea name="ask" id="ask" maxLength='300' onChange={onChangeText}></textarea>
        <Bottom>
          <span>{text.length}/300</span>
          <button>입력</button>
        </Bottom>
      </Form>
      {asks.map((v) => (<EachAsk data={v} key={v} />))}
    </div>
  )
}

export default Ask
