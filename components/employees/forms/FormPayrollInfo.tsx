import { EmployeeDataType, PayrollInfoType,  } from "@/types/employee-type";
import { Button, Col, Form, FormProps, Input, InputNumber, Radio, Row, Typography } from "antd";

interface Props {
    initialValues: EmployeeDataType | null
    children?: React.ReactNode;
    onSubmit: (values: PayrollInfoType) => void | null
}

export default function FormPayrollInfo (props:Props) {
    
    const { initialValues, onSubmit, children} = props
    const { Text, Link, Title} = Typography;

    const [form] = Form.useForm();

    const onFinish: FormProps['onFinish'] = (values) => {

        onSubmit(values)
    };

    return (
        <div className="">
            <Title level={3}>Payroll Information</Title>
            <Form
                form={form}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Row gutter={[16, 16]}> 
                    <Col
                        md={12}
                        sm={24}
                        xs={24}
                    >
                        <div className='card'>
                            <Title level={5}>Basic Pay</Title>
                            <br></br>
                            <Form.Item 
                                name="computation_type" 
                                label="Computation Type:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please Select Computation Type' 
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Radio value='monthly'>Monthly Rate</Radio>
                                    <Radio value='daily'>Daily Rate</Radio>
                                    <Radio value='hourly'>Hourly Rate</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <br></br>
                            <Form.Item 
                                name="rate" 
                                label="Rate:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please Input Rate' 
                                    },
                                ]}
                            >
                                <InputNumber
                                    min={0} 
                                    name="rate" 
                                    placeholder='0'
                                />
                            </Form.Item>
                        </div>
                    </Col>
                        
                    <Col 
                        md={12}
                        sm={24}
                        xs={24}
                    >
                        <div className='card'>
                            <Title level={5}>ATM Information</Title>
                            <br></br>
                            <Form.Item 
                                name="bank_name" 
                                label="Bank Name:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please Input Bank Name' 
                                    },
                                ]}
                            >
                                <Input 
                                    type='text' 
                                    name="bank_name" 
                                    placeholder='BPI/ Landbank/ UAB'
                                />
                            </Form.Item>
                            <br></br>
                            <Form.Item 
                                name="bank_account_number" 
                                label="Account Number:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please Input Account Number' 
                                    },
                                ]}
                            >
                                <Input 
                                    type='text' 
                                    name="account_number" 
                                    placeholder='123456789'
                                />
                            </Form.Item>
                        </div>
                    </Col>
                </Row>
                <Form.Item>
                    <div className='py-4'>
                        {children}
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}