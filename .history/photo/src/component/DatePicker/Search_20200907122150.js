import React, {useState} from 'react';
import './Search.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Button} from '@material-ui/core';

function Search() {
  const [todayDate, setTodayDate] = useState(new Date());

  const selection ={
    todayDate: todayDate,
    key: 'selection'
  }

  return (
    <div className="datepicker">
      <DatePicker
       selected={selection} onChange={handleChange}
      />
      <Button>Today's Date</Button>
    </div>
  );
}

export default Search;
