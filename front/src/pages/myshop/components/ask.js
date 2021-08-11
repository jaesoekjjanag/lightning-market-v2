import React from 'react'
import styled from 'styled-components'
import Tab from '../layout/Tab'

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
  // const id = (match.url.replace('/myshop/', ''))
  console.log(match)
  return (
    <div>
      <Form>
        <input type="textarea" maxLength="100" />
        <div>
          <span>n/100</span>
          <span><button>입력</button></span>
        </div>
      </Form>
    </div>
  )
}

export default Ask
