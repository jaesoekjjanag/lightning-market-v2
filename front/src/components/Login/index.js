import React, { useState, useEffect } from 'react'
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

  &>div{
    animation:${prop => prop.shake && `shake 0.2s`}} ;
  }

  @keyframes shake{
    0%{
      transform:translate(0);
    }
    20%{
      transform:translate(-30px);
    }
    40%{
      transform:translate(30px);
    }
    60%{
      transform:translate(-15px);
    }
    80%{
      transform:translate(15px);
    }
    100%{
      transform:translate(0);
    }
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
  box-shadow: 0 0 15px 1px rgba(0,0,0,0.4);
  
  

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

    &>span{
      cursor:pointer;
    }

    &>span:hover {
      text-decoration:underline;
    }
  }

`
const Text = styled.div`
    text-align:center;
    position:relative;
    margin-top:70px;
    

    & > *{
      padding-bottom:1rem;
    }

    &>div:first-child{
      position:absolute;
      top:-55px;
      left:calc(50% - 17.5px);
    }

    & h5{
      font-weight: lighter;
    }

`
const Img = styled.img`
    width:35px;
    height:35px;
    cursor:pointer;
    transform:${prop => prop.big && `scale(25)`};
    margin-top:${prop => prop.big && `200px`};
    


    &:active{
      transform: scale(1.2);
    }
`

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [counter, setCounter] = useState(0);
  const [big, setBig] = useState(false);
  const [shake, setShake] = useState(false);

  const dispatch = useDispatch();
  const onClickClose = () => {
    dispatch({
      type: CLOSE
    })
  }

  const onClickSignUp = () => {
    setIsSignUp(prev => !prev)
  }

  const onClickModal = (e) => {
    const lst = e.target.className.split(' ');
    if (lst.includes('modal')) {
      onClickClose();
    }
  }

  const ClickCount = () => {
    setCounter(prev => (prev + 1))
    if (counter === 9) {
      setBig(true);
    }
    if (counter === 10) {
      setCounter(0);
      setBig(false)
    }
  }

  const makeShake = () => {
    setShake(p => !p)
  }


  return (
    <BackgroundDiv className="modal" onMouseDown={onClickModal} shake={shake} onAnimationEnd={() => setShake(p => !p)}>
      <MainDiv id="shake">
        <button onClick={onClickClose}><img src="x.png" alt="closeButton" /></button>
        <Text>
          <div onClick={ClickCount}><Img big={big} src="thunder.ico" alt="thunderLogo" /></div>
          <h3>벼락장터로 중고거래 시작하기</h3>
          <h5>간편하게 가입하고 상품을 확인하세요</h5>
        </Text>
        {isSignUp
          ? <SignUp toggle={onClickSignUp} close={onClickClose} />
          : <LoginButtons toggle={onClickSignUp} close={onClickClose} shake={makeShake} />}
      </MainDiv>
    </BackgroundDiv >
  )
}

export default Login
