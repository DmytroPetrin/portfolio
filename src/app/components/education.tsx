import { Box } from "@mui/material"
import {education} from "../cv.json"
import style from "../page.module.css"

export default function Education(){

    return(
        <>
        <Box className={style.mainSectionColumn}>
            <Box className={style.textSection}>Educación</Box>
            <Box className={style.mainSectionColumn}>
                {education.map((value)=>
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