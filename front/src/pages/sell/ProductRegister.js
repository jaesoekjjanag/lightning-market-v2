import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { productWarningMsg } from '../../reducer/index';
import DaumPostcode from 'react-daum-postcode';


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
    width: 80%;
    height: 19rem;
    overflow: hidden;
    border: 1px solid rgb(220, 219, 228);
`
const CategoryBox = styled.div`
    width: 284px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
`
const CategoryUl = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0.5rem 0px;
`

const CategoryLi = styled.li`
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
`

const CategoryBtn = styled.button`
    width: 100%;
    height: 100%;
    padding: 0px 1.5rem;
    border: none;
    font-size: 1rem;

    &:hover {
        background: rgb(244, 244, 250);
    }
`

const AddressWrap = styled.div`
    flex: 1 1 0%
`

const AddressBtn = styled.button`
    height: 3rem;
    width: 6.5rem;
    text-align: center;
    border: 1px solid rgb(195, 194, 204);
    margin-right: 1rem;
    border-radius: 2px;
    font-size: 1rem;

    &:hover {
        background: rgb(244, 244, 250);
    }
`

const AddressInput = styled.input`
    display: block;
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    padding: 0 1rem;
    outline: none;
`


const Register = () => {
    const dispatch = useDispatch();
    const warningMsg = useSelector(state => state.productWarningMsg);

    const [productTitleLength, setproductTitleLength] = useState(0);

    const charLength = (e) => {
        setproductTitleLength(e.target.value.length);
        if (e.target.value.length < 2) {
            dispatch(productWarningMsg(true));
        } else {
            dispatch(productWarningMsg(false));
        }
    };

    const categories = {
        전자제품: ['전자제품1', '전자제품2', '전자제품3'],
        의류: ['의류1', '의류2', '의류3'],
        애완용품: ['애완용품1', '애완용품2', '애완용품3'],
        도서: ['도서1', '도서2', ' 도서3'],
        스포츠: ['스포츠1', '스포츠2', '스포츠3'],
        가구: ['가구1', '가구2', '가구3'],
        게임: ['게임1', '게임2', '게임3'],
        식물: ['식물1', '식물2', '식물3'],
    };

    let majorCategories = []

    for (let i in categories) {
        majorCategories.push(
            <CategoryLi>
                <CategoryBtn>
                    {i}
                </CategoryBtn>
            </CategoryLi>)
    };


    const findAddress = (data) => {
        let addr = `${data.sido} ${data.sigungu} ${data.bname}`
        console.log(addr)
    };

    const hhh = () => {
        return <DaumPostcode onComplete={findAddress}></DaumPostcode>
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
                                <ProductTitle type="text" placeholder="상품 제목을 입력해주세요." maxLength="40" onInput={charLength} />
                            </ProductTitleWrap>
                            <CharNumber>
                                {productTitleLength}/40
                            </CharNumber>
                        </Product>
                        <ProductWarning activate={warningMsg} >
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
                            <CategoryBox>
                                <CategoryUl>
                                    {majorCategories}
                                </CategoryUl>
                            </CategoryBox>
                        </CategorySubWrap>
                    </CategoryWrap>
                </InfoLi>

                <InfoLi>
                    <InfoSubTitle>
                        거래지역
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                    <AddressWrap>
                        <AddressBtn>내 위치</AddressBtn>
                        <AddressBtn onClick={hhh}>위치 검색</AddressBtn>
                        <AddressInput readOnly placeholder="선호 거래 지역을 검색해주세요."></AddressInput>
                    </AddressWrap>
                </InfoLi>

            </InfoWrap>

        </RegisterWrapDiv>
    </React.Fragment>
}

export default Register;