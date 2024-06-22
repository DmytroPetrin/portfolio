import { Box } from "@mui/material"
import photo from "../assets/foto_2024.png"
import Image from "next/image"
import style from "../page.module.css"
import {basics} from "../cv.json"
import location_dot from "../assets/location-dot-solid.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import phone from "../assets/phone-solid.svg"
import email from "../assets/envelope-regular.svg"
import Link from "next/link"


export default function Hero(){

    return(
        <>
        <Box className={style.mainSectionRow}>
            <Box className={style.mainSectionColumn}>
                <Box className={style.textName}>{basics.name}</Box>
                <Box>{basics.summary}</Box>
                <Link href="https://www.google.com/maps/place/Murcia/@37.9805644,-1.1477748,14z/data=!3m1!4b1!4m6!3m5!1s0xd6381f8d5928c7f:0xd627129b38c4ab9a!8m2!3d37.9922399!4d-1.1306544!16zL20vMGc4M2o?entry=ttu"
                 className={style.mainSectionRow}>
                    <Image src={location_dot} alt={"Location"}  className={style.iconStyle}/>
                    <Box className={style.textCity}>{basics.location.countryCode}, {basics.location.city}</Box>
                </Link>
                <Box className={style.mainSectionRow}>
                    <Link href={`mailto:${basics.email}`}>
                        <Image src={email} alt={"email"} className={style.iconStyleBorder}/>
                    </Link>
                    <Link href={`tel:${basics.email}`}>
                        <Image src={phone} alt={"phone"} className={style.iconStyleBorder}/>
                    </Link>
                    <Link href={basics.profiles[1].url}>
                        <Image src={github} alt={"github"} className={style.iconStyleBorder}/>
                    </Link>
                    <Link href={basics.profiles[0].url}>
                         <Image src={linkedin} alt={"linkdin"} className={style.iconStyleBorder}/>
                    </Link>
                </Box>
            </Box>
            <Box>
                <Image src={photo} alt="photo" className={style.imageStyle}/>
            </Box>
        </Box>
        </>
    )
}