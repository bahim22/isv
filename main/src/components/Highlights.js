import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
    {
        icon: <SettingsSuggestRoundedIcon />,
        title: 'Partnered with Fortune 500 companies',
        description:
            'Working with Arise Platform helping companies looking for candidates to assist customers with various needs including: booking, insurance claims, hotel packages, etc.',
    },
    {
        icon: <ConstructionRoundedIcon />,
        title: 'Built to last',
        description:
            'Take control of your world and let Infinite Success Virtual LLC. help jump start Empowering your Success Journey!!!',
    },
    {
        icon: <ThumbUpAltRoundedIcon />,
        title: 'option of purchasing the rights to own your own Virtual Call Center.',
        description:
            'Purchase your own Virtual Call Center for $750 with a course  & training plus Fortune 500 companies that provides the work from home jobs',
    },
    {
        icon: <AutoFixHighRoundedIcon />,
        title: 'Required Hours',
        description:
            'We require employees to work 15 hrs a week minimum to stay aboard, yet you can work as much as you please as an independent contractor.',
    },
    // {
    //     icon: <SupportAgentRoundedIcon />,
    //     title: 'Reliable support',
    //     description: 'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
    // },
    {
        icon: <SupportAgentRoundedIcon />,
        title: 'Client Opportunities',
        description:
            'After completing registration, you will have access to dozens of projects for clients and brands looking for customer support services – these are called Client Opportunities. ',
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'Certification Courses',
        description:
            'When you pick a Client Opportunity, you will also enroll in a certification course that will prepare you to support the client project you selected.',
    },
];

export default function Highlights() {
    return (
        <Box
            id='highlights'
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 4, sm: 5 },
                color: 'white',
                bgcolor: 'hsl(220, 30%, 2%)',
            }}>
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 6 },
                }}>
                <Box
                    sx={{
                        width: { sm: '100%', md: '60%' },
                        textAlign: { sm: 'left', md: 'center' },
                    }}>
                    <Typography component='h2' variant='h4'>
                        Highlights
                    </Typography>
                    <Typography variant='body1' sx={{ color: 'grey.400' }}>
                        Enjoy reliable job opportunities with our great partners! Come Take Over with Infinite Success
                        Virtual LLC!
                    </Typography>
                </Box>
                <Grid container spacing={2.5}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Stack
                                direction='column'
                                color='inherit'
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'hsla(220, 25%, 25%, .3)',
                                    background: 'transparent',
                                    backgroundColor: 'grey.900',
                                    boxShadow: 'none',
                                }}>
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography fontWeight='medium' gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant='body2' sx={{ color: 'grey.400' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
