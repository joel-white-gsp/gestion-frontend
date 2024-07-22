import { useState, useEffect } from "react";
import { AutoComplete as AutoComplete_ } from "antd";
import styled from "styled-components";

export const AutoComplete2 = ({ error, className, ...props }) => {
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = (e) => {
    if (props?.value || e.target.value) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    if (props?.value) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props?.value]);

  return (
    <Wrapper>
      {props?.label && (
        <label
          className={
            active
              ? "ant-form-item-label ant-form-item-label-active"
              : "ant-form-item-label"
          }
          htmlFor="outlined-input"
        >
          {props?.label}
        </label>
      )}
      <AutoComplete_
        {...props}
        id="outlined-input"
        bordered={false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{width: '220px'}}
      />
      {error && <span className="error">{error}</span>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 48px;
  position: relative;
  .ant-select-selection-search-input {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #212b36;
    position: relative;
    top: 6px;
    left: 2px;
  }
  .ant-select-selection-search-input {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #919eab;
  }

  .ant-select {
    border: 1px solid rgba(145, 158, 171, 0.32);
    border-radius: 8px;
    position: relative;
    width: 100%;
  }

  .ant-select-selection-item {
    padding: 4px 0px 0px 2px;
  }

  .ant-select-selector:focus,
  .ant-select-focused .ant-select-selector {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  .ant-select-selector:hover {
    border-color: #40a9ff;
  }

  .ant-select-selector:not(:first-child)::before {
    opacity: 0.6;
  }

  .ant-select-selector:not(:first-child):focus::before,
  .ant-select-focused .ant-select-selector:not(:first-child)::before {
    opacity: 0.4;
  }

  .ant-form-item-label {
    position: absolute;
    top: 12px;
    left: 14px;
    transition: all 0.2s ease-out;
    pointer-events: none;
    color: #919eab;
  }

  .ant-form-item-label-active {
    transform: translateY(-20px) scale(1);
    font-weight: 400;
    font-size: 12px;
    color: #919eab;
    background: white;
    z-index: 6;
    padding: 0px 1px;
  }
  .ant-select-selector {
    height: 46px !important;
    padding-top: 6px !important;
  }
  .ant-select input {
    height: 33px !important;
  }
`;
