import { Box } from "@mui/material"
import {projects} from "../cv.json"
import style from "../page.module.css"

export default function Projects(){

    return(
        <>
        <Box className={style.mainSectionColumn} >
            <Box className={style.textSection} id='projects'>Proyectos</Box>
            {projects.map((value)=>{
                return(
                <Box className={style.projectCard}>
                        <Box>{value.name}</Box>
                        <Box>{value.description}</Box>
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