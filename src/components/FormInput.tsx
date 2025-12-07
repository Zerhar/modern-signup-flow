import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { TextField } from '@mui/material';

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<any>; 
  label: string;
  type?: string;
  fullWidth?: boolean;
  select?: boolean;
  children?: React.ReactNode;  
}

export const FormInput = <T extends FieldValues>({ 
  name, 
  control, 
  label, 
  type = "text",
  fullWidth = true,
  select = false,
  children
}: FormInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          error={!!error}
          helperText={error?.message}
          fullWidth={fullWidth}
          size="small"
          variant="outlined"
          select={select} 
        >
          {children} 
        </TextField>
      )}
    />
  );
};