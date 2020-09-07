import React from 'react';
import './Search.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Button} from '@material-ui/core';

function Search() {
  return (
    <div className="datepicker">
      <DatePicker
        selected=""
        // onChange={this.handleChange}
      />
      <h3></h3></h3>
    </div>
  );
}

export default Search;
