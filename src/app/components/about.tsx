import { Box } from "@mui/material"
import {basics} from "../cv.json"
import style from "../page.module.css"



export default function About(){

    return(
        <>
        <Box className={style.mainSectionColumn}>
            <Box  className={style.textSection}  id='about'>Sobre mi</Box>
            <Box  className={style.mainSectionRow}>{basics.summary}</Box>
        </Box>
        
        </>
    )
}