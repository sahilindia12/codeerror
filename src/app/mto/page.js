
'use client'
import React from 'react'
import BackupIcon from '@mui/icons-material/Backup';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';

import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import { toast } from 'react-toastify';
export default function page() {
  return (
    <div>

<AccessTimeFilledSharpIcon  className=' size-[144px] mx-10 text-cyan-500'/>
<h1> this isi metical ioc</h1>
<BackupIcon className=' size-9 text-green-500'/>
      <div className=' flex justify-center '>  <button onClick={()=>toast.success("this is icon with metril ui")}>< AppBlockingIcon    className='  text-pink-400 size-[22vh]'  ></AppBlockingIcon></button> </div>
    </div>
  )
}
