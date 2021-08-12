import React, { useCallback } from 'react'
import styled from 'styled-components'
import axios from 'axios'
const Form = styled.form`
  width: 100%;

  & > *{
    border:1px solid black;
  }

  & input{
    height: 5rem;
    width:100%;
    padding:1%;
    overflow:scroll;
  }

  & div{
    height: 3rem;
    padding:1%;
    vertical-align:middle;
  }
  & span:last-child{
    float:right;
    
  }
`

const Ask = ({ match }) => {
  const id = (match.url.replace('/myshop/', '')).replace('/ask', '')

  const submitComment = useCallback(async (e) => {
    e.preventDefault();
    // await axios.patch('/comment')
  }, [])
  return (
    <div>
      <Form>
        <input type="textarea" maxLength="100" onSubmit={submitComment} />
        <div>
          <span>n/100</span>
          <span><button>입력</button></span>
        </div>
      </Form>
    </div>
  )
}

export default Ask
