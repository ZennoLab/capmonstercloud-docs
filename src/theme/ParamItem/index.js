import React from 'react';

const ParamItem = ({ title, required, type}) => {
  return (
    <div style={{fontSize: '16px', fontWeight: 'bold'}}>
      <code style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', marginRight: '5px'}}>{title}</code> 
      <span style={{ color: 'grey', fontSize: '14px', fontWeight: 500, marginRight: '5px'}}>{'<'}{type}{'>'}</span>
      {required && <span style={{  fontSize: '14px', color: 'red', fontWeight: 500}}>required</span>}
      {!required && <span style={{  fontSize: '14px', color: 'grey', fontWeight: 500}}>optional</span>}
      </div>
  );
};

export default ParamItem;