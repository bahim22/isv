import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container
            id='faq'
            sx={{
                pt: { xs: 4, sm: 10 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}>
            <Typography
                component='h2'
                variant='h4'
                color='text.primary'
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}>
                Frequently asked questions
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1d-content'
                        id='panel1d-header'>
                        <Typography component='h3' variant='subtitle2'>
                            What equipment do I need?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='body2' gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
                            At a minimum, you will need these basics: A Computer, A noise-cancelling USB headset, A
                            high-speed internet, A keypad/headset phone connection Certain client programs may have
                            additional equipment requirements. Prior to selecting a client program, you will have access
                            to the Opportunity Announcement which details any additional requirements above and beyond
                            the ones listed in the System & Equipment Policy.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel2d-content'
                        id='panel2d-header'>
                        <Typography component='h3' variant='subtitle2'>
                            How soon can I start working?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='body2' gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
                            Start earning in 2 to 5 weeks How soon you start working and earning money depends on how
                            quickly you register, and what Client Opportunity you select. Once you have registered and
                            set-up your user account, your next step is to enroll in a client opportunity. As part of
                            the opportunity, you will have to take a certification course which will give you the
                            details about the client and project you have selected, as well as the client’s systems
                            which you will be using during servicing.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel3d-content'
                        id='panel3d-header'>
                        <Typography component='h3' variant='subtitle2'>
                            How long do certificate courses take?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='body2' gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
                            Certification courses may take as little as two weeks or as long as five weeks to complete
                            depending on the opportunity selected. Some opportunities provide an “earn while you learn”
                            element to certification, where you will be taking calls while learning and earning revenue
                            during the certification period.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel4d-content'
                        id='panel4d-header'>
                        <Typography component='h3' variant='subtitle2'>
                            What hours are you available to help with registering?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='body2' gutterBottom sx={{ maxWidth: { sm: '100%', md: '70%' } }}>
                            Registration support is available Monday – Friday from 8:00 a.m. to Midnight Eastern Time
                            and Saturday from 9:00 a.m. to 5:00 p.m. Eastern Time in the U.S. and Canada and, Monday –
                            Friday from 9:00 a.m. to 4:00 p.m. in the UK. If you are stuck or confused when signing up
                            for the platform,
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}
