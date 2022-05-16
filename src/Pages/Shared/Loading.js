import React from 'react';

const Loading = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex items-center justify-center '>
      <div className='w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin'></div>
    </div>
  );
};

export default Loading;
