import React, { memo } from 'react';

const HighSpeed = memo(() => {
  console.log('render high speed');
  return <h1>HightSpeed</h1>;
});

export default HighSpeed;
