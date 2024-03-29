import React, { useMemo } from 'react';

import { InputProps } from './Input.types';
import { TextField } from 'shared/components';

export const Input: React.FC<InputProps> = ({ type = 'text', label, input, meta, placeholder }) => {
  const errorMessage = useMemo(() => {
    if ((meta.touched && meta.error) || (!meta.dirtySinceLastSubmit && meta.submitError)) {
      return meta.error || meta.submitError;
    }

    return undefined;
  }, [meta]);

  return (
    <TextField
      id={input.name}
      label={label}
      style={{ margin: '16px 0 16px 0' }}
      placeholder={placeholder}
      fullWidth
      margin="normal"
      variant="outlined"
      type={type}
      value={input.value}
      onChange={input.onChange}
      InputLabelProps={{
        shrink: true,
      }}
      helperText={errorMessage}
    />
  );
};
