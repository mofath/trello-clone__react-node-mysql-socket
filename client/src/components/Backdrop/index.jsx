import React from 'react';
import './index.scss';

export default function Backdrop(props) {
  return props.show ? (
    <div className="backdrop" onClick={props.onclick}>
      {props.children}
    </div>
  ) : null;
}
