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
    ]

    const data = [
        {
            emp_no: 1,
            emp_name: "Boyax"
        }
    ]
    return (
        <div>
            
            <table>
                <thead>
                    <tr>
                        {columns.map(col => (
                            <th>{col.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((emp:any, index:number) => (
                        <tr key={index}>
                            {columns.map((col:any, index:number) => {
                                const key = col.field
                                return (
                                    <td>{emp[key]}</td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}   