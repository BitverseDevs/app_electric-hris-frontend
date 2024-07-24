import { Button, Modal, Steps } from "antd";
import FormPersonalInfo from "../forms/FormPersonalInfo";
import { useModalStore } from "@/store/modalStore";
import { useEffect, useMemo, useState } from "react";
import FormPayrollInfo from "../forms/FormPayrollInfo";
import FormEmploymentInfo from "../forms/FormEmploymentInfo";
import { EmployeeDataType, EmploymentInfoType, PayrollInfoType, PersonalInfoType } from "@/types/employee-type";


export default function AddEmployeeInfo() {
    
    const {showAddEmployeeModal, setModal} = useModalStore((state: any) => state)
    const [current, setCurrent] = useState<number>(0);
    const handleCloseModal = () => setModal("showAddEmployeeModal", false)
    
    const [employeeData, setEmployeeData] = useState<EmployeeDataType>({
        employee_image: null,
        first_name: "",
        middle_name: "",
        last_name: "",
        suffix: "",
        birth_date: "",
        sex: "",
        civil_status: "",
        mobile_number: "",
        email_address: "",
        spouse_first_name: "",
        spouse_middle_name: "",
        spouse_last_name: "",
        spouse_suffix: "",
        emerg_contact_person: "",
        emerg_mobile_number: "",
        computation_type: "",
        rate: null,
        bank_name: "",
        account_number: "",
        employee_number: "",
        date_hired: null,
        company_id: null,
        position_id: null,
        role_id: null
    })

    const handleStepsButton = (step: "next" | "prev") => {

        switch(step) {

            case "next":
                const nextStep = current + 1
                if(nextStep < steps.length) setCurrent(curr => nextStep)
                break;

            case "prev":
                const prevStep = current - 1
                if(prevStep >= 0) setCurrent(curr => prevStep)
                break;

            default:
                break;
        }
    }

    const updateEmployeeState = (values:any) => {
        setEmployeeData((curr:any) => ({
            ...curr,
            ...values
        }))
    }

    const savePersonalInfo = (values:PersonalInfoType) => {
        console.log(values)
        updateEmployeeState(values)
        handleStepsButton("next")
    }

    const savePayrollInfo = (values:PayrollInfoType) => {
        updateEmployeeState(values)
        handleStepsButton("next")
    }

    const saveEmploymentInfo = (values:EmploymentInfoType) => {
        updateEmployeeState(values)
        handleStepsButton("next")
    }


    const buttonElement = (
        <div className="flex gap-4">
            <Button type="primary" onClick={() => handleStepsButton("prev")}>Back</Button>
            <Button type="primary" htmlType="submit">Next</Button>
        </div>

    )

    const steps = [
        {
          title: 'Personal Information',
          content: 
            <FormPersonalInfo initialValues={employeeData} onSubmit={savePersonalInfo}>
                {buttonElement}
            </FormPersonalInfo>,
        },
        {
          title: 'Payroll Information',
          content:
            <FormPayrollInfo initialValues={employeeData} onSubmit={savePayrollInfo}>
                {buttonElement}
            </FormPayrollInfo>,
        },
        {
          title: 'Employment Information',
          content: 
            <FormEmploymentInfo initialValues={employeeData} onSubmit={saveEmploymentInfo}>
                {buttonElement}
            </FormEmploymentInfo>,
        },
    ];

    const items = useMemo(() => 
        steps.map((item) => ({ key: item.title, title: item.title }))
    , [employeeData]);

    return(
        <Modal 
            title="Add Employee" 
            open={showAddEmployeeModal}
            footer={null}
            maskClosable={false}
            onClose={handleCloseModal}
            onOk={handleCloseModal} 
            onCancel={handleCloseModal}
            width="full"
            style={{ maxWidth: "1200px" }}
        >
            <Steps
                current={current}
                items={items}
            /> 
            <br></br>
            <div className="md:p-8 p-4 border-t border-slate-300">{steps[current].content}</div>
        </Modal>
    )
}