import React from 'react';
import 'react-date-range/dist/styles.css';
//theme css file
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from 'react-date-range';
import {Button} from '@material-ui/core';

function DatePicker() {
  return (
    <div className="datepicker">
      <DatePicker />
      <Button>Search Date</Button>
    </div>
  );
}

export default DatePicker;
