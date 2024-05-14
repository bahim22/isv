import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import ProTip from './ProTip';
import LandingPage from './LandingPage';
import FormPro from './Form';
import Divider from '@mui/material/Divider';

function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://m.facebook.com/people/Infinite-Success-Virtual-LLC/61557695124632'>
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
            {/* <Container maxWidth='md'> */}
            {/* <Box sx={{ my: 4 }} alignContent={'right'}> */}
            {/* <FormPro /> */}
            {/* <Divider />
            <Typography variant='h4' align='right' component='h2' sx={{ mb: 2 }}>
                Infinite Success Virtual
            </Typography>
            <Copyright /> */}
            {/* </Box> */}
            {/* </Container> */}
        </>
    );
}
