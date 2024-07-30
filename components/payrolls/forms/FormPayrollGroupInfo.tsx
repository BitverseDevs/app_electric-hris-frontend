import { PayrollType } from "@/types/payroll";
import { Col, Form, Input, Row, Select } from "antd";

interface Props {
    initialValues: PayrollType | null
    readOnly: boolean
}

export default function FormPayrollGroupInfo(props:Props){

    const { initialValues } = props

    const options = [
        { 
            value: 'monthly', 
            label: 'Monthly' 
        },
        { 
            value: 'bi-monthly', 
            label: 'Bi-Monthly' 
        },
        { 
            value: 'weekly', 
            label: 'Weekly' 
        },
        { 
            value: 'daily', 
            label: 'Daily' 
        },
    ]
    return (
        <div className="form-wrapper">
            <Row gutter={[16,16]}>
                <Col span={24}>
                    <Form.Item
                        name="payroll_name"
                        initialValue={initialValues?.payroll_name}
                        label="Payroll Name"
                        rules={[
                            {
                                required:true
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={24}>
                    <Form.Item
                        initialValue={initialValues?.frequency}
                        name="frequency"
                        label="Frequency"
                        rules={[
                            {
                                required:true
                            }
                        ]}
                    >
                        <Select
                            defaultValue={initialValues?.frequency}
                            style={{ width: 120 }}
                            // onChange={handleChange}
                            options={options}
                        />
                    </Form.Item>
                </Col>

                <Col span={24}>
                    <Form.Item
                        initialValue={initialValues?.description}
                        name="description"
                        label="Description"
                        rules={[
                            {
                                required:true
                            }
                        ]}
                    >
                        <Input.TextArea autoSize/>
                    </Form.Item>
                </Col>
            </Row>
        </div>
    )
}