import React from 'react'
import styled from 'styled-components'

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

const Ask = () => {
  return (
    <Form>
      <input type="textarea" maxLength="100" />
      <div>
        <span>n/100</span>
        <span>입력</span>
      </div>
    </Form>
  )
}

export default Ask
