
'use client'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// or
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
export default function BasicButtons() {
  return (
   <>
   
   <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="77vh"
      margin='55px'
    >
     <CircularProgress/>
    </Box>
<AddCircleOutlineIcon>


</AddCircleOutlineIcon>

<AccessTimeFilledSharpIcon>this is icon</AccessTimeFilledSharpIcon>
    <h1>thi is material ui </h1>
   </>
  );
}


