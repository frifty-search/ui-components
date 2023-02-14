import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material';
import React from 'react';

export type FRadioButtonProps = {
    formVariant: 'standard' | 'outlined' | 'filled';
    formLabelId: string;
    formLabel: string;
    formLabelVariant:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'caption';
    radioName: string;
    radioValue: any;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
    options: [
        {
            value: string;
            label: string;
        },
    ];
};

export const FRadioButton: React.FC<FRadioButtonProps> = ({
    formVariant,
    formLabelId,
    formLabel,
    formLabelVariant,
    radioName,
    radioValue,
    onChange,
    options,
}) => {
    return (
        <FormControl sx={{ m: 1 }} variant={formVariant}>
            <FormLabel id={formLabelId}>
                <Typography variant={formLabelVariant}>{formLabel}</Typography>
            </FormLabel>
            <RadioGroup
                aria-labelledby={formLabel}
                name={radioName}
                value={radioValue}
                onChange={onChange}
            >
                {options.map((value) => {
                    return (
                        <FormControlLabel
                            key={value.label}
                            value={value.value}
                            control={<Radio />}
                            label={value.label}
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    );
};
