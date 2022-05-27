import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { Control, useController } from "react-hook-form";

export interface SelectOption {
  label?: string;
  value: number | string;
}
interface Props {
  name: string;
  label: string;
  control: Control<any>;
  disabled?: boolean;
  option: SelectOption[];
}

const SelectField = ({
  name,
  label,
  control,
  disabled,
  option,
  ...inputProps
}: Props) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });
  return (
    <FormControl
      fullWidth
      error={invalid}
      margin="normal"
      size="medium"
      variant="outlined"
      disabled={disabled}
    >
      <InputLabel id={`${name}_label`}>{label}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id={`${name}_label`}
        inputRef={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        inputProps={inputProps}
      >
        {option.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

export default SelectField;
