import { Select } from "antd";
import React from "react";
import styled from "styled-components";

const CustomSelect = ({ options, defaultValue, width, className }) => {
    return (
        <Wrapper>
            <Select
                className={`${className} `}
                options={options}
                defaultValue={defaultValue}
                style={{
                    width: width,
                }}
                allowClear
            />
        </Wrapper>
    );
};

export default CustomSelect;

const Wrapper = styled.div`
    width: 100%;
  .ant-select {
    border: 1px solid #bababa;
    background-color: #f9f9f9;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
    background-color: #f9f9f9;
    padding-top: 5px;

  }
`;
