import { useStore } from "@/store";
import { FamilyMembers, PreviousEmployer } from "@/types";
import { formatTextToNumber } from "@/utils/format-text";
import { Button, Form, Input } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";
import dayjs from "dayjs";

interface Props {
    handleFormChange: (newData:FamilyMembers) => void
}
export default function FormAddFamilyMember(props: Props) {

    const { handleFormChange } = props

    // STATES
    const { setModal } = useStore((state: any) => state.modal) 
    const [form] = useForm()

    const onFinish: FormProps['onFinish'] = (values) => {
        values = {
            key: dayjs().valueOf(),
            ...values
        }
        handleFormChange(values)
        form.resetFields();
        setModal("formAddFamilyMember", false)
    };

    // const handleValuesChange = (changedValues: any, allValues: any) => {
    //     formatTextToNumber(['zip_code', 'tin'], changedValues, form)
    // }

    return (
            <Form
                name="add_previous_employer"
                form={form}
                layout="vertical"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="flex sm:flex-wrap md:flex-row flex-col md:items-end gap-4"
                // onValuesChange={handleValuesChange}
            >
                <Form.Item 
                    name="first_name"
                    label="First Name:"
                    rules={
                        [
                            { 
                                required: true,

                            }
                        ]
                    }
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name="middle_name"
                    label="Middle Name:"
                    rules={
                        [
                            { 
                                required: true 
                            }
                        ]
                    }
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name="last_name"
                    label="Last Name:"
                    rules={
                        [
                            { 
                                required: true 
                            }
                        ]
                    }
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name="suffix"
                    label="Suffix:"
                    className="w-20"
                    rules={
                        [
                            { 
                                required: true 
                            }
                        ]
                    }
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    name="relationship"
                    label="Relationship"
                    rules={
                        [
                            { 
                                required: true 
                            }
                        ]
                    }
                >
                    <Input />
                </Form.Item>

                <Form.Item className="">
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </Form.Item>
            </Form>
        
    )
}