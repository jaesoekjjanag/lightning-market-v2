import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {productWarningMsg} from '../reducer/index';

const RegisterWrapDiv = styled.section`
    margin: 0 auto;
    width: 1024px;
`

const InfoTitle = styled.h2`
    height: 100px;
    font-size: 26px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid rgb(30,29,41);
    font-weight: 400;
`

const RequiredInfo = styled.span`
    color: rgb(255, 80, 88);
    font-size: 1rem;
    margin-left: 2rem;
`

const InfoWrap = styled.ul`
    padding-top: 0.5rem;
`

const InfoLi = styled.li`
    width: 100%;
    display: flex;
    padding: 2rem 0;
    border-bottom: 1px solid rgb(220, 219, 228);
`

const InfoSubTitle = styled.div`
    width: 10.5rem;
    font-size: 18px;
`

const Asterisk = styled.span`
    color: rgb(255, 80, 88);
`
const ProductWrap = styled.div`
    flex: 1 1 0%
`
const Product = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
const ProductTitleWrap = styled.div`
    display:flex;
    width: 100%;
    align-items: center;
`

const ProductTitle = styled.input`
    height: 3rem;
    padding: 0px 1rem;
    width: 100%;
    font-size: 16px;
    
    &:focus {
        outline: 1px solid black;
    }
`

const ProductWarning = styled.div`
    color: rgb(245, 126, 0);
    font-size: 14px;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;

    ${({ activate }) => {
        return activate ? 'display: flex' : 'display: none';
    }}
`

const CharNumber = styled.div`
    margin-left: 1.5rem;
    font-size: 1rem;
    text-align: right;
`
const CategoryWrap = styled.div`
    flex: 1 1 0;
`
const CategorySubWrap = styled.div`
    display: flex;
    width: 100%;
    height: 19rem;
    overflow: hidden;
    border: 1px solid rgb(220, 219, 228);
`


const ProductRegister = ()=> {
    const dispatch = useDispatch();
    const warningMsg = useSelector(state => state.productWarningMsg);


    const [productTitleLength, setproductTitleLength] = React.useState(0);

    const charLength = (e) => {
        setproductTitleLength(e.target.value.length);
        if (e.target.value.length < 2) {
            dispatch(productWarningMsg(true));
        } else {
            dispatch(productWarningMsg(false));
        }
    } 


    return <React.Fragment>
        <RegisterWrapDiv>
            <InfoTitle>
                기본정보
                <RequiredInfo>*필수항목</RequiredInfo>
            </InfoTitle>

            <InfoWrap>
                <InfoLi>
                    <InfoSubTitle>
                        상품이미지
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                </InfoLi>
                <InfoLi>
                    <InfoSubTitle className="titlePadding">
                        제목
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                    <ProductWrap>
                        <Product>
                            <ProductTitleWrap>
                                <ProductTitle type="text" placeholder="상품 제목을 입력해주세요." maxLength="40" onInput={charLength}/>
                            </ProductTitleWrap>
                            <CharNumber>
                                {productTitleLength}/40
                            </CharNumber>
                        </Product>
                        <ProductWarning activate={warningMsg}>
                            상품명을 2자 이상 입력해주세요.
                        </ProductWarning>
                    </ProductWrap>
                </InfoLi>
                <InfoLi>
                    <InfoSubTitle>
                        카테고리
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                    <CategoryWrap>
                        <CategorySubWrap>

                        </CategorySubWrap>
                    </CategoryWrap>
                </InfoLi>
            </InfoWrap>

        </RegisterWrapDiv>
    </React.Fragment>
}

export default ProductRegister;