import { Modal } from "antd";
import FormPersonalInfo from "../FormPersonalInfo";
import { useModalStore } from "@/store/modalStore";
import { useEffect } from "react";


export default function CreatePersonalInfo() {
    
    const {showAddEmployeeModal, setModal} = useModalStore((state: any) => state)

    const handleCloseModal = () => setModal("showAddEmployeeModal", false)
    

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
            <FormPersonalInfo 
                initialValues={null}
            />
        </Modal>
    )
}