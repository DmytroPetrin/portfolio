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

export default function Home() {
  const {estilo} = useSelect()
  const mapStyle = new Map()
  mapStyle.set('light', styles.main)
  mapStyle.set('dark', styles.mainDark)

  return (
    <>
          <MenuAppBar/>
 <main className={mapStyle.get(estilo)}>
     <Hero/>
     <About/>
     <Experience/>
     <Education/>
     <Skills/>
     <Projects/>
    </main>
    </>
   
  );
}
