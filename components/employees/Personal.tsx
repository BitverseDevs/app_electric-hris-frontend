import React, { useEffect, useState } from 'react';
import { Card, Col, FormProps, message, Row, Typography, Upload } from 'antd';
import { Button, Form, Input, Select, Space, DatePicker } from 'antd';
import { EmployeeDetails } from '@/types';
import type { DatePickerProps, GetProp, UploadFile, UploadProps } from 'antd';
import ProfilePicture from './personal-information/ProfilePicture';

interface Props {
    employeeDetails: EmployeeDetails
    setEmployeeDetails: any
}

export default function Personal(props: Props) {

    const { Text, Link, Title} = Typography;

    const {employeeDetails, setEmployeeDetails} = props

    //STATES
    const [personalData, setPersonalData] = useState<EmployeeDetails>(
        {
            first_name: '',
            middle_name: '',
            last_name: '',
            suffix: '',
            birth_date: null,
            sex: '',
            civil_status: '',
            spouse_first_name: '',
            spouse_middle_name: '',
            spouse_last_name: '',
            spouse_suffix: '',
        }
    );

    const [form] = Form.useForm();

    //FUNCTIONS
    const handleChangePersonalData = (e:any) => {

        setPersonalData((curr:EmployeeDetails) => (
            {
                ...curr,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleSelectChange = (name:string, value:string | number | null) => {
        if(value) {
            setPersonalData((curr:EmployeeDetails) => (
                {
                    ...curr,
                    [name]: value
                }
            ))
        }
    }

    const handleDateChange = (name:string, date: Date, dateString:string | string[] | null) => {
        setPersonalData((curr:EmployeeDetails) => (
            {
                ...curr,
                [name]: dateString
            }
        ))
    }

    const onFinish: FormProps['onFinish'] = (values) => {
        console.table(values);
        setEmployeeDetails((curr:any) => ({
            ...curr,
            first_name: values.first_name,
            middle_name: values.middle_name,
            last_name: values.last_name,
            suffix: values.suffix,
            birth_date: values.birth_date,
            sex: values.sex,
            civil_status: values.civil_status,
            spouse_first_name: values.spouse_first_name,
            spouse_middle_name: values.spouse_middle_name,
            spouse_last_name: values.spouse_last_name,
            spouse_suffix: values.spouse_suffix,
        }))
    };
    
    return (
        <div>
            <Title level={3}>Personal Information</Title>
            <div id="form-wrapper" className='my-10'>
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Row gutter={16}>
                        <Col span={24}>
                            <ProfilePicture />
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="first_name" 
                                label="First Name:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input First Name' 
                                    },
                                ]}
                            >
                                <Input 
                                    name="first_name"
                                    onChange={handleChangePersonalData}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="middle_name" 
                                label="Middle Name:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input Middle Name' 
                                    }
                                ]}
                            >
                                <Input
                                    name="middle_name" 
                                    onChange={handleChangePersonalData}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="last_name" 
                                label="Last Name:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input Last name' 
                                    }
                                ]}
                            >
                                <Input 
                                    name="last_name" 
                                    onChange={handleChangePersonalData}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="suffix" 
                                label="Suffix:" 
                            >
                                <Input 
                                    name="suffix" 
                                    onChange={handleChangePersonalData}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="birth_date" 
                                label="Birth Date:"
                                rules={[
                                    { 
                                        required: true,
                                        message: "Please input Birth Date" 
                                    },
                                ]}
                            >
                                <DatePicker 
                                    className='w-full'
                                    name="birth_date" 
                                    onChange={(date:Date, dateString:string | string []) => handleDateChange('birth_date', date, dateString)}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="sex" 
                                label="Sex:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please Select Sex' 
                                    }
                                ]}
                            >
                                <Select 
                                    onChange={(value:string) => handleSelectChange("sex",value)}
                                    options={[
                                        { value: 'male', label: 'Male' },
                                        { value: 'female', label: 'Female' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Row align="bottom" gutter={16}>       
                                <Col xs={24} sm={24} md={4} >
                                    <Form.Item 
                                        name="civil_status" 
                                        label="Civil Status:"
                                        className='w-full'
                                        rules={[
                                            { 
                                                required: true,
                                                message: 'Please Select Civil Status' 
                                            }
                                        ]}
                                    >
                                        <Select
                                            onChange={(value:string) => handleSelectChange("civil_status",value)}
                                            options={[
                                                { value: 'S', label: 'Single' },
                                                { value: 'M', label: 'Married' },
                                                { value: 'W', label: 'Widowed' },
                                                { value: 'A', label: 'Annulled' },
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                                
                                <Col flex="auto">
                                    <Form.Item 
                                        name="spouse_first_name" 
                                        label="Spouse First Name:"
                                        className='w-full'
                                        rules={
                                            personalData.civil_status == "M" ? [
                                                { 
                                                    required: true,
                                                    message: 'Please input Spouse First Name' 
                                                },
                                            ]: []
                                        }
                                    >
                                        <Input 
                                            name="spouse_first_name" 
                                            disabled={personalData.civil_status != "M"}
                                            onChange={handleChangePersonalData}
                                        />
                                    </Form.Item>
                                </Col>
                                
                                <Col flex="auto">
                                    <Form.Item 
                                        name="spouse_middle_name" 
                                        label="Spouse Middle Name:"
                                        className='w-full'
                                        rules={
                                            personalData.civil_status == "M" ? [
                                                { 
                                                    required: true,
                                                    message: 'Please input Spouse Middle Name' 
                                                },
                                            ]: []
                                        }
                                    >
                                        <Input 
                                            name="spouse_middle_name" 
                                            disabled={personalData.civil_status != "M"}
                                            onChange={handleChangePersonalData}
                                        />
                                    </Form.Item>
                                </Col>
                                
                                <Col flex="auto">
                                    <Form.Item 
                                        name="spouse_last_name" 
                                        label="Spouse Last Name:"
                                        className='w-full'
                                        rules={
                                            personalData.civil_status == "M" ? [
                                                { 
                                                    required: true,
                                                    message: 'Please input Spouse Last Name' 
                                                },
                                            ]: []
                                        }
                                    >
                                        <Input 
                                            name="spouse_last_name" 
                                            disabled={personalData.civil_status != "M"}
                                            onChange={handleChangePersonalData}
                                        />
                                    </Form.Item>
                                </Col>
    
                                <Col flex="auto">
                                    <Form.Item 
                                        name="spouse_suffix" 
                                        label="Spouse Suffix:"
                                        className='w-full'
                                    >
                                        <Input 
                                            name="spouse_suffix" 
                                            disabled={personalData.civil_status != "M"}
                                            onChange={handleChangePersonalData}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="mobile_number" 
                                label="Mobile Number:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input Mobile Number' 
                                    },
                                    {
                                        pattern: /^[0-9]{10}$/,
                                        message: 'Please enter a valid 10-digit mobile number'
                                    }
                                ]}
                            >
                                <Input
                                    addonBefore="+63"
                                    name="mobile_number"
                                    placeholder='9123456789'
                                    maxLength={10}
                                    onChange={handleChangePersonalData}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="email_address" 
                                label="Email Address:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input Email Address' 
                                    },
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email address'
                                    }
                                ]}
                            >
                                <Input
                                    name="email_address" 
                                    placeholder='boyax@gmail.com'
                                    onChange={handleChangePersonalData}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Text strong>In Case of Emergency</Text>

                            <Row gutter={16} className='border border-slate-100 rounded-lg p-2 mt-2'>
                                <Col md={6} flex="auto">
                                    <Form.Item 
                                        name="emerg_contact_person" 
                                        label="Contact Person:" 
                                        rules={[
                                            { 
                                                required: true,
                                                message: 'Please input contact person' 
                                            },
                                        ]}
                                    >
                                        <Input
                                            name="emerg_contact_person" 
                                            onChange={handleChangePersonalData}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col md={6} flex="auto">
                                    <Form.Item 
                                        name="emerg_mobile_number" 
                                        label="Contact Number:" 
                                        rules={[
                                            { 
                                                required: true,
                                                message: 'Please input Contact Number' 
                                            },
                                            {
                                                pattern: /^[0-9]{10}$/,
                                                message: 'Please enter a valid 10-digit mobile number'
                                            }
                                        ]}
                                    >
                                        <Input
                                            addonBefore="+63"
                                            name="emerg_mobile_number" 
                                            placeholder='9123456789'
                                            maxLength={10}
                                            onChange={handleChangePersonalData}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            
                        </Col>

                        {/* <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="" 
                                label="Email Address:" 
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input Email Address' 
                                    },
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email address'
                                    }
                                ]}
                            >
                                <Input
                                    name="email_address" 
                                    placeholder='boyax@gmail.com'
                                    onChange={handleChangePersonalData}
                                />
                            </Form.Item>
                        </Col> */}
                        
                    </Row>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className='mt-4'>
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            
        </div>
    )
}