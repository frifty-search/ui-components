import { Stack, StackProps } from '@mui/material';
import React from 'react';

export type FStackProps = StackProps;

export const FStack: React.FC<FStackProps> = ({
    children = null,
    direction = 'column',
    spacing = 0,
    divider = null,
    sx = {},
}: FStackProps) => {
    return (
        <Stack
            spacing={spacing}
            mx={2}
            my={5}
            direction={direction}
            sx={sx}
            divider={divider !== null && divider}
        >
            {children !== null && children}
        </Stack>
    );
};
