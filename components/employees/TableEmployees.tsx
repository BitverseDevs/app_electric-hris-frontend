'use client';

import Link from "next/link";
import { useState } from "react";

export default function TableEmployees(props:any) {

    //PROPS
    const {columns, rows} = props

    return (
        <div className="table-wrapper">
            <Link className="bg-blue-500 p-2 text-white rounded-md" href="/employees/add-new-employee">Add New Employee</Link>
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