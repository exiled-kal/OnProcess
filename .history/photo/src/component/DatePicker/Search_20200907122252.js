import React, {useState} from 'react';
import './Search.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Button} from '@material-ui/core';

function Search() {
  const [todayDate, setTodayDate] = useState(new Date());

  const selection ={
    todayDate: todayDate,
    key: 'selection',
  }

  function handleChange(selected) {
    
  }

  return (
    <div className="datepicker">
      <DatePicker
       selected={select} onChange={handleChange}
      />
      <Button>Today's Date</Button>
    </div>
  );
}

export default Search;
