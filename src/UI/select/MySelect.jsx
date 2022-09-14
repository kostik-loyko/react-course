import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={sort => onChange(sort.target.value)} className={classes.mySelect}>
      <option disabled value="">{defaultValue}</option>
      {options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
    </select>
  )
}

export default MySelect