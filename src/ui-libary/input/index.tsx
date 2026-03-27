import type { ReactNode } from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd';
import { Label, Subtext } from '../typography';
import { Flex } from '../flex/index';

type Common = {
  isError?: boolean;
  errorMessage?: string;
  errorMessageClass?: string;
  customClass?: string;
  label?: string | ReactNode;
};

export type InputComponentProps = InputProps & Common;

export const InputField = ({
  label,
  isError,
  errorMessageClass,
  customClass,
  errorMessage,
  required,
  size = 'large',
  id,
  ...rest
}: InputComponentProps) => (
  <Flex flexGrow className={customClass} gap="4px" flexDirection="column">
    
    {label && (
      <Label htmlFor={id}>
        {label} {required && '*'}
      </Label>
    )}

    <Input
      id={id}
      {...rest}
      size={size}
      status={isError ? 'error' : undefined}
    />

    {isError && (
      <Subtext color="red" className={errorMessageClass}>
        {errorMessage}
      </Subtext>
    )}
  </Flex>
);