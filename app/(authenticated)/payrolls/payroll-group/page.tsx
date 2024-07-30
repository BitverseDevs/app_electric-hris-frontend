"use client";

import ActionButton from "@/components/actions/ActionButton";
import CreatePayrollGroup from "@/components/payrolls/CreatePayrollGroup";
import { useModalStore } from "@/store/modalStore";
import { ActionType } from "@/types";
import { Button, Card, Table } from "antd";
import { useState } from "react";

export default function PayrollGroup() {

    
    const {showCreatePayrollGroupModal, setModal} = useModalStore((state: any) => state)
    
    const [selectedRow, setSelectedRow] = useState<any>(
        {
            key: '',
            payroll_name: '',
            frequency: '',
            description: '',
        },
      )
      
    const clickRowAction = (record:any, action:ActionType) => {

        setSelectedRow((curr:any) => record)
  
        switch(action) {
  
          case "view":
            console.log("view")
            break;
  
          case "edit":
            console.log("edit")
            break
  
          case "delete":
            console.log("delete")
            break
  
          default:
            break
        }
      }

    const columns = [
        {
            title: 'Payroll Name',
            dataIndex: 'payroll_name',
            key: 'payroll_name',
        },
        {
            title: 'Frequency',
            dataIndex: 'frequency',
            key: 'frequency',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_:any, record:any) => (
              <div className="flex gap-4">
                <ActionButton 
                  actionType="view" 
                  actionFn={() => clickRowAction(record, "view")} 
                  title="View"
                />
                <ActionButton 
                  actionType="edit" 
                  actionFn={() => clickRowAction(record, "edit")} 
                  title="Edit"
                />
                <ActionButton 
                  actionType="delete" 
                  actionFn={() => clickRowAction(record, "delete")} 
                  title="Delete"
                />
              </div>
            ),
        },
    ]

    const data = [
        {
            key: '1',
            payroll_name: 'Monthly',
            frequency: 'monthly',
            description: 'monthly',
        },
        {
            key: '2',
            payroll_name: 'Bi-Monthly',
            frequency: 'bi-monthly',
            description: 'bi-monthly',
        },
        {
            key: '3',
            payroll_name: 'Weekly',
            frequency: 'weekly',
            description: 'weekly',
        },
        {
            key: '4',
            payroll_name: 'Daily',
            frequency: 'daily',
            description: 'daily',
        },
      ];

    return (
        <div className="page-wrapper">
            <Card>

                <Button type="primary" onClick={() => setModal("showCreatePayrollGroupModal", true)}>Add Payroll Group</Button>
                <Table
                    columns={columns}
                    dataSource={data} 
                    pagination={
                        { 
                            position: ["topLeft", "bottomLeft"], 
                            total: 50,
                            pageSize: 5,
                            current:3

                        }
                    }
                >
                    
                </Table>
            </Card>
            <CreatePayrollGroup />
        </div>
    )
}