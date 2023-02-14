import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

export type FDropdownProps = {
    fullWidth: boolean;
    inputLabelId: string;
    inputLabel: string;
    value: any;
    inputSelectId: string;
    onChange: (e: SelectChangeEvent) => void;
    options: {
        value: string | number;
        label: string;
    }[];
};

export const FDropdown: React.FC<FDropdownProps> = ({
    fullWidth,
    inputLabelId,
    inputLabel,
    value,
    inputSelectId,
    onChange,
    options,
}) => {
    return (
        <FormControl fullWidth={fullWidth}>
            <InputLabel id={inputLabelId}>{inputLabel}</InputLabel>
            <Select
                labelId={inputLabelId}
                id={inputSelectId}
                value={value}
                onChange={onChange}
                label={inputLabel}
            >
                {options.map((option) => (
                    <MenuItem value={option.value} key={option.label}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
