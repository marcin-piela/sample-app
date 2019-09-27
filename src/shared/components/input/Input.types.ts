import { FieldRenderProps } from 'react-final-form';

/**
 * Input Props
 */

export type InputProps = {
  label?: string;
  placeholder?: string;
  maxLength?: number;
  type?: 'password' | 'text';
  input: FieldRenderProps<string | number, HTMLInputElement>['input'];
  meta: FieldRenderProps<string | number, HTMLInputElement>['meta'];
};
