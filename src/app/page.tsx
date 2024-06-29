import React from 'react'
import {Box} from '@mui/material'
import styles from "./page.module.css"
import {basics} from './cv.json'
import Hero from './components/hero'
import About from './components/about'
import Experience from  './components/experience'
import Education from './components/education'
import Projects from './components/projects'
import Skills from './components/skills'
import MenuAppBar from './components/appbar'

const {name} = basics

export default function Home() {
  return (
    <>
          <MenuAppBar/>
 <main className={styles.main}>
     <Hero/>
     <About/>
     <Experience/>
     <Education/>
     <Projects/>
     <Skills/>
    </main>
    </>
  );
}
