import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  LinearProgress,
  Link,
  Stack,
  Switch,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import PrinterImg from '../assets/images/printer.png';
import FridayImg from '../assets/images/friday.png';
import useAlert from '../hooks/useAlert';
import Loading from './Loading';

const Details = () => {
  const [tab, setTab] = useState(0);
  const { alert, isLoading } = useAlert();

  const handleChange = (event, tabVal) => {
    setTab(tabVal);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Device Details" />
          <Tab label="Power Details" />
        </Tabs>
      </Box>

      {isLoading && <Loading />}

      {!isLoading && tab === 0 && (
        <Box>
          <Grid container sx={{ py: 4 }} spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" mb={2.5}>
                Printer Details
              </Typography>

              <Box mb={1}>
                <Typography variant="body2" fontWeight="bold" component="span">
                  Vendor: 
                </Typography>
                <Typography variant="body2" component="span"> Epson</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" fontWeight="bold" component="span">
                  Network Connection: 
                </Typography>
                <Typography variant="body2" component="span"> Wired</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" fontWeight="bold" component="span">
                  Upstream Name: 
                </Typography>
                <Typography variant="body2" component="span"> 10.128.12.54</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" fontWeight="bold" component="span">
                  Mac: 
                </Typography>
                <Typography variant="body2" component="span"> 00:E1:8C:FA:C5:3A</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" fontWeight="bold" component="span">
                  IP: 
                </Typography>
                <Typography variant="body2" component="span"> 10.128.12.54</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" fontWeight="bold" component="span">
                  Upstream Device Port: 
                </Typography>
                <Typography variant="body2" component="span"> N/A</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" fontWeight="bold" component="span">
                  Associated site: 
                </Typography>
                <Typography variant="body2" component="span"> Karwal_28761</Typography>
              </Box>

              <Box mb={1}>
                <Typography variant="body2" fontWeight="bold" component="span">
                  Power outlet: 
                </Typography>
                <Typography variant="body2" component="span"> Smart_outlet35367</Typography>
              </Box>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Box display="flex" alignItems="center">
                  <Switch defaultChecked />
                  <Typography variant="body2" component="span">Power on</Typography>
                </Box>

                <Button variant="outlined" color="primary" size="medium" sx={{ borderRadius: 2 }}>
                  Re-assign
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                borderRadius={2.5}
                borderColor="divider"
                sx={{ borderStyle: 'solid', borderWidth: 1 }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={1.5}
              >
                <img src={PrinterImg} alt="Printer" width={292} />
              </Box>

              <Stack direction="row" spacing={3} display="flex" justifyContent="flex-end">
                <Link>
                  <Typography variant="body2">Edit image</Typography>
                </Link>
                <Link>
                  <Typography variant="body2">Remove</Typography>
                </Link>
              </Stack>
            </Grid>
          </Grid>

          <Divider />

          <Box py={3}>
            <Typography variant="h6" fontWeight="bold" mb={3.5}>
              Printer Stats
            </Typography>

            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box
                  borderRadius={2.5}
                  boxSizing="border-box"
                  sx={{ width: '100%', border: 'solid 1px', borderColor: 'divider' }}
                  px={4}
                  py={2}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2" fontWeight="bold">Remaining toner</Typography>
                    <Typography variant="caption">Black toner</Typography>
                  </Box>

                  <Box px={0.5} mb={1}>
                    <LinearProgress
                      variant="determinate"
                      color="warning"
                      value={20}
                      sx={{ height: 6, borderRadius: 6 }}
                    />
                  </Box>

                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="caption">0%</Typography>
                    <Typography variant="caption">100%</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  borderRadius={2.5}
                  boxSizing="border-box"
                  sx={{ width: '100%', height: '100%', border: 'solid 1px', borderColor: 'divider' }}
                  px={4}
                  py={2}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2" fontWeight="bold">Paper level</Typography>
                    <Typography variant="caption">Paper available</Typography>
                  </Box>

                  <Box px={0.5} mb={1}>
                    <LinearProgress
                      variant="determinate"
                      value={100}
                      color="success"
                      sx={{ height: 6, borderRadius: 6 }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          <Box py={3}>
            <Typography variant="h6" fontWeight="bold" mb={2.5}>
              Device Alerts
            </Typography>

            <Accordion defaultExpanded elevation={0}>
              <AccordionSummary sx={{ px: 0 }} expandIcon={<ExpandMoreIcon />}>
                <NotificationsIcon sx={{ fontSize: 20, mr: 1   }} />

                <Box>
                  <Typography variant="body2" fontWeight="bold">Mar 22, 2022 - 8:01AM</Typography>

                  <Box display="flex">
                    <Typography variant="body2">Site device offline</Typography>
                    <Typography variant="body2">In Progress</Typography>
                    <Typography variant="body2">(occuring for 13 hours)</Typography>
                  </Box>
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 0, color: 'text' }}>
                <Grid container spacing={4}>
                  <Grid xs={12} md={6} item>
                    <Box mb={1}>
                      <Typography variant="body2" fontWeight="bold" component="span">Ticket number: </Typography>
                      <Typography variant="body2" component="span">{alert?.ticketNumber}</Typography>
                    </Box>

                    <Box mb={1}>
                      <Typography variant="body2" fontWeight="bold" component="span">Issue frequency: </Typography>
                      <Typography variant="body2" component="span">{alert?.issueFrequency}</Typography>
                    </Box>

                    <Box mb={1}>
                      <Typography variant="body2" fontWeight="bold" component="span">Changes in the last 24hrs: </Typography>
                      <Typography variant="body2" component="span">{alert?.changesIn24Hrs}</Typography>
                    </Box>
                  </Grid>

                  <Grid xs={12} md={6} item>
                    <Box mb={1}>
                      <Typography variant="body2" fontWeight="bold" component="span">IR flow triggered: </Typography>
                      <Typography variant="body2" component="span">{alert?.irFlowTriggered ? 'Yes' : 'No'}</Typography>
                    </Box>

                    <Box mb={1}>
                      <Typography variant="body2" fontWeight="bold" component="span">Bootcamp flow triggered: </Typography>
                      <Typography variant="body2" component="span">
                        <span>{alert?.bootcampTriggered ? 'Yes - ' : 'No - '}</span>
                        <Link>Bootcamp flow 24</Link>
                      </Typography>
                    </Box>

                    <Box mb={1}>
                      <Typography variant="body2" fontWeight="bold" component="span">Point of failure: </Typography>
                      <Typography variant="body2" component="span">
                        <span>{alert?.pointOfFailure}</span>
                        <span>{' - '}</span>
                        <Link>View details</Link>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Divider />

            <Box display="flex" justifyContent="flex-end" py={3}>
              <img alt="Powered By Friday" src={FridayImg} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Details;
