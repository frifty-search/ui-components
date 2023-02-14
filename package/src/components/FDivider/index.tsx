import { Divider, DividerProps } from '@mui/material';
import React from 'react';

export type FDividerProps = DividerProps;

export const FDivider: React.FC<FDividerProps> = ({
    variant = 'fullWidth',
    textAlign = 'center',
    sx = {},
    orientation = 'horizontal',
    light = false,
    children,
}) => {
    return (
        <Divider
            variant={variant}
            textAlign={textAlign}
            sx={sx}
            orientation={orientation}
            light={light}
        >
            {children !== null && children}
        </Divider>
    );
};
