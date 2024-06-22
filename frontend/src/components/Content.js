import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const Content = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <Toolbar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                backgroundColor: '#444',
                color: '#fff',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Main Chart
              </Typography>
              <div>Chart content...</div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                backgroundColor: '#444',
                color: '#fff',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Secondary Chart
              </Typography>
              <div>Chart content...</div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#444',
                color: '#fff',
              }}
            >
              <Typography variant="h6" gutterBottom>
                Recent Orders
              </Typography>
              <div>Order content...</div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Content;
