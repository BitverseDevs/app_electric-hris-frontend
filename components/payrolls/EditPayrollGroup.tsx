import { useQuery } from "@/hooks/useQuery";
import { useModalStore } from "@/store/modalStore";
import api from "@/utils/axios-config";
import { Button, Col, Form, FormProps, Input, Modal, Row } from "antd";
import FormPayrollGroupInfo from "./forms/FormPayrollGroupInfo";
import { useEffect } from "react";

interface Props {
    payroll_group_id: number | null
}

export default function EditPayrollGroup (props: Props) {

    const { payroll_group_id } =props

    const {showEditPayrollGroupModal, setModal} = useModalStore((state: any) => state)

    const [form] = Form.useForm()

    const {data, loading, status, error, contextHolder:alert, query} = useQuery()

    const handleCloseModal = () => {
        setModal("showEditPayrollGroupModal", false)
    }

    useEffect(() => {
        const params = {
            payroll_group_id: payroll_group_id
        }
        query({
            fn: async () => {
                await api.post("/view-payroll-group", params)
            },
            onSuccess: (res) => {
                handleCloseModal()
            },
            onFail: null,
            successMessage: "Edit New Payroll Group Successfully"
        })
    },[payroll_group_id])

    const onFinish: FormProps['onFinish'] = (values) => {
        query({
            fn: async () => {
                await api.post("/edit-payroll-group")
            },
            onSuccess: (res) => {
                handleCloseModal()
            },
            onFail: null,
            successMessage: "Edit New Payroll Group Successfully"
        })
    };

    return (
        <Modal
            title="Edit Payroll Group" 
            open={showEditPayrollGroupModal}
            footer={null}
            maskClosable={false}
            onClose={handleCloseModal}
            onOk={handleCloseModal} 
            onCancel={handleCloseModal}
            width="full"
            style={{ maxWidth: "500px" }}
        >
            <Form
                form={form}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <FormPayrollGroupInfo 
                    initialValues={data} 
                    readOnly={false}
                />
                <Button type="primary">
                    Submit
                </Button>
                
            </Form>

        </Modal>
    )
}