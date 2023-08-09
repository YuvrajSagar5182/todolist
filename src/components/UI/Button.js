import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'} //if means type will be props.type if it is not NULL, else it will be button type...
      onClick={props.onClick} //It will be passed from its Parent component! [Our case: The FORM SUBMISSION]
    >
      {props.children}
    </button>
  );
};

export default Button;
