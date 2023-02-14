import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

export type FTextFieldProps = TextFieldProps;

export const FTextField: React.FC<FTextFieldProps> = ({
    autoFocus = false,
    color = 'primary',
    defaultValue,
    disabled = false,
    error = false,
    fullWidth = false,
    helperText = null,
    multiline = false,
    name,
    placeholder,
    required = false,
    value = null,
    sx = {},
    variant = 'outlined',
    onChange,
    type,
}) => {
    return (
        <TextField
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            color={color}
            disabled={disabled}
            error={error}
            fullWidth={fullWidth}
            helperText={helperText !== null && helperText}
            multiline={multiline}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            sx={sx}
            variant={variant}
            onChange={onChange}
            type={type}
        />
    );
};
