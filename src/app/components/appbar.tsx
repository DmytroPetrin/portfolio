import React from 'react';
import AppBar from '@mui/material/AppBar';
import  {Box, Button, Toolbar, Typography} from '@mui/material';
import style from '../page.module.css'
import Link from 'next/link';
import Skills from './skills';


export default function MenuAppBar() {

 

  return (
    
       <AppBar position="sticky" className={style.appBarStyle}>
        <Toolbar>
            <Link href='#skills'>XXX</Link>
             <Typography>Hola mundo</Typography>
          
        </Toolbar>
      </AppBar>
    
  );
}