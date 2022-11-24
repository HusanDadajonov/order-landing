import { Box } from "@mui/material"
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <Box sx={{padding:"10px 0",background:'#fff',boxShadow: "rgba(0, 0, 0, 0.20) 0px 1px 1px"}}>
      <Box sx={{maxWidth:"1300px",margin:"0 auto"}}>
        <Box sx={{display: "flex",justifyContent:"center"}}>
          <Link href={"/"} legacyBehavior>
            <a>
              <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHKNtrGUKPVyRev6MC2M0nH1i1NJXmxs8sJ3A6VFwAXm76ENDYH91ukrG1HbYfzM8pDE&usqp=CAU"} width={150} height={50}/>
            </a>
          </Link>
        </Box>
      </Box>
      
    </Box>
  )
}
  
export default Header