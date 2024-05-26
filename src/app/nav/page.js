'use client'

import React, { useMemo, useState } from 'react'

import Switch from '@mui/material/Switch';
import styles from '../style/Home.module.css'
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Teko  } from 'next/font/google'
 
const roboto = Teko ({
    weight: '500',
    subsets: ['latin'],
  })
export default function page() {
    
const [icon, seticon] = useState(false);

const ic=(e)=>{
    seticon(e.target.value)
    console.log(icon);
    seticon(!icon)
}

const [input, setinput] = useState([]);
const [arr, setarr] = useState();

const ar=()=>{
setarr([...input])


}
const i=useMemo(()=>{


    return console.log("arr ",arr);
},[arr])
  return (
    <div className={icon?styles.home:styles.nav} >page
fsdfdsa




    {/* <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack> */}
  

    
<h2   className={roboto.className }>this is roboto font google font</h2>




<div className=' flex justify-center'>

      <Switch   onClick={(e)=>ic(e)}{...label} />
</div>

{
    icon?<h1>is icon on </h1>:<h1>icon is off now</h1>
}

<div className=' flex justify-center'>

<input onChange={(e)=>setinput(e.target.value)} type="text" />
<button onClick={()=>ar()}>click</button>
</div>


    </div>
  )
}

