import React from 'react';

const MethodDescription = ({ children }) => {
  return (
    <div style={{ padding: '16px' }}>
      {children && (<div>
        {children}
      </div>)}
    </div>
  );
};
export default MethodDescription;