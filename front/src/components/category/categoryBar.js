import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import StyledLi from './StyledLi';

const StyledWrapDiv = styled.div`
    margin-top: 2rem;
    border-top:var(--border-default);  
    border-bottom:var(--border-default);  
`
const StyledDiv = styled.div`
    width:1024px;
    margin: 0 auto;
    padding: 1.3rem 0;   
`
const StyledUl = styled.ul`
    padding: 0px;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    list-style:none;
`
let categories = {
    전자제품: ['전자제품1', '전자제품2', '전자제품3'],
    의류: ['의류1', '의류2', '의류3'],
    애완용품: ['애완용품1', '애완용품2', '애완용품3'],
    도서: ['도서1', '도서2', ' 도서3'],
    스포츠: ['스포츠1', '스포츠2', '스포츠3'],
    가구: ['가구1', '가구2', '가구3'],
    게임: ['게임1', '게임2', '게임3'],
    식물: ['식물1', '식물2', '식물3'],
}

let mappedCategories = []

for (let i in categories) {
    mappedCategories.push(<StyledLi key={i} val={i} sub={categories[i]} />)
}

const CategoryBar = () => {

    return <React.Fragment>
        <StyledWrapDiv>
            <StyledDiv>
                <StyledUl>
                    {mappedCategories}
                </StyledUl>
            </StyledDiv>
        </StyledWrapDiv>

    </React.Fragment>
}

export default CategoryBar;