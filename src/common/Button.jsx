import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const CustomButton = ({ className, title, width }) => {
    return (
        <Wrapper>
            <Button className={` ${className} btn `} style={{ width: width }}> {title}</Button>
        </Wrapper>
    );
};

export default CustomButton;

const Wrapper = styled.div`
  .btn {
    border: 2px solid #fff;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    background-color: transparent;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px;
  }
`;
