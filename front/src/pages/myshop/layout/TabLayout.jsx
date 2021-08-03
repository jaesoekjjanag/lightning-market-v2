import React from 'react'
import styled from 'styled-components';
import Layout from '../../../components/Layout';
import Tab from './Tab';

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
  height: 300px;
  margin:30px 0;
`

const TabLayout = ({ children }) => {
  return (
    <Layout>
      <TopDiv>
        <div></div>
        <div>
          <div>
            <span>상점~~~~</span>
            <button>상점 명 수정</button>
          </div>
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
        <Tab />
      </BtmDiv>
      {children}
    </Layout>
  )
}

export default TabLayout
