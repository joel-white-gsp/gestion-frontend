import { Input } from "antd";
import React from "react";
import styled from "styled-components";

const CustomInput = ({ placeholder, width, className, onChange, value }) => {
    return (
        <Wrapper>
            <Input
                value={value}
                onChange={onChange}
                allowClear
                className={`${className} custom-input`}
                placeholder={placeholder}
                style={{
                    width: width,
                }}
            />
        </Wrapper>
    );
};
export default CustomInput;

const Wrapper = styled.div`
.custom-input {
    border: 1px solid #bababa;
    height: 40px;
    background-color: #f9f9f9;
    color: #393939;
}
.ant-input{
    border: 1px solid #bababa;
    background-color: #f9f9f9;
    color: #393939;
}
.ant-input::placeholder{
 color: #393939;
}
`;
