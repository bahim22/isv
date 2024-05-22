import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: 320,
    height: 320,
    marginTop: theme.spacing(8),
    borderRadius: theme.shape.borderRadius,
    boxShadow:
        theme.palette.mode === 'light'
            ? '0 0 12px 8px hsla(220, 25%, 80%, 0.2)'
            : '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    outline: '1px solid',
    /* backgroundImage: `url(${
        theme.palette.mode === 'light'
            // ? '/static/images/templates/templates-images/hero-light.png'
            : '/static/images/templates/templates-images/hero-dark.png'
    })`, */
    backgroundImage: `url(assets/isv320.png)`,
    // backgroundSize: 'cover',
    // backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    outlineColor: theme.palette.mode === 'light' ? 'hsla(220, 25%, 80%, 0.5)' : 'hsla(210, 100%, 80%, 0.1)',
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(5),
        height: 320,
    },
}));

export default function Hero() {
    return (
        <Box
            id='hero'
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
                        : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
                backgroundRepeat: 'no-repeat',
            })}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20, md: 30 },
                    pb: { xs: 8, sm: 12, md: 16 },
                }}>
                <Stack
                    spacing={2}
                    alignItems='center'
                    useFlexGap
                    sx={{ width: { xs: '100%', sm: '70%', md: '50%', lg: '40%' } }}>
                    <Typography
                        variant='h1'
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'row', sm: 'row', md: 'row', lg: 'row' },
                            alignItems: 'center',
                            fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                        }}>
                        Infinite Success Virtual
                        {/* <Typography
                            component='aside'
                            variant='aside'
                            sx={{
                                fontSize: 'medium',
                                color: (theme) => (theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'),
                            }}>
                            <Link href='https://www.ariseworkfromhome.com/terms-of-use/' color='primary'>
                                Click Here to Register Now!
                            </Link> */}
                    </Typography>
                    <Typography
                        variant='span'
                        component='h3'
                        textAlign='center'
                        sx={{
                            // fontSize: 'medium',
                            color: (theme) => (theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'),
                        }}>
                        <Link href='https://www.register.arise.com/' color='primary'>
                            Register Today
                        </Link>
                    </Typography>
                    <Typography textAlign='center' color='text.secondary' sx={{ width: { sm: '100%', md: '80%' } }}>
                        Amazing opportunities are just a few steps away! We are a Remote Call Center delivering
                        high-quality opportunities for candidates to have the comfort of Working from Home, while
                        creating generational wealth.
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={1}
                        useFlexGap
                        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}>
                        {/* <InputLabel htmlFor='email-hero' sx={visuallyHidden}>
                            Email
                        </InputLabel>
                        <TextField
                            id='email-hero'
                            hiddenLabel
                            size='small'
                            variant='outlined'
                            aria-label='Enter your email address'
                            placeholder='Your email address'
                            inputProps={{
                                autoComplete: 'off',
                                'aria-label': 'Enter your email address',
                            }}
                        /> */}
                        <Button variant='outlined' color='secondary'>
                            <Link href='mailto:va.crescentlove3llc@gmail.com'>
                                <strong>Email Me To get Started</strong>
                            </Link>
                        </Button>
                    </Stack>
                    <Typography textAlign='center' color='text.secondary' sx={{ width: { sm: '100%', md: '80%' } }}>
                        Now with the option of purchasing the rights to own your own Virtual Call Center for $750! This
                        includes a course and training with the added benefit of partnering with Fortune 500 companies
                        that will provide the opportunities.
                    </Typography>
                </Stack>
                <StyledBox id='image' />
            </Container>
        </Box>
    );
}
