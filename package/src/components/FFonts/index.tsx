import { SxProps, Theme, Typography } from '@mui/material';
import React from 'react';

export type FJumboProps = {
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    children?: React.ReactNode;
    noWrap?: boolean;
    sx?: SxProps<Theme>;
    variant: 'h1' | 'h2' | 'h3';
};
export type FPlusProps = {
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    children?: React.ReactNode;
    noWrap?: boolean;
    sx?: SxProps<Theme>;
    variant: 'h4' | 'h5' | 'h6';
};
export type FRegularProps = {
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    children?: React.ReactNode;
    noWrap?: boolean;
    sx?: SxProps<Theme>;
    variant: 'body1' | 'body2';
};
export type FSmallProps = {
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    children?: React.ReactNode;
    noWrap?: boolean;
    sx?: SxProps<Theme>;
    variant: 'subtitle1' | 'subtitle2' | 'caption';
};

export const FJumbo: React.FC<FJumboProps> = ({
    align = 'inherit',
    children,
    noWrap = false,
    sx = {},
    variant = 'h3',
}) => {
    return (
        <Typography align={align} noWrap={noWrap} sx={sx} variant={variant}>
            {children !== null && children}
        </Typography>
    );
};

export const FPlus: React.FC<FPlusProps> = ({
    align = 'inherit',
    children,
    noWrap = false,
    sx = {},
    variant = 'h6',
}) => {
    return (
        <Typography align={align} noWrap={noWrap} sx={sx} variant={variant}>
            {children !== null && children}
        </Typography>
    );
};
export const FRegular: React.FC<FRegularProps> = ({
    align = 'inherit',
    children,
    noWrap = false,
    sx = {},
    variant = 'body1',
}) => {
    return (
        <Typography align={align} noWrap={noWrap} sx={sx} variant={variant}>
            {children !== null && children}
        </Typography>
    );
};
export const FSmall: React.FC<FSmallProps> = ({
    align = 'inherit',
    children,
    noWrap = false,
    sx = {},
    variant = 'subtitle1',
}) => {
    return (
        <Typography align={align} noWrap={noWrap} sx={sx} variant={variant}>
            {children !== null && children}
        </Typography>
    );
};
