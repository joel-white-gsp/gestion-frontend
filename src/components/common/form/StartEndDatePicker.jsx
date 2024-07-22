import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

export default function StartEndDatePicker({
  value, onChange, ...props
}) {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  useEffect(() => {
    if (value) {
      setStartDate(value.split('|')[0])
      setEndDate(value.split('|')[1])
    } else {
      setStartDate('')
      setEndDate('')
    }
  }, [value])

  return (
    <RangePicker
      value={(startDate && endDate) ? 
        [moment(startDate), moment(endDate)] 
      : ''}
      onChange={(v) => {
        if (v) {
          onChange(
            moment(v[0]).format('YYYY-MM-DD')+'|'+
            moment(v[1]).format('YYYY-MM-DD')
          )
        } else {
          onChange('')
        }
      }}
      style={{
        height: props.height || '34px',
        width: props.width || 'auto',
      }}
      {...props}
    />
  );
};
