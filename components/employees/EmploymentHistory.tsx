import { useStore } from "@/store";
import { EmployeeDetails, FamilyMembers } from "@/types";
import { Button, Form, Modal, Table, Tabs, TabsProps, Typography } from "antd";
import { useState } from "react";
import FormAddFamilyMember from "./family-background/FormAddFamilyMember";
import FormAddEmploymentHistory from "./employment-history/FormAddEmploymentHistory";

interface Props {
    employeeDetails: EmployeeDetails
    setEmployeeDetails: any
}

export default function EmploymentHistory (props:Props) {

    const {employeeDetails, setEmployeeDetails} = props
    const {formAddEmploymentHistory, setModal} = useStore((state: any) => state.modal)
    const screenSize = useStore((state: any) => state.screenSize)
    
    const { Text, Link, Title} = Typography;
    const [data, setData] = useState<FamilyMembers []>([])


    const [form] = Form.useForm();

    const columns = [
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',    
        },
        {
            title: 'Date Assigned',
            dataIndex: 'date_assigned',
            key: 'date_assigned',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ]

    const handleCloseModal = () => {
        setModal("formAddEmploymentHistory", false)
    }

    const handleAddEmploymentHistory = (newData:FamilyMembers) => {
        setData(curr => [
            ...curr,
            newData
        ])
    }
    
    return (

        <div >
            {
                screenSize.width < 640 ?
                    <div>
                        <Button type="primary" onClick={() => setModal("formAddEmploymentHistory", true)}>Add Employment History</Button>
                        <Modal 
                            title="Add Prevous Employer" 
                            open={formAddEmploymentHistory}
                            footer={null}
                            maskClosable={false}
                            onClose={handleCloseModal}
                            onOk={handleCloseModal} 
                            onCancel={handleCloseModal}
                        >
                            <FormAddEmploymentHistory handleFormChange={handleAddEmploymentHistory } />
                        </Modal>
                    </div> 
                    : <FormAddEmploymentHistory handleFormChange={handleAddEmploymentHistory } />

            }
            
            <Table dataSource={data} columns={columns} className="my-4"/>
            <Button type="primary" htmlType="submit" className='mt-4'>
                Save
            </Button>
        </div>
    )
}