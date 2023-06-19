import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  LinearProgress,
  Link,
  Stack,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { ReactComponent as SupportIcon } from '../assets/icons/Support.svg'
import Details from '../components/Details';

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 2.75 }}>
      <Box display="flex" justifyContent="space-between" sx={{ mb: { xs: 4, md: 0 } }}>
        <IconButton color="primary">
          <ArrowBackIcon />
        </IconButton>

        <Stack direction="row" spacing={1} display="flex" alignItems="center">
          <SupportIcon />
          <Button>
            <Typography textTransform="capitalize">Get Support</Typography>
          </Button>
        </Stack>
      </Box>

      <Stack display="flex" direction="column" alignItems="center" mb={5} spacing={2}>
        <Badge
          color="success"
          width={16}
          height={16}
          overlap="circular"
          badgeContent={<FlashOnIcon sx={{ fontSize: 8 }} />}
        >
          <Box
            width={60}
            height={60}
            borderRadius={60}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ borderWidth: 3, borderColor: "#008A05", borderStyle: "solid" }}
          >
            <PrintshopOutlinedIcon sx={{ fontSize: 40, color: 'grey.800' }} />
          </Box>
        </Badge>

        <Stack display="flex" direction="column" alignItems="center">
          <Box display="flex" alignItems="flex-end">
            <Typography variant="h4" fontWeight="700">EpsonC500</Typography>
            <Link sx={{ py: 1, ml: 1, fontSize: 12 }}>Edit</Link>
          </Box>

          <Stack display="flex" direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2">Network Printer</Typography>
            <Typography variant="caption" color="grey.500" sx={{ lineHeight: '12px' }}>Last checked - 31 days ago</Typography>
          </Stack>
        </Stack>

        <Stack spacing={0.5} direction="column">
          <Box pl={1} pr={2}>
            <LinearProgress
              sx={{ height: 6, borderRadius: 3, width: 200 }}
              variant="determinate"
              color="success"
              value={100}
            />
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Stack direction="column" alignItems="center">
              <Divider orientation="vertical" sx={{ height: 6 }} />
              <Typography variant="caption" color="grey.800">2h</Typography>
            </Stack>

            <Stack direction="column" alignItems="center">
              <Divider orientation="vertical" sx={{ height: 6 }} />
              <Typography variant="caption" color="grey.800">1h</Typography>
            </Stack>

            <Stack direction="column" alignItems="center">
              <Divider orientation="vertical" sx={{ height: 6 }} />
              <Typography variant="caption" color="grey.800">Now</Typography>
            </Stack>
          </Box>
        </Stack>

        <Box sx={{ textAlign: 'center' }}>
          <Typography sx={{ color: 'success.main' }} variant="caption">
            Online
          </Typography>
          <Typography variant="caption">
            {` - This device lost power - `}
          </Typography>
          <Link>
            <Typography variant="caption">view details</Typography>
          </Link>
        </Box>
      </Stack>

      <Details />
    </Container>
  );
};

export default Home;
