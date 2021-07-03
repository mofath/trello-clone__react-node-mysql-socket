import React, { forwardRef } from 'react';
import './index.scss';

function FormToggler(props, ref) {

  return (
    <div
      className="auth-form__toggler"
      ref={ref}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
}

export default forwardRef(FormToggler);
