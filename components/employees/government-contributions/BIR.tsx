import { EmployeeDetails } from "@/types"
import { Table } from "antd";

interface Props {
    employeeDetails: EmployeeDetails
    setEmployeeDetails: any
}
export default function BIR(props:Props) {

    const { employeeDetails, setEmployeeDetails } = props

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />;
        </div>

    )
}