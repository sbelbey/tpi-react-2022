import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Error404() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">NO HAY NADA POR ACÁ</Alert>
    </Stack>
  );
}