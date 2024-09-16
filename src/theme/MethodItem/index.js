import React from 'react';

const MethodItem = ({ type = 'GET', children }) => {
  return (
    <div style={{ fontSize: '16px', fontWeight: 'bold' }} className="method-item">
      {children && (<div style={{ padding: '17px', background: '#EBF5FF', borderBottom: '1px solid #D2E9FF'  }}>
        {children}
      </div>)}
    </div>
  );
};
export default MethodItem;