import TableEmployees from "@/components/employees/TableEmployees"
import { Button } from "@mui/material"

export default function Employees() {

    const columns = [
        {
            field: "emp_no",
            name: "Employee No.",
        },
        {
            field: "emp_name",
            name: "Employee Name",
        },
        {
            field: "age",
            name: "Age",
        }
    ]

    const data = [
        {
            emp_no: 1,
            emp_name: "Boyax",
            age: 28
        },
        {
            emp_no: 2,
            emp_name: "Jhumz",
            age: 28
        },
        {
            emp_no: 3,
            emp_name: "Bogart",
            age: 28
        },
        {
            emp_no: 4,
            emp_name: "Box",
            age: 30
        }
    ]
    return (
        <div>
            <TableEmployees columns={columns} rows={data}/>
        </div>
    )
}   