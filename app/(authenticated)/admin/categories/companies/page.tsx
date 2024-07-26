"use client";

import ActionButton from "@/components/actions/ActionButton";
import CreateCompanyInfo from "@/components/admin/categories/companies/CreateCompanyInfo";
import Maintenance from "@/components/layout/Maintenance";
import { useModalStore } from "@/store/modalStore";
import { CompanyType } from "@/types/admin/categories/company";
import { Button, Card, Table } from "antd";
import { useEffect, useState } from "react";
import { FaRegEdit, FaRegEye, FaRegTrashAlt } from "react-icons/fa";

export default function Companies () {
    
    const {showCreateCompanyModal, setModal} = useModalStore((state: any) => state)
    const [selectedRow, setSelectedRow] = useState<any>(
      {
        key: '',
        company: '',
        description: '',
      },
    )

    useEffect(() => {
      console.log(selectedRow)
    },[selectedRow])
  
    const columns = [
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',
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
                actionFn={() => setSelectedRow((curr:any) => record)} 
                title="View"
              />
              <ActionButton 
                actionType="edit" 
                actionFn={() => setSelectedRow((curr:any) => record)} 
                title="Edit"
              />
              <ActionButton 
                actionType="delete" 
                actionFn={() => setSelectedRow((curr:any) => record)} 
                title="Delete"
              />
            </div>
          ),
        },
    ];

    const data = [
        {
          key: '1',
          company: 'WAIS',
          description: 'WAIS ang ganda',
        },
        {
          key: '2',
          company: 'APP Electric',
          description: 'Main Company nya'
        },
      ];


    return (
        <div className="p-4">
          <Card className="p-4">
            <Button type="primary" onClick={() => setModal("showCreateCompanyModal", true)}>
              Add Company
            </Button>
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
            />
            <CreateCompanyInfo />
        </Card>
      </div>

    )
}