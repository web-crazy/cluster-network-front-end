import { Box, Typography } from '@mui/material';

const TabLabel = ({ label }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width={8} height={8} borderRadius={2} mr={1.5} bgcolor="success.main" />
      <Typography sx={{ color: 'common.black', textTransform: 'initial', fontWeight: 'bold' }}>
        {label}
      </Typography>
    </Box>
  );
};

export default TabLabel;
