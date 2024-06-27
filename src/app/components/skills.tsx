import { Box } from "@mui/material"
import {skills} from "../cv.json"
import style from "../page.module.css"

export default function Skills(){

    return(
        <>
        <Box className={style.mainSectionColumn}>
        <Box  className={style.textSection}>Habilidades</Box>
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