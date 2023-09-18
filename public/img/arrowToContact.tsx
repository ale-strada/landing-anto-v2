
import React from 'react';

const ArrowComponent = (props: any) => {
  const strokeColor = props.strokeColor;

  return (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6667 1L22.6667 11L12.6667 21M21.2778 11H1"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowComponent;