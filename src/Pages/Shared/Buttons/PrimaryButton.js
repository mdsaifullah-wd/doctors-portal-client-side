import React from 'react';

const PrimaryButton = ({ children }) => {
  return (
    <button className='btn btn-primary font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary hover:from-accent hover:to-accent hover:border-accent'>
      {children}
    </button>
  );
};

export default PrimaryButton;
