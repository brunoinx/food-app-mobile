import React from 'react';
import { Input, InputProps } from '../Input';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

export function ControlledTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: UseControllerProps<FormType> & InputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState }) => (
        <Input
          {...textInputProps}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
