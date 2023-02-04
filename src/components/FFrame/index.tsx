import { ThumbDown, ThumbDownOutlined, ThumbUp, ThumbUpOutlined } from '@mui/icons-material';
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';

type Apps = {
    appId: number;
    appName: string;
    appVersion: string;
    data: any;
    credits: {
        developer: [
            {
                name: string;
                url: string;
            },
        ];
        maintainer: [
            {
                name: string;
                url: string;
            },
        ];
        source: [
            {
                name: string;
                url: string;
            },
        ];
    };
};

export type FFrameProps = {
    data: Apps;
    query: string;
    likeValue: number;
    renderApps: (arg0: Apps) => React.ReactElement;
    onHandleLikeClick: (liked: number) => void;
};

type CreditsProps = {
    developer: [
        {
            name: string;
            url: string;
        },
    ];
    maintainer: [
        {
            name: string;
            url: string;
        },
    ];
    source: [
        {
            name: string;
            url: string;
        },
    ];
};

const Credits: React.FC<CreditsProps> = ({ developer, maintainer, source }) => {
    return (
        <Typography
            style={{
                marginTop: 1,
                marginBottom: 1,
            }}
        >
            {developer.length > 0 && `Developers -`}
            {developer.map((dev, index) => (
                <a
                    key={`developer-${index}`}
                    href={dev.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        textDecoration: 'underline',
                        color: 'inherit',
                        cursor: 'pointer',
                    }}
                >
                    {dev.name}
                    {index !== developer.length - 1 && ', '}
                </a>
            ))}
            {maintainer.length > 0 && <br />}
            {maintainer.length > 0 && `Contributors -`}
            {maintainer.length > 0 &&
                maintainer.map((maint, index) => (
                    <a
                        key={`maintainer-${index}`}
                        href={maint.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            textDecoration: 'underline',
                            color: 'inherit',
                            cursor: 'pointer',
                        }}
                    >
                        {maint.name}
                        {index !== maintainer.length - 1 && ', '}
                    </a>
                ))}
            {source.length > 0 && <br />}
            {source.length > 0 && `Sources - `}
            {source.length > 0 &&
                source.map((sour, index) => (
                    <a
                        key={`source-${index}`}
                        href={sour.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            textDecoration: 'underline',
                            color: 'inherit',
                            cursor: 'pointer',
                        }}
                    >
                        {sour.name}
                        {index !== source.length - 1 && ', '}
                    </a>
                ))}
        </Typography>
    );
};

export const FFrame: React.FC<FFrameProps> = ({
    data,
    renderApps,
    onHandleLikeClick,
    likeValue,
}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <Box
            sx={{
                width: 0.4,
                backgroundColor: 'background.main',
                mt: 5,
                mb: 4,
                borderRadius: '16px',
                border: '1px solid #3c4043',
            }}
        >
            {renderApps(data)}
            <Divider variant="fullWidth">
                <Typography sx={{ fontStyle: 'italic' }}>Powered by Frifty</Typography>
            </Divider>
            {open ? (
                <Box paddingLeft={4}>
                    <Credits
                        developer={data.credits.developer}
                        maintainer={data.credits.maintainer}
                        source={data.credits.source}
                    />
                </Box>
            ) : (
                <></>
            )}
            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                <Grid item>
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                        paddingLeft={3}
                    >
                        <Box m={1}>
                            <Typography variant="subtitle1">Is this useful ? </Typography>
                        </Box>
                        {likeValue === 0 ? (
                            <>
                                <Box m={1}>
                                    <IconButton
                                        onClick={() => onHandleLikeClick(1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <ThumbUpOutlined />
                                    </IconButton>
                                </Box>
                                <Box m={1}>
                                    <IconButton
                                        onClick={() => onHandleLikeClick(-1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <ThumbDownOutlined />
                                    </IconButton>
                                </Box>
                            </>
                        ) : likeValue === 1 ? (
                            <>
                                <Box m={1}>
                                    <IconButton
                                        onClick={() => onHandleLikeClick(0)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <ThumbUp />
                                    </IconButton>
                                </Box>
                                <Box m={1}>
                                    <IconButton
                                        onClick={() => onHandleLikeClick(-1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <ThumbDownOutlined />
                                    </IconButton>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box m={1}>
                                    <IconButton
                                        onClick={() => onHandleLikeClick(1)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <ThumbUpOutlined />
                                    </IconButton>
                                </Box>
                                <Box m={1}>
                                    <IconButton
                                        onClick={() => onHandleLikeClick(0)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <ThumbDown />
                                    </IconButton>
                                </Box>
                            </>
                        )}
                    </Box>
                </Grid>
                <Grid item>
                    {!open ? (
                        <Box
                            paddingRight={3}
                            p={1}
                            onClick={() => setOpen(true)}
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{ textDecoration: 'underline' }}
                                display="inline"
                            >
                                View Credits{' '}
                            </Typography>
                        </Box>
                    ) : (
                        <Box
                            paddingRight={3}
                            p={1}
                            onClick={() => setOpen(false)}
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{ textDecoration: 'underline' }}
                                display="inline"
                            >
                                Hide Credits{' '}
                            </Typography>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};
