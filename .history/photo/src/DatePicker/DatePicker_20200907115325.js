import React from 'react';
import 'react-date-range/dist/styles.css';
//theme css file
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from 'react-date-range';

function DatePicker() {
  return (
    <div className="datepicker">
      <DateRangePicker />
      <button
    </div>
  );
}

export default DatePicker;
