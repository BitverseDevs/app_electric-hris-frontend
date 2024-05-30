"use client";

import TableEmployees from "@/components/employees/TableEmployees"
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Employees() {
    const router = useRouter()

    return (
        <div className="w-[500px] m-auto bg-white p-4 rounded-md shadow-xl">
            <Button type="primary" onClick={() => router.push('/employees/add-new-employee')}>Add New Employee</Button>
            <TableEmployees />
        </div>
    )
}   