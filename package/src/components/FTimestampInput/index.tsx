import { TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

export type FTimestampInputProps = {
    label: string;
    inputFormat: string;
    value: Dayjs | null;
    onChange: (newValue: Dayjs | null) => void;
    fullWidth: boolean;
    textFieldDisabled: boolean;
    minDate: Dayjs | null;
    maxDate: Dayjs | null;
};

export const FTimestampInput: React.FC<FTimestampInputProps> = ({
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
            <DateTimePicker
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
