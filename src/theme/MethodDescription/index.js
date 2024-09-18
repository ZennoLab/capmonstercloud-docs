import React from 'react';

const MethodDescription = ({ children }) => {
  return (
    <div style={{ padding: '16px', paddingBottom: 0 }}>
      {children && (<div>
        {children}
      </div>)}
    </div>
  );
};
export default MethodDescription;