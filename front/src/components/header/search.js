import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { recentSrchWord, hotSrchWord } from '../reducer/index'
import RecentList from './RecentList';

const StyledSrchWrap = styled.div`
    border: 2px solid var(--main-yellow);
    width: 460px;
    height: 40px;
    box-sizing: border-box;
    position: relative;
    display: flex;
`;

const StyledSrchBar = styled.div`
    padding: 0 15px;
    align-items: center;
    display: flex;
`;

const StyledSrchBox = styled.input`
    padding:0;
    border: 0;
    outline: none;
    width: 410px;
    height: 16px;
    line-height:12px;
`;

const StyledSrchIcon = styled.img`
    width: 16px;
    height: 16px;
`;

const SrchWordsLstDiv = styled.div`
    position: absolute;
    top: 48px;
    left: 0px;
    width: 100%;
    border: 1px solid rgb(217, 217, 217);
    background: rgb(255,255,255);
    z-index: 10;

`;
const SrchWordsLstWrapDiv = styled.div`
    padding: 0 15px;
`;

const StyledSrchWord = styled.a`
    padding: 25px 0 10px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    height: 50px;
    box-sizing: border-box;
    text-align: center;
    font-size: 0.857rem;
    font-weight: 600;

    ${({ activate }) => {
        return activate ? 'border-bottom: 2px solid var(--main-yellow); color: var(--main-yellow);' : 'border-bottom: 2px solid rgb(217, 217, 217);color: black;';
    }}
`;

const WrapDiv = styled.div`
    display: flex;
`;

const SrchWordBoxDiv = styled.div`
    height: 360px;
    overflow: hidden;
`;

const SrchBottomDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    background: rgb(250,250,250);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align:center;
    align-items:center;
    padding: 0 25px;
`;

const StyleUl = styled.ul`
    text-align: left;
    color:black;

    & > *{
        margin: 1rem;
        margin-top:1.5rem;
    }
`
const MaxWidthSpan = styled.span`
    width:205px;
`

const Search = () => {

    const [srchValue, setSrchValue] = useState('init');
    const [srchHistory, setSrchHistory] = useState([]);
    const [rcntList, setRcntList] = useState('');

    const recentWord = useSelector(state => state.recentSrchWord);
    const hotWord = useSelector(state => state.hotSrchWord);

    const dispatch = useDispatch();


    const clickRecent = () => {
        dispatch(recentSrchWord(true));
        dispatch(hotSrchWord(false));
    };
    const clickHot = () => {
        dispatch(hotSrchWord(true));
        dispatch(recentSrchWord(false));
    }

    const inputClick = () => {
        document.querySelector('#recentSrchWrap').classList.toggle('blind');
    }

    let historyList = localStorage.getItem('srchHistory');
    let parsedList;
    let historyItem;

    if (!localStorage.getItem('srchHistory')) {
        parsedList = [];
    } else {
        parsedList = JSON.parse(historyList);
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        parsedList.push(srchValue);
        const stringified = JSON.stringify(parsedList);
        localStorage.setItem('srchHistory', stringified)
    }


    if (localStorage.getItem('srchHistory')) {
        historyItem = parsedList.map((v, i) => { return <RecentList key={i} val={v} /> })
    } else {
        historyItem = <RecentList val={'최근 검색 기록이 없습니다.'} />
    }

    const handleInputChage = (e) => {
        setSrchValue(e.target.value);
    }

    useEffect((e) =>
        console.log(srchValue)
        , [srchValue])

    return <React.Fragment>
        <StyledSrchWrap onFocus={inputClick} onBlur={inputClick}>
            <StyledSrchBar >
                <form onSubmit={handleSubmit}>
                    <StyledSrchBox onChange={handleInputChage} id="searchBox" type="text" placeholder="상품명, 지역명,@상점명 입력" autoComplete="off" />
                    <a href="#">
                        <StyledSrchIcon src="search-solid.svg" alt="돋보기 이미지" />
                    </a>
                </form>
            </StyledSrchBar>

            <SrchWordsLstDiv id="recentSrchWrap" className="blind">
                <SrchWordsLstWrapDiv>
                    <WrapDiv className="srchWordWrap">
                        <StyledSrchWord href="#" activate={recentWord} onClick={clickRecent} className="srchWords">
                            <MaxWidthSpan>최근검색어</MaxWidthSpan>
                            <StyleUl>
                                {historyItem}
                            </StyleUl>
                        </StyledSrchWord>
                        <StyledSrchWord href="#" activate={hotWord} onClick={clickHot} className="srchWords">인기검색어</StyledSrchWord>
                    </WrapDiv>
                    <SrchWordBoxDiv>

                    </SrchWordBoxDiv>
                </SrchWordsLstWrapDiv>
                <SrchBottomDiv>

                </SrchBottomDiv>
            </SrchWordsLstDiv>

        </StyledSrchWrap>
    </React.Fragment>
}

export default Search;