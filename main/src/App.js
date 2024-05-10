import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import ProTip from './ProTip';
import LandingPage from './LandingPage';

function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://mui.com/'>
                Infinite Success Virtual
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function App() {
    return (
        <>
            <LandingPage />
            <Container maxWidth='sm'>
                <Box sx={{ my: 4 }}>
                    <Typography variant='h4' align='center' component='h2' sx={{ mb: 2 }}>
                        Infinite Success Virtual
                    </Typography>
                    {/* <ProTip /> */}
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}
