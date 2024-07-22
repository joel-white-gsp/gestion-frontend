import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RingProgress } from "@ant-design/plots";

export default function RingProgressChart(props) {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#DFBC63', '#FFF8E7'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => '',
      },
    },
  };

  return (
    <Wrapper>
      <RingProgress {...config} {...props} />
    </Wrapper>
  );
}

const Wrapper = styled.div`

`
