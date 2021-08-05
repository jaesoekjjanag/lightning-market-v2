import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
// import DaumPost from './DaumPost'
// import PopupDom from './PopupDom';
import PopupState from './PopupState'
import { addrPopup } from '../../reducer/addressPopup';

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
    line-height: 32px;
`
const InfoSubTitle = styled.div`
    width: 10.5rem;
    height: 32px;
    font-size: 18px;
}
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
const productTitleWrap = styled.div`
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
const WarningMsg = styled.div`
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
    font-size: 14px;
`
const RadioLeft = styled.label`
    margin-right: 32px;
`
const CostInput = styled.input`
    width: 240px;
    height: 3rem;
    box-sizing: border-box;
    padding: 0px 1rem;
    margin-right: 1rem;
    font-size: 1rem;
`

const CostCheckBox = styled.div`
    margin-top: 1rem;
`


const Register = () => {
    const dispatch = useDispatch();

    // 상품등록시 제목 길이
    const [productTitleLen, setproductTitleLen] = useState(0);

    // 상품등록시 제목 길이가 2보다 작을경우 메세지 출력
    const [productWarnMsg, setproductWarnMsg] = useState(false);

    //상품 상태
    const onClickState = (e) => {
        console.log(e.currentTarget.value)
    }

    //교환 가능 여부
    const onClickExchange = (e) => {
        console.log(e.currentTarget.value)
    }

    // 상품등록시 제목 길이 계산
    const charLength = (e) => {
        // setproductTitleLen(e.target.value.length);
        if (e.target.value.length < 2) {
            setproductWarnMsg(true);
        } else {
            setproductWarnMsg(false);
        }
    };


    // 카테고리
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

    // 카테고리 대분류
    let majorCategories = []

    for (let i in categories) {
        majorCategories.push(
            <CategoryLi>
                <CategoryBtn>
                    {i}
                </CategoryBtn>
            </CategoryLi>)
    };

    // 입력한 주소값 가져오기
    const addr = useSelector(state => state.address);

    // 팝업창 열기
    const isPopupOpen = useSelector(state => state.addrPopup);

    const openPopup = () => {
        console.log(addrPopup)
        dispatch(addrPopup(true))
        console.log(isPopupOpen)
    };

    
    // 가격이 100원 미만일경우 메세지 출력
    const [costWarningMsg, setCostWarningMsg] = useState(false);

    // 가격에 입력한 값 데이터타입 & 길이 확인
    const costData = (e) => {
        if (isNaN(e.target.value)) {
            alert('숫자를 입력하세요');
            e.target.value = ""
        } else if (e.target.value.length <3) {
            setCostWarningMsg(true);
        } else if (e.target.value.length >= 3) {
            setCostWarningMsg(false);
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
                            <productTitleWrap>
                                <ProductTitle type="text" placeholder="상품 제목을 입력해주세요." maxLength="40" onInput={charLength} />
                            </productTitleWrap>
                            <CharNumber>
                                {productTitleLen}/40
                            </CharNumber>
                        </Product>
                        <WarningMsg activate={productWarnMsg} >
                            상품명을 2자 이상 입력해주세요.
                        </WarningMsg>
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
                        <AddressBtn onClick={openPopup}>위치 검색</AddressBtn>
                        <PopupState></PopupState>
                        <AddressInput readOnly placeholder="선호 거래 지역을 검색해주세요." value={addr}></AddressInput>
                    </AddressWrap>
                </InfoLi>

                <InfoLi>
                    <InfoSubTitle>
                        상태
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                    <div>

                        <RadioLeft htmlFor="중고상품">
                            <input onClick={onClickState} type="radio" id="중고상품" value='old' name="상태" checked />중고상품
                        </RadioLeft>
                        <label htmlFor="새상품">
                            <input onClick={onClickState} type="radio" id="새상품" value='new' name="상태" />새상품
                        </label>
                    </div>
                </InfoLi>
                <InfoLi>
                    <InfoSubTitle>
                        교환
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                    <div>
                        <RadioLeft htmlFor="교환불가">
                            <input onClick={onClickExchange} type="radio" value='no' id="교환불가" name="교환" checked />교환불가
                        </RadioLeft>
                        <label htmlFor="교환가능">
                            <input onClick={onClickExchange} type="radio" value='yes' id="교환가능" name="교환" />교환가능
                        </label>
                    </div>
                </InfoLi>

                <InfoLi>
                    <InfoSubTitle>
                        가격
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                    <div>
                        <CostInput type="text" placeholder="숫자만 입력해주세요." onInput={costData}/>원
                        <WarningMsg activate={costWarningMsg} >
                            100원 이상 입력해주세요.
                        </WarningMsg>
                        <CostCheckBox>
                            <RadioLeft htmlFor="배송비포함">
                                <input type="checkbox" id="배송비포함"/>배송비포함
                            </RadioLeft>
                            <label htmlFor="가격협의 가능">
                                <input type="checkbox" id="가격협의 가능"/>가격협의 가능
                            </label>
                        </CostCheckBox>
                    </div>
                </InfoLi>

                <InfoLi>
                    <InfoSubTitle>
                        설명
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                </InfoLi>

                <InfoLi>
                    <InfoSubTitle>
                        수량
                        <Asterisk>*</Asterisk>
                    </InfoSubTitle>
                </InfoLi>

            </InfoWrap>

        </RegisterWrapDiv>
    </React.Fragment>
}

export default Register;