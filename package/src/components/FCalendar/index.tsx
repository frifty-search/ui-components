import { TextFieldProps } from '@mui/material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import React from 'react';

export type FCalendarProps = {
    orientation: 'portrait' | 'landscape';
    openTo: 'year' | 'day' | 'month';
    value: Dayjs | null;
    onChange: (newValue: Dayjs | null) => void;
    fullWidth: boolean;
    textFieldDisabled: boolean;
    shouldDisableDate: (day: Dayjs) => boolean;
    minDate: Dayjs | null;
    maxDate: Dayjs | null;
    renderInput: (params: TextFieldProps) => React.ReactElement;
};

export const FCalendar: React.FC<FCalendarProps> = ({
    orientation = 'landscape',
    openTo,
    value,
    onChange,
    shouldDisableDate,
    minDate,
    maxDate,
    renderInput,
}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
                orientation={orientation}
                openTo={openTo}
                value={value}
                {...(shouldDisableDate !== null && {
                    shouldDisableDate,
                })}
                {...(minDate && { minDate })}
                {...(maxDate && maxDate)}
                onChange={onChange}
                renderInput={renderInput}
            />
        </LocalizationProvider>
    );
};
