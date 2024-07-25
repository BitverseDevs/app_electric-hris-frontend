import { EmployeeDataType, PayrollInfoType,  } from "@/types/employee-type";
import { Button, Col, Form, FormProps, Input, InputNumber, Radio, Row, Typography } from "antd";

interface Props {
    initialValues: EmployeeDataType | null
}

export default function FormPayrollInfo (props:Props) {
    
    const { initialValues } = props
    const { Text, Link, Title} = Typography;

    return (
        <div className="">
            <Title level={3}>Payroll Information</Title>
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
                            initialValue={initialValues?.computation_type}
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
                            initialValue={initialValues?.rate}
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
                            initialValue={initialValues?.bank_name}
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
                            name="account_number" 
                            label="Account Number:"
                            initialValue={initialValues?.account_number}
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
        </div>
    )
}