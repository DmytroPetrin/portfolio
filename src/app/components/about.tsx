"use client"
import { Box } from "@mui/material"
import es from "../cvEs.json"
import en from "../cvEn.json"
import style from "../page.module.css"
import { useSelect } from './selectProvider'
import {translate} from './translate'

export default function About(){
    const {language} = useSelect()
    const basics = {
        en,
        es,
    }[language]?.basics

    return(
        <>
        <Box className={style.mainSectionColumn}>
            <Box  className={style.textSection}  id='about'>{translate('about')}</Box>
            <Box  className={style.mainSectionRow}>{basics?.summary}</Box>
        </Box>
        
        </>
    )
}