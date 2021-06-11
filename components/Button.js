import React from 'react';

import BaseButton from '@material-ui/core/Button';

const Button = (props) => {
  return (
    <BaseButton {...props} style={{
      borderRadius: '5rem',
      paddingLeft: '1.8rem',
      paddingRight: '1.8rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      ...props.style
    }} />
  )
}

export default Button;