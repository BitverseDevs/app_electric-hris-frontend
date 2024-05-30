import React from 'react';
import { Card, FormProps } from 'antd';
import { Button, Form, Input, Select, Space, DatePicker } from 'antd';

export default function PersonalInformation() {
    const [form] = Form.useForm();

    const onFinish: FormProps['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    
    return (
        <Card title="Personal Information" bordered={false}>
            <Form
                form={form}
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Space wrap>
                    <Form.Item 
                        name="first_name" 
                        label="First Name:" 
                        rules={
                            [
                                { 
                                    required: true,
                                    message: 'Please input First Name' 
                                },
                                
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
                                    required: true,
                                    message: 'Please input Middle Name' 
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
                                    required: true,
                                    message: 'Please input Last name' 
                                }
                            ]
                        }
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        name="suffix" 
                        label="Suffix:" 
                        rules={
                            [
                                { 
                                    required: true,
                                    message: 'Please input Suffix' 
                                }
                            ]
                        }
                    >
                        <Input />
                    </Form.Item>
                </Space>
                <br></br>
                <Space wrap>
                    <Form.Item 
                        name="birth_date" 
                        label="Birth Date:" 
                        rules={
                            [
                                { 
                                    required: true,
                                    message: "Please input Birth Date" 
                                },
                                
                            ]
                        }
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item 
                        name="birth_place" 
                        label="Birth Place:" 
                        rules={
                            [
                                { 
                                    required: true,
                                    message: 'Please input Birth Place' 
                                }
                            ]
                        }
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                        name="sex" 
                        label="Sex:" 
                        rules={
                            [
                                { 
                                    required: true,
                                    message: 'Please input Sex' 
                                }
                            ]
                        }
                    >
                        <Select
                            // onChange={handleChange}
                            options={[
                                { value: 'male', label: 'Male' },
                                { value: 'female', label: 'Female' },
                            ]}
                        />
                    </Form.Item>
                </Space>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}