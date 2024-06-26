"use client"
import { Box } from "@mui/material"
import es from "../cvEs.json"
import en from "../cvEn.json"
import style from "../page.module.css"
import {translate} from "./translate"
import {useSelect} from "./selectProvider"


export default function Experience(){
    const {language} = useSelect()
    const work = {
        en,
        es,
    }[language]?.work

    return(
        <>
        <Box className={style.mainSectionColumn}>
            <Box className={style.textSection}  id='workExperience'>{translate('workExperience')}</Box>
            <Box className={style.containterColumn}>
                {work?.map((value)=>
                <Box className={style.containterColumn} key={value.name}>
                    <Box className={style.mainSectionRowSpace}>
                        <Box className={style.textNameSubSectionEduc}>{value.name}</Box>
                         <Box>{new Date(value.startDate).getFullYear()} - {
                         value.endDate !=='' ? new Date(value.endDate).getFullYear() : translate("currently")
                         }</Box>
                    </Box>
                    <Box>{value.position}</Box>
                    <Box className={style.textExperienceSummary}>{value.summary}</Box>
                </Box>
                )}
            </Box>
        </Box>
        </>
    )
}