import React from "react";
import { Column } from "@ant-design/plots";
import styled from "styled-components";
import { asPrice } from 'utils/text'

export default function ColumnLineChart(props) {
  const config = {
    data: props.data,
    xField: "date",
    yField: "enrollments",
    legend: false,
    height: 250,
    color: '#FFC427',
    xAxis: {
      label: {
        formatter: (v) => v,
      },
    },
    yAxis: {
      label: {
        formatter: (v) => v,
      },
    },
    
    minColumnWidth: 30,
    maxColumnWidth: 30,
  };
  return (
    <Wrapper>
      <Column {...config} />
    </Wrapper>
  );
}
export const Wrapper = styled.div``;
