"use client"
import { Box } from "@mui/material"
import es from "../cvEs.json"
import en from "../cvEn.json"
import style from "../page.module.css"
import {translate} from "./translate"
import {useSelect} from "./selectProvider"

export default function Projects(){
    const {language} = useSelect()
    const projects = {
        en,
        es,
    }[language]?.projects

    return(
        <>
        <Box className={style.mainSectionColumn} >
            <Box className={style.textSection} id='projects'>Proyectos</Box>
            {projects?.map((value)=>{
                return(
                <Box className={style.projectCard}>
                        <Box className={style.projectTitle}>{value.name}</Box>
                        <Box className={style.projectText}>{value.description}</Box>
                    <Box className={style.mainSectionRowSkills}>
                        {value.keywords.map((keyword)=>
                            <Box className={style.textProjectChip}>{keyword}</Box>
                        )}
                    </Box>
                </Box>
                )
            })}
        </Box>
        </>
    )
}