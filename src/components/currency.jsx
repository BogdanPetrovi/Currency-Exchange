import React from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function From(props) {
  function changeHandle(e) {
    props.change(e);
  }

  return(
    <div className="field">
      <h2>{props.name}</h2>
      <Select
          value={props.currentTo !== undefined ? props.currentTo : props.currentFrom }
          name={props.name}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          onChange={changeHandle}
          sx={{ minWidth: 300, borderRadius: 3, backgroundColor: "white", cursor: "pointer" }}
        >
        {props.currencies.map((item, index) => (
          <MenuItem value={item.name} key={index} sx={{ color:"black" }}>{item.name}</MenuItem>
        ))}
      </Select>
    </div>
    
  );
}