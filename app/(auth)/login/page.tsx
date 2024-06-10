"use client";

import { Poppins } from "next/font/google";

import { Button, Card, Col, Form, FormProps, Input, Row, Typography } from "antd";


const { Title } = Typography;

// import Autocomplete from "@/components/forms/Autocomplete";
const poppins = Poppins(
    { 
      subsets: ["latin"],
      weight: ['400']
    }
  );

export default function Login() {

    const [form] = Form.useForm();

    const onFinish: FormProps['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    return (
        <div className="flex md:flex-row flex-col h-screen bg-purple-900">
            <div className="md:h-full p-8 md:w-1/2">
                <div className="h-full grid content-center">
                    <h1 className="text-white text-2xl text-center h-fit">APP ELECTRIC HRIS</h1>
                </div>
            </div>
            <div className="bg-white h-full md:w-1/2 grid content-center">
                <Title className="text-center">LOGIN</Title>
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Row gutter={16} className="p-8">
                        <Col span={24}>
                            <Form.Item
                                name="username" 
                                label="Username"
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Username is required' 
                                    },
                                ]}
                            >
                                <Input 
                                    name="username"
                                    className="text-blue-500"
                                    // onChange={handleChangePersonalData}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item 
                                name="password" 
                                label="Password:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Password is required' 
                                    }
                                ]}
                            >
                                <Input
                                    name="password" 
                                    // onChange={handleChangePersonalData}
                                />
                            </Form.Item>
                        </Col>
                        <Col className="mt-16" span={24}>
                            <Form.Item className="mt-4">
                                <Button type="primary" htmlType="submit" size="large" className="w-full">

                                        LOGIN

                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}