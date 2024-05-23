import { Typography } from "@mui/material";
import { BiErrorAlt } from "react-icons/bi";

export default function Maintenance() {
    return (
        <div>
            <div className="m-auto w-fit flex flex-col items-center">
                <BiErrorAlt className="text-red-500 text-[100px] md:text-[300px]"/>
                <Typography variant="h3" className="text-center">Maintenance on the way</Typography>
            </div>
        </div>
    )
}