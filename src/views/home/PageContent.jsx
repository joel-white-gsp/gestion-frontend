import React from "react";
import styled from "styled-components";


const PageContent = () => {
    return (
        <Wrapper>
            <div className="comming-soon-text">
                Home
            </div>
        </Wrapper>
    )
}


export default PageContent

const Wrapper = styled.div`
    background-color:#fff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .comming-soon-text{
        font-size: 40px;
        font-weight: bold;
    }
`