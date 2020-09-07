import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Button} from '@material-ui/core';

function Date() {
  const [date, setDate] = useState()

  return (
    <div className="datepicker">
      <DatePicker
      //  selected="" onChange={handleChange} 

       />
      <Button>Today's Date</Button>
    </div>
  );
}

export default Date;
