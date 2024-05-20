import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormPro from '../Form';
import { visuallyHidden } from '@mui/utils';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
// import TikTokIcon from "@mui/icons-material/TikTok";

import SitemarkIcon from './SitemarkIcon';

function Copyright() {
    return (
        <>
            <Typography variant='body2' color='text.secondary' mt={1}>
                {'Copyright © '}
                <Link href='https://infinitesuccessvirtual.vercel.app'>Infinite Success Virtual&nbsp;</Link>
                {new Date().getFullYear()}
            </Typography>
            <Typography variant='body2' color='text.secondary' mt={1}>
                {'Developed By: © '}
                <Link href='https://github.com/bahim22'>EvoSync Solutions </Link>
                {new Date().getFullYear()}
            </Typography>
        </>
    );
}

export default function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 2, sm: 4 },
                py: { xs: 4, sm: 5 },
                textAlign: { sm: 'center', md: 'left' },
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}>
                    <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                        {/* <SitemarkIcon /> */}
                        {/* <Typography variant='body2' fontWeight={600} gutterBottom sx={{ mt: 2 }}>
                            Join the team today!
                        </Typography>
                        <Typography variant='body2' color='text.secondary' mb={2}>
                            Subscribe for weekly updates. No spams ever!
                        </Typography> */}
                        <Stack direction='row' spacing={1} useFlexGap>
                            {/* <FormPro /> */}
                            {/* <InputLabel htmlFor='email-newsletter' sx={visuallyHidden}>
                                Email
                            </InputLabel>
                            <TextField
                                id='email-newsletter'
                                hiddenLabel
                                size='small'
                                variant='outlined'
                                fullWidth
                                aria-label='Enter your email address'
                                placeholder='Your email address'
                                inputProps={{
                                    autoComplete: 'off',
                                    'aria-label': 'Enter your email address',
                                }}
                            />
                            <Button variant='contained' color='primary' sx={{ flexShrink: 0 }}>
                                Subscribe
                            </Button> */}
                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}>
                    <Typography variant='body2' fontWeight='medium'>
                        {/* <FormPro /> */}
                    </Typography>
                </Box>
                {/* <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}>
                    <Typography variant='body2' fontWeight='medium'>
                        Product
                    </Typography>
                    <Link color='text.secondary' variant='body2' href='#'>
                        Features
                    </Link>
                    <Link color='text.secondary' variant='body2' href='#'>
                        Testimonials
                    </Link>
                    <Link color='text.secondary' variant='body2' href='#'>
                        Highlights
                    </Link>
                    <Link color='text.secondary' variant='body2' href='#'>
                        Pricing
                    </Link>
                    <Link color='text.secondary' variant='body2' href='#'>
                        FAQs
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}>
                    <Typography variant='body2' fontWeight='medium'>
                        Company
                    </Typography>
                    <Link color='text.secondary' variant='body2' href='#'>
                        About us
                    </Link>
                    <Link color='text.secondary' variant='body2' href='#'>
                        Careers
                    </Link>
                    <Link color='text.secondary' variant='body2' href='#'>
                        Press
                    </Link>
                </Box> */}
                {/* <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}>
                    <Typography variant='body2' fontWeight='medium'>
                        Legal
                    </Typography>
                    <Link color='text.secondary' variant='body2' href='#'>
                        Terms
                    </Link>
                    <Link color='text.secondary' variant='body2' href='#'>
                        Privacy
                    </Link>
                    <Link color='text.secondary' variant='body2' href='#'>
                        Contact
                    </Link>
                </Box> */}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}>
                <div>
                    <Link
                        color='text.secondary'
                        variant='body2'
                        href='https://www.ariseworkfromhome.com/privacy-policy/'>
                        Privacy Policy
                    </Link>
                    <Typography display='inline' sx={{ mx: 0.5, opacity: 0.5 }}>
                        &nbsp;•&nbsp;
                    </Typography>
                    <Link color='text.secondary' variant='body2' href='https://www.ariseworkfromhome.com/terms-of-use/'>
                        Terms of Service
                    </Link>
                    <Copyright />
                </div>
                <Stack
                    direction='row'
                    justifyContent='left'
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}>
                    <IconButton
                        color='inherit'
                        href='https://m.facebook.com/people/Infinite-Success-Virtual-LLC/61557695124632'
                        aria-label='Facebook'
                        sx={{ alignSelf: 'center' }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color='inherit'
                        href='https://tiktok.com/@infinitesuccessvirtual'
                        aria-label='X'
                        sx={{ alignSelf: 'center' }}>
                        <TwitterIcon />
                    </IconButton>
                    {/* <IconButton
                        color='inherit'
                        href='https://www.linkedin.com/company/mui/'
                        aria-label='LinkedIn'
                        sx={{ alignSelf: 'center' }}>
                        <LinkedInIcon />
                    </IconButton> */}
                </Stack>
            </Box>
        </Container>
    );
}
