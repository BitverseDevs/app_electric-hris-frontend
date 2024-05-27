'use client';

import { Button, Link } from "@mui/material"
import { useState } from "react";

export default function TableEmployees(props:any) {

    //PROPS
    const {columns, rows} = props

    //STATE
    const [open, setOpen] = useState(false);

    //FUNCTIONS
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="table-wrapper">
            <Link href="/employees/add-new-employee">Add New Employee</Link>
            <table className="mt-8">
                <thead>
                    <tr>
                        {columns.map((col:any, index:number) => (
                            <th key={index}>{col.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((emp:any, index:number) => (
                        <tr key={index}>
                            {columns.map((col:any, index:number) => {
                                const key = col.field
                                return (
                                    <td key={index}>{emp[key]}</td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}