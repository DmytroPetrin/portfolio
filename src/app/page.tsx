"use client"
import React from 'react'
import styles from "./page.module.css"
import Hero from './components/hero'
import About from './components/about'
import Experience from  './components/experience'
import Education from './components/education'
import Projects from './components/projects'
import Skills from './components/skills'
import MenuAppBar from './components/appbar'
import {useSelect} from './components/selectProvider'
import { Box } from '@mui/material'

export default function Home() {
  const {estilo} = useSelect()
  const mapStyle = new Map()
  mapStyle.set('light', [styles.main, styles.bodyBack])
  mapStyle.set('dark', [styles.mainDark, styles.bodyBackDark])

  return (
    <div className={mapStyle.get(estilo)[1]}>
    <MenuAppBar/>
   <main className={mapStyle.get(estilo)[0]}>
     <Hero/>
     <About/>
     <Experience/>
     <Education/>
     <Skills/>
     <Projects/>
    </main>
    </div>
   
  );
}
