import React from 'react';
import 'react-date-range/dist/styles.css';
//theme css file
import 'react-date-range/dist/theme/default.css';


function DatePicker() {
  return (
    <div className="datepicker">
      <DateRangePicker />
    </div>
  );
}

export default DatePicker;
