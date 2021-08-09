import React, { useState, useRef } from 'react'
import { Route } from 'react-router-dom'
import Tab from './layout/Tab'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { NICKNAME_CHANGE } from '../../reducer/user'
import axios from 'axios'


const TopDiv = styled.div`
  border: 0.5px solid gray;
  height: 310px;
  box-sizing: border-box;
  display:flex;

  & > div:first-child{
    width: 310px;
    height: 310px;
    border-right: 0.5px solid gray;
  }
  & > div:last-child{
  width: calc(100% - 310px);
  height: 310px;
  padding: 2.8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & span{
    margin-right: 2%;
  }
  }

`
const Nickname = styled.div`
  h3{
    display:inline-block;
    font-size:1.1rem;
    margin-right: 1rem;

  }

  button{
    border:1px solid lightgray;
  }

`
const NicknameEdit = styled.div`
  input{
    font-size:1rem;
    line-height:1.8rem;
    width:16rem;
    border:1px solid lightgray;
    margin-right: 1rem;
  }

  button{
    border:1px solid lightgray;
    height:1.8rem;
    vertical-align:top;
    padding:0 1rem;
    box-sizing:content-box;
    background-color:var(--main-yellow);
`


const Textarea = styled.div`
  display:flex;
  border-collapse:collapse;

  & textarea{
    width:85%;
    border-right:none;
    resize:none;
  }

  & button{
    width:15%;
    height:100%;
    vertical-align:center;
  }
`
const BtmDiv = styled.div`
  margin:30px 0;

  & h3 {
    font-weight:500;
  }
`


const Router = () => {
  //미완성

  const { id, nickname } = useSelector(state => state.user.userInfo && state.user.userInfo)
  const [nicknameValue, setNicknameValue] = useState(nickname ? nickname : `상점${id}`)
  const [nicknameChange, setNicknameChange] = useState(false);

  const dispatch = useDispatch();

  const onClickEdit = async () => {
    try {
      const res = await axios.post('/user/nickname', { id: id, nickname: nicknameValue })
      console.log(res.data)
      dispatch({
        type: NICKNAME_CHANGE,
        nickname: nicknameValue,
      });
      setNicknameChange(prev => !prev)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <React.Fragment>
      <Layout>
        <TopDiv>
          <div></div>
          <div>
            {nicknameChange
              ? <NicknameEdit>
                <input type="text" value={nicknameValue} onChange={(e) => setNicknameValue(e.currentTarget.value)} />
                <button onClick={onClickEdit}>확인</button>
              </NicknameEdit>
              : <Nickname>
                <h3>{nickname
                  ? nickname
                  : `상점${id}`}</h3>
                <button onClick={() => setNicknameChange(prev => !prev)}>상점 명 수정</button>
              </Nickname>
            }

            <div>
              <span>상점 오픈 일</span>
              <span>상품 판매 n회</span>
            </div>
            <Textarea>
              <textarea name="" id="" cols="30" rows="10" />
              <button>확인</button>
            </Textarea>
            <div>
              <button>
                소개글 수정
              </button>
            </div>
          </div>
        </TopDiv>
        <BtmDiv>
          < Route path='/myshop/:tab' component={Tab} />
        </BtmDiv>
      </Layout>
    </React.Fragment>
  )
}

export default Router;