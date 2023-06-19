import { Box, CircularProgress } from '@mui/material';

const Loading = () => (
  <Box display="flex" justifyContent="center" alignItems="center" py={10}>
    <CircularProgress />
  </Box>
);

export default Loading;
