import React from 'react';
import './Search.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Search() {
  return (
    <div className="datepicker">
      <DatePicker
        selected=""
        value="Today's date"
        // onChange={this.handleChange}
      />
    </div>
  );
}

export default Search;
