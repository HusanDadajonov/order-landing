import { Box } from "@mui/system"
import Link from "next/link"


function CustomCard() {

    return (
        <Link href={'/'} legacyBehavior>
            <a>
                <Box sx={{background:"#ec87c0",height:"200px",borderRadius:'10px'}} />
            </a>
        </Link>
    )

}

export default CustomCard