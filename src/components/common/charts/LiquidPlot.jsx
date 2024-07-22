import React from "react";
import styled from "styled-components";
import { Liquid } from "@ant-design/plots";
import { 
  getSystemSetting, hasSystemSetting 
} from "utils/systemSetting";

export default function LiquidPlot(props) {
  const config = {
    percent: props.percent || 0,
    outline: {
      border: 3,
      distance: 5,
    },
    wave: {
      length: 128,
    },
    color: hasSystemSetting()?
      getSystemSetting('theme')['palette']['primary']
      : "#00B4EE",
  };
  return (
    <Wrapper>
      <Liquid {...config} />
    </Wrapper>
  );
}
export const Wrapper = styled.div`
  .g2-html-annotation {
    color: #0a0a0a;
    font-size: 14px !important;
  }
`;
