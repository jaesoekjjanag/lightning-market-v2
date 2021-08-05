import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { CLOSE } from '../../reducer/loginPopup'
import LoginButtons from './components/Login'
import SignUp from './components/SingUp'

const BackgroundDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  position:fixed;
  top:0
  left:0;
  height:100vh;
  width:100vw;
  z-index:15;
`
const MainDiv = styled.div`
  margin auto;
  width:420px;
  height:520px;
  background-color:rgb(247, 247, 247);
  position:relative;
  top: calc(50% - 260px);
  padding: 4% 4% 2% 4%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  border-radius:4px;

  & >button{
    text-align:right;
    position:absolute;
    top:3%;
    right:4%;
    border:none;
    &>img{
      width:20px;
      height:20px;
    }
  }

  & > div:last-child{
    text-align:right;
    cursor:pointer;

    &:hover span{
      text-decoration:underline;
    }
  }

`
const Text = styled.div`
    text-align:center;
    & > *{
      padding-bottom:1rem;
    }

    &  img{
      width:35px;
      height:35px;
    }

    & h5{
      font-weight: lighter;
    }

`


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useDispatch();
  const onCLickClose = () => {
    dispatch({
      type: CLOSE
    })
  }


  const onClickSignUp = () => {
    setIsSignUp(prev => !prev)
  }

  return (
    <BackgroundDiv>
      <MainDiv>
        <button onClick={onCLickClose}><img src="x.png" alt="closeButton" /></button>
        <Text>
          <div><img src="thunder.ico" alt="thunderLogo" /></div>
          <h3>벼락장터로 중고거래 시작하기</h3>
          <h5>간편하게 가입하고 상품을 확인하세요</h5>
        </Text>
        {isSignUp
          ? <SignUp />
          : <LoginButtons />}
        <div>계정이 없으신가요? <span onClick={onClickSignUp}>회원가입</span></div>
      </MainDiv>
    </BackgroundDiv>
  )
}

export default Login
