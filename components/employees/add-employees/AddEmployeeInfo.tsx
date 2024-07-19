import { Button, Modal, Steps } from "antd";
import FormPersonalInfo from "../forms/FormPersonalInfo";
import { useModalStore } from "@/store/modalStore";
import { useEffect, useState } from "react";
import FormPayrollInfo from "../forms/FormPayrollInfo";
import FormEmploymentInfo from "../forms/FormEmploymentInfo";


export default function AddEmployeeInfo() {
    
    const {showAddEmployeeModal, setModal} = useModalStore((state: any) => state)
    const [current, setCurrent] = useState<number>(0);
    const handleCloseModal = () => setModal("showAddEmployeeModal", false)
    
    const description = 'This is a description.';

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
            <FormPersonalInfo initialValues={null} onSubmit={() => handleStepsButton("next")}>
                {buttonElement}
            </FormPersonalInfo>,
        },
        {
          title: 'Payroll Information',
          content:
            <FormPayrollInfo initialValues={null} onSubmit={() => handleStepsButton("next")}>
                {buttonElement}
            </FormPayrollInfo>,
        },
        {
          title: 'Employment Information',
          content: 
            <FormEmploymentInfo initialValues={null} onSubmit={() => handleStepsButton("next")}>
                {buttonElement}
            </FormEmploymentInfo>,
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));
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