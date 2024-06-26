"use client";
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import  {Box, FormControl, MenuItem, Select, SelectChangeEvent, Toolbar, Typography} from '@mui/material';
import style from '../page.module.css'
import Link from 'next/link';
import es_flag from '../assets/es_flag.png'
import en_flag from '../assets/en_flag.png'
import Image from 'next/image';
import { useSelect } from './selectProvider';
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
import {translate} from './translate'

export default function MenuAppBar() {
const {language, setLanguage, estilo, setEstilo} = useSelect()
 const arrNavBar = ["contact", "about", "workExperience", "education", "skills", "projects"]



 const handleChange = (event: SelectChangeEvent) =>{
    setLanguage(event.target.value as string)
 }

 const handleChangeStyle = (event: SelectChangeEvent) =>{
  setEstilo(event.target.value as string)
 }

  return (
       <AppBar position="sticky" className={style.appBarStyle}>
        <Toolbar className={style.styleToolbar}>
          <Box className={style.rowAppbarStyle}>
              {arrNavBar.map((value)=> 
               <Link href={`#${value}`}  className={style.appBarLink} key={value}>
               {translate(value)}
           </Link>
              )}
          
          </Box>
          <Box>
          <FormControl className={style.mainSectionRow}>
          <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={estilo}
    label="language"
    onChange={handleChangeStyle}
    sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    }}
  >
    <MenuItem value={"light"}>
              <Image src={sun} alt="light style" className={style.estiloImage}/>
    </MenuItem>
    <MenuItem value={"dark"}>
              <Image src={moon} alt="dark style"  className={style.estiloImage}/>
    </MenuItem>
    </Select>
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