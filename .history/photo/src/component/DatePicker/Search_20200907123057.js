import React, {useState} from 'react';
import './Search.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Button} from '@material-ui/core';

function Search() {
  return (
    <div className="datepicker">
      <DatePicker />
      <Button>Today's Date</Button>
    </div>
  );
}

export default Search;
