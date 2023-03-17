import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
  display: 'flex',
  justifyContent:'center'
});

export default function PaginationRounded() {
    return (
      <List>
    <Stack spacing={2} >
        <Pagination count={25} variant="outlined" shape="rounded" />
            </Stack>
            </List>
  );
}