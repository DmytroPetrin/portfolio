import { Box } from "@mui/material"
import {work} from "../cv.json"
import style from "../page.module.css"

export default function Experience(){

    return(
        <>
        <Box className={style.mainSectionColumn}>
            <Box className={style.textSection}>Experiencia</Box>
            <Box className={style.mainSectionColumn}>
                {work.map((value)=>
                <Box className={style.mainSectionColumn} key={value.name}>
                    <Box className={style.mainSectionRowSpace}>
                        <Box className={style.textNameSubSection}>{value.name}</Box>
                         <Box>{new Date(value.startDate).getFullYear()} - {
                         value.endDate !=='' ? new Date(value.endDate).getFullYear() : "Actualmente"
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