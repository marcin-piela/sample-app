import React from 'react';
import { Field, Form } from 'react-final-form';

import { Input, Button } from 'shared/components';
import { useLocale } from 'shared/hooks';
import { LoginFormProps } from './LoginForm.types';
import useStyles from './LoginForm.styles';

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, submitErrors, dirtySinceLastSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <Input
                label={formatMessage({ id: 'login.email' })}
                input={input}
                meta={meta}
                type="text"
                placeholder={formatMessage({ id: 'login.enterEmail' })}
              />
            )}
          </Field>

          <Field name="password">
            {({ input, meta }) => (
              <Input
                label={formatMessage({ id: 'login.password' })}
                type="password"
                input={input}
                meta={meta}
                placeholder={formatMessage({ id: 'login.enterPassword' })}
              />
            )}
          </Field>

          {!submitting && submitErrors && submitErrors.id && !dirtySinceLastSubmit && (
            <span className={classes.errorMessage}>{formatMessage({ id: submitErrors.id })}</span>
          )}

          <Button variant="contained" type="submit" disabled={pristine || submitting} color="primary">
            {formatMessage({ id: 'login.login' })}
          </Button>
        </form>
      )}
    />
  );
};
