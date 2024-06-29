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
        <Box className={style.mainSectionColumn}>
            <Box className={style.textSection} id='education'>{translate('education')}</Box>
            <Box className={style.mainSectionColumn}>
                {education?.map((value)=>
                <Box className={style.mainSectionColumn} key={value.institution}>
                    <Box className={style.mainSectionRowSpace}>
                        <Box className={style.textNameSubSection}>{value.institution}</Box>
                         <Box>{new Date(value.startDate).getFullYear()} - {new Date(value.endDate).getFullYear()}</Box>
                    </Box>
                    <Box>{value.studyType} {value.area}</Box>
                </Box>
                )}
            </Box>
        </Box>
        </>
    )
}