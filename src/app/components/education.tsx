"use client"
import { Box } from "@mui/material"
import es from "../cvEs.json"
import en from "../cvEn.json"
import style from "../page.module.css"
import {useSelect} from './selectProvider'
import {translate} from './translate'

export default function Education(){
    const {language} = useSelect()
    const education = {
        en,
        es,
    }[language]?.education


    return(
        <>
        <Box className={style.containterColumn}>
            <Box className={style.textSection} id='education'>{translate('education')}</Box>
            <Box className={style.mainSectionColumn}>
                {education?.map((value)=>
                <Box className={style.containterColumn} key={value.institution}>
                    <Box className={style.mainSectionRowSpace}>
                        <Box className={style.textNameSubSection}>{value.institution}</Box>
                         <Box>{new Date(value.startDate).getFullYear()} - {new Date(value.endDate).getFullYear()}</Box>
                    </Box>
                    <Box className={style.experienceStudy}>{value.studyType} {value.area}</Box>
                </Box>
                )}
            </Box>
        </Box>
        </>
    )
}