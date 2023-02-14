import { TextField } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

export type FTimeInputProps = {
    label: string;
    inputFormat: string;
    value: Dayjs | null;
    onChange: (newValue: Dayjs | null) => void;
    fullWidth: boolean;
    textFieldDisabled: boolean;
    minDate: Dayjs | null;
    maxDate: Dayjs | null;
};

export const FTimeInput: React.FC<FTimeInputProps> = ({
    label,
    inputFormat,
    value,
    onChange,
    fullWidth,
    textFieldDisabled,
    minDate,
    maxDate,
}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                label={label}
                inputFormat={inputFormat}
                value={value}
                onChange={onChange}
                disableMaskedInput
                {...(minDate && { minDate })}
                {...(maxDate && maxDate)}
                renderInput={(params) => (
                    <TextField {...params} disabled={textFieldDisabled} fullWidth={fullWidth} />
                )}
            />
        </LocalizationProvider>
    );
};
