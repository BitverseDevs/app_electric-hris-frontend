import { EmployeeDataType, EmploymentInfoType } from "@/types/employee-type";
import { Col, DatePicker, Form, FormProps, Row, Select, Typography } from "antd";

interface Props {
    initialValues: EmployeeDataType | null
    children?: React.ReactNode;
    onSubmit: (values:EmploymentInfoType) => void | null
}

export default function FormEmploymentInfo(props:Props) {

    const { initialValues, onSubmit, children} = props
    const { Text, Link, Title} = Typography;

    const [form] = Form.useForm();

    const onFinish: FormProps['onFinish'] = (values) => {

        onSubmit(values)
    };

    const companyOptions = [
        { value: 1, label: 'Jack' },
        { value: 2, label: 'Lucy' },
        { value: 3, label: 'Tom' },
    ]

    const positionOptions = [
        { value: 1, label: 'Developer' },
        { value: 2, label: 'Project Manager' },
    ]

    const roleOptions = [
        { value: 1, label: 'Super Admin' },
        { value: 2, label: 'Admin Lang' },
    ]
    

    return(
        <div className="">
            <Title level={3}>Employment Information</Title>
            <Form
                form={form}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Row gutter={[16, 16]}> 
                    <Col xs={24} sm={12} md={8} lg={4}>

                            <Form.Item 
                                name="date_hired" 
                                label="Date Hired" 
                                rules={[
                                    { 
                                        required: true,
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={4}>

                        <Form.Item 
                            name="employee_number" 
                            label="Employee Number" 
                            rules={[
                                { 
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4}>

                        <Form.Item 
                            name="company_id" 
                            label="Company" 
                            rules={[
                                { 
                                    required: true,
                                    message: 'Please Select Company' 
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a company"
                                filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={companyOptions}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={4}>

                        <Form.Item 
                            name="position_id" 
                            label="Position" 
                            rules={[
                                { 
                                    required: true,
                                    message: 'Please Select Position' 
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a position"
                                filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={positionOptions}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={12} md={8} lg={4}>

                        <Form.Item 
                            name="role_id" 
                            label="Role" 
                            rules={[
                                { 
                                    required: true,
                                    message: 'Please Select Role' 
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select a role"
                                filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={roleOptions}
                            />
                        </Form.Item>
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