import React from 'react';

const AnimatedLoading = () => {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center bg-white px-2 py-4">
      <div className="w-16 h-16 mb-4 border-t-2 border-b-2 border-purple-500 rounded-full animate-spin"></div>
      <p className="text-lg font-bold text-center text-purple-800 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default AnimatedLoading;