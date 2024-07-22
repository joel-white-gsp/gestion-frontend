import { useState, useEffect } from "react";
import { Input as Input_ } from "antd";
import styled from "styled-components";

export const Input2 = ({ error, className, ...props }) => {
  const [active, setActive] = useState(false);

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = (e) => {
    setActive(e.target.value !== "");
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
      <div
        className={
          props?.inputPrefix
            ? "input-prefix-container"
            : props?.inputSuffix
            ? "input-suffix-container"
            : ""
        }
      >
        {props?.inputPrefix && (
          <div className="input-prefix">{props?.inputPrefix}</div>
        )}
        <Input_
          {...props}
          id="outlined-input"
          bordered={false}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${className} input ${error && "has-error"}`}
          prefix={props?.icon}
        />
        {props?.inputSuffix && (
          <div className="input-suffix">{props?.inputSuffix}</div>
        )}
      </div>
      {error && <span className="error">{error}</span>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .ant-input {
    height: 48px !important;
    border: 1px solid rgba(145, 158, 171, 0.32);
    border-radius: 8px !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #919eab;
    padding: 12px 14px;
  }

  .ant-input-affix-wrapper {
    height: 48px !important;
    border: 1px solid rgba(145, 158, 171, 0.32);
    border-radius: 8px !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #919eab;
    align-items: center;
    padding: 0px 17px;
    .ant-input-prefix {
      margin-right: 11px;
    }
  }

  .ant-input-affix-wrapper.ant-input-affix-wrapper-outlined {
    border-radius: 4px;
    position: relative;
  }

  .ant-input-affix-wrapper.ant-input-affix-wrapper-outlined
    .ant-input:not(:first-child) {
    border-radius: 4px;
    padding-top: 26px;
  }

  .ant-input-affix-wrapper.ant-input-affix-wrapper-outlined .ant-input:focus,
  .ant-input-affix-wrapper.ant-input-affix-wrapper-outlined .ant-input-focused {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  .ant-input-affix-wrapper.ant-input-affix-wrapper-outlined .ant-input:hover {
    border-color: #40a9ff;
  }

  .ant-input-affix-wrapper.ant-input-affix-wrapper-outlined
    .ant-input:not(:first-child)::placeholder {
    opacity: 0.6;
  }

  .ant-input-affix-wrapper.ant-input-affix-wrapper-outlined
    .ant-input:not(:first-child):focus::placeholder,
  .ant-input-affix-wrapper.ant-input-affix-wrapper-outlined
    .ant-input-focused::placeholder {
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

  .input-prefix-container {
    position: relative;
    .input-prefix {
      position: absolute;
      top: 25%;
      left: 17px;
      svg {
        width: 20px !important;
        font-size: 20px;
      }
    }
    .ant-input {
      padding-left: 45px;
    }
  }
  .input-suffix-container {
    position: relative;
    .input-suffix {
      position: absolute;
      top: 25%;
      right: 17px;
      svg {
        width: 20px !important;
        font-size: 20px;
      }
    }
    .ant-input {
      padding-right: 45px;
    }
  }
`;
