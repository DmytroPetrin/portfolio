"use client"
import { Box } from "@mui/material"
import {skills} from "../cvEs.json"
import style from "../page.module.css"
import {translate} from "./translate"
import { useSelect } from "./selectProvider"

export default function Skills(){
    const {language} = useSelect()
   
    return(
        <>
        <Box className={style.mainSectionColumn}>
        <Box  className={style.textSection}  id='skills'>{translate('skills')}</Box>
        <Box className={style.mainSectionRowSkills}>
            {skills[0].keywords.map((value)=>{
                return(
                     <Box className={style.textSkill}>{value}</Box>
                )
            })}
        </Box>
        </Box>
        
        </>
    )
}