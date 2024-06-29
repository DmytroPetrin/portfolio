"use client";
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import  {Box, FormControl, MenuItem, Select, SelectChangeEvent, Toolbar, Typography} from '@mui/material';
import style from '../page.module.css'
import Link from 'next/link';
import es_flag from '../assets/es_flag.png'
import en_flag from '../assets/en_flag.png'
import Image from 'next/image';

export default function MenuAppBar() {
const [language, setLanguge] = useState<string>("es")
 const arrNavBar = ["hero", "about", "experience", "education", "projects", "skills"]



 const handleChange = (event: SelectChangeEvent) =>{
    setLanguge(event.target.value as string)
 }

  return (
       <AppBar position="sticky" className={style.appBarStyle}>
        <Toolbar>
          <Box className={style.rowAppbarStyle}>
              {arrNavBar.map((value)=> 
               <Link href={`#${value}`}  className={style.appBarLink}>
               <Typography>{value}</Typography>
           </Link>
              )}
          
          </Box>
          <Box>
          <FormControl fullWidth>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={language}
    label="language"
    onChange={handleChange}
    sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    }}
  >
    <MenuItem value={"es"}>
              <Image src={es_flag} alt="spanish flag" className={style.languageImage}/>
    </MenuItem>
    <MenuItem value={"en"}>
              <Image src={en_flag} alt="english flag"  className={style.languageImage}/>
    </MenuItem>
    </Select>
</FormControl>
          </Box>
        </Toolbar>
      </AppBar>
    
  );
}