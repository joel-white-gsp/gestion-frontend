/* eslint-disable react/prop-types */
import { TimePicker } from 'antd';
import React from 'react';
import moment from 'moment';

const { RangePicker } = TimePicker;

const StartEndTimePicker = ({ startTime, endTime, format, height, width, ...props }) => {
  return (
    <RangePicker
      value={startTime && endTime ? [moment(startTime, format), moment(endTime, format)] : ''}
      format={format}
      style={{
        height: height || '34px',
        borderRadius: 2,
        width: width || 'auto',
      }}
      {...props}
    />
  );
};

export default StartEndTimePicker;
