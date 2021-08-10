import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    padding: 30px 0px;
`
const ImageWrap = styled.div`
    margin-right: 40px;
    flex-shrink: 0;
    width: 430px;
    height: 430px;
`
const InfoMainWrap = styled.div`
    flex-grow: 1
`
const InfoSubWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


const Top = () => {

    return <>
        <Wrap>
            <ImageWrap>

            </ImageWrap>
            <InfoMainWrap>
                <InfoSubWrap>

                </InfoSubWrap>
            </InfoMainWrap>
        </Wrap>
    </>
};

export default Top;