import React from 'react';

export default ({ types }) => {
  return (
    <select id="type">
      {_.map(types, (type, i) => <option key={i}>{type}</option>)}
    </select>
  );
}