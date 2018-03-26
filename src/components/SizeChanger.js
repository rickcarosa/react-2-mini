import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer"
            onChange = { (event) => props.update(parseInt(event.target.value))}
            disabled = {props.allowEdit === 'false'}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}

// putting a + instead of parseInt also converts to a number