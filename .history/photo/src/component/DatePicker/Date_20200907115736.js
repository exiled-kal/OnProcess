import React from 'react';
import DatePicker from 'react-datepicker';
import {Button} from '@material-ui/core';

function Date() {
  return (
    <div className="datepicker">
      <DatePicker />
      <Button>Search Date</Button>
    </div>
  );
}

export default Date;
