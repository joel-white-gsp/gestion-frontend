import React from 'react';
import { TimePicker as AntdTimePicker } from 'antd';
import moment from 'moment';

export default function TimePicker({ 
  date, height, width, ...props 
}) {
  return (
    <AntdTimePicker
      value={date ? moment(date) : ''}
      style={{
        height: height || '34px',
        borderRadius: 2,
        width: width || 'auto',
      }}
      {...props}
    />
  );
};
