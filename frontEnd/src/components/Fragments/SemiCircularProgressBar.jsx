import React from 'react';
import PropTypes from 'prop-types';

const SemiCircularProgressBar = ({ progress }) => {
  const radius = 40; // Radius lingkaran
  const circumference = Math.PI * radius; // Keliling setengah lingkaran
  const offset = circumference - (progress / 100) * circumference; // Offset untuk menentukan progress

  return (
    <div className="relative flex justify-center items-center w-full">
      <svg
        width={radius * 11}
        height={radius * 5}
        viewBox={`0 -5 ${radius * 2} ${radius}`}
        className="p-10"
      >
        <path
          d={`
            M ${radius},${radius}
            m -${radius},0
            a ${radius},${radius} 0 1,1 ${radius * 2},0
          `}
          fill="none"
          stroke="white"
          strokeWidth="10"
          className="opacity-70"
        />
        <path
          d={`
            M ${radius},${radius}
            m -${radius},0
            a ${radius},${radius} 0 1,1 ${radius * 2},0
          `}
          fill="none"
          stroke="#40513B"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-out"
        />
      </svg>
      <div className="absolute text-3xl bottom-14 font-medium text-putih font-utama">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

SemiCircularProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default SemiCircularProgressBar;
