import { Button, ButtonProps } from '@mui/material';
import React from 'react';

export type FButtonProps = ButtonProps;

export const FButton: React.FC<FButtonProps> = ({
    sx = {},
    variant = 'outlined',
    onClick,
    type = 'submit',
    children,
}) => {
    return (
        <Button sx={sx} type={type} variant={variant} onClick={onClick}>
            {children !== null && children}
        </Button>
    );
};
