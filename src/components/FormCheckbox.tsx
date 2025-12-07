import React from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { Checkbox, FormControlLabel, FormHelperText, FormControl } from '@mui/material';

interface FormCheckboxProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<any>;
  label: string;
}

export const FormCheckbox = <T extends FieldValues>({ name, control, label }: FormCheckboxProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error} component="fieldset">
          <FormControlLabel
            control={
              <Checkbox 
                {...field} 
                checked={field.value} 
                size="small"
              />
            }
            label={<span className="text-sm text-slate-600">{label}</span>}
          />
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};