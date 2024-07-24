import React, { useEffect, useState } from 'react';

// LIB
import { Card, Col, FormProps, message, Row, Typography, Upload } from 'antd';
import { Button, Form, Input, Select, Space, DatePicker } from 'antd';
import type { DatePickerProps, GetProp, UploadFile, UploadProps } from 'antd';
import dayjs from 'dayjs';

// HELPERS
import api from '@/utils/axios-config';

// COMPONENTS
import ProfilePicture from '../personal-information/ProfilePicture';

// TYPES
import { EmployeeDataType, PersonalInfoType } from '@/types/employee-type';

interface Props {
    initialValues: EmployeeDataType | null
    children?: React.ReactNode;
    onSubmit: (values:PersonalInfoType) => void | null
}

export default function FormPersonalInfo(props: Props) {

    const { Text, Link, Title} = Typography;    
    const { initialValues, onSubmit, children} = props
    //STATES
    const [employeeInfo, setEmployeeInfo] = useState<PersonalInfoType| null>(null)


    const [form] = Form.useForm();

    const onFinish: FormProps['onFinish'] = (values) => {

        const payload = {
            employee_image: values.employee_image,
            first_name: values.first_name,
            middle_name: values.middle_name,
            last_name: values.last_name,
            suffix: values.suffix,
            // birth_date: dayjs(values.birth_date).format("YYYY-MM-DD"),
            birth_date: values.birth_date,
            sex: values.sex,
            civil_status: values.civil_status,
            spouse_first_name: values.spouse_first_name,
            spouse_middle_name: values.spouse_middle_name,
            spouse_last_name: values.spouse_last_name,
            spouse_suffix: values.spouse_suffix,
            mobile_number: values.mobile_number,
            email_address: values.email_address,
            emerg_contact_person: values.emerg_contact_person,
            emerg_mobile_number: values.emerg_mobile_number
        }

        onSubmit(payload)
    };
    
    const handleValuesChange = (changedValues:any, allValues:any) => {

        setEmployeeInfo((curr:PersonalInfoType | null) => (
            {
                ...allValues
            }
        ))
    }

    return (
        <div>
            <Title level={3}>Personal Information</Title>
            <div id="form-wrapper" className='my-10'>
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onValuesChange={handleValuesChange}
                >
                    <Row gutter={[16,16]}>
                        <Col span={24}>
                            <ProfilePicture 
                                initialFile={initialValues?.employee_image} 
                                initialURL={null}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="first_name" 
                                label="First Name:"
                                initialValue={initialValues?.first_name}
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input First Name' 
                                    },
                                ]}
                            >
                                <Input 
                                    name="first_name"                                
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="middle_name" 
                                label="Middle Name:" 
                                initialValue={initialValues?.middle_name}
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input Middle Name' 
                                    }
                                ]}
                            >
                                <Input
                                    name="middle_name" 
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="last_name" 
                                label="Last Name:"
                                initialValue={initialValues?.last_name}
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input Last name' 
                                    }
                                ]}
                            >
                                <Input 
                                    name="last_name" 
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="suffix" 
                                label="Suffix:"
                                initialValue={initialValues?.suffix}
                            >
                                <Input 
                                    name="suffix" 
                                    
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="birth_date" 
                                label="Birth Date:"
                                initialValue={initialValues?.birth_date && dayjs(initialValues?.birth_date)}
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
                                    // onChange={(date:Date, dateString:string | string []) => handleDateChange('birth_date', date, dateString)}
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="sex" 
                                label="Sex:"
                                initialValue={initialValues?.sex}
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please Select Sex' 
                                    }
                                ]}
                            >
                                <Select 
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
                                        initialValue={initialValues?.civil_status}
                                        rules={[
                                            { 
                                                required: true,
                                                message: 'Please Select Civil Status' 
                                            }
                                        ]}
                                    >
                                        <Select
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
                                        initialValue={initialValues?.spouse_first_name}
                                        rules={
                                            employeeInfo?.civil_status == "M" ? [
                                                { 
                                                    required: true,
                                                    message: 'Please input Spouse First Name' 
                                                },
                                            ]: []
                                        }
                                    >
                                        <Input 
                                            name="spouse_first_name" 
                                            disabled={employeeInfo?.civil_status != "M"}
                                            
                                        />
                                    </Form.Item>
                                </Col>

                                <Col flex="auto">
                                    <Form.Item 
                                        name="spouse_middle_name" 
                                        label="Spouse Middle Name:"
                                        className='w-full'
                                        initialValue={initialValues?.spouse_middle_name}
                                        rules={
                                            employeeInfo?.civil_status == "M" ? [
                                                { 
                                                    required: true,
                                                    message: 'Please input Spouse Middle Name' 
                                                },
                                            ]: []
                                        }
                                    >
                                        <Input 
                                            name="spouse_middle_name" 
                                            disabled={employeeInfo?.civil_status != "M"}
                                            
                                        />
                                    </Form.Item>
                                </Col>
                                
                                <Col flex="auto">
                                    <Form.Item 
                                        name="spouse_last_name" 
                                        label="Spouse Last Name:"
                                        className='w-full'
                                        initialValue={initialValues?.spouse_last_name}
                                        rules={
                                            employeeInfo?.civil_status == "M" ? [
                                                { 
                                                    required: true,
                                                    message: 'Please input Spouse Last Name' 
                                                },
                                            ]: []
                                        }
                                    >
                                        <Input 
                                            name="spouse_last_name" 
                                            disabled={employeeInfo?.civil_status != "M"}
                                            
                                        />
                                    </Form.Item>
                                </Col>
                                <Col flex="auto">
                                    <Form.Item 
                                        name="spouse_suffix" 
                                        label="Spouse Suffix:"
                                        initialValue={initialValues?.spouse_suffix}
                                        className='w-full'
                                    >
                                        <Input 
                                            name="spouse_suffix" 
                                            disabled={employeeInfo?.civil_status != "M"}
                                            
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="mobile_number" 
                                label="Mobile Number:"
                                initialValue={initialValues?.mobile_number}
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
                                    
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={4}>
                            <Form.Item 
                                name="email_address" 
                                label="Email Address:"
                                initialValue={initialValues?.email_address}
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
                                        initialValue={initialValues?.emerg_contact_person} 
                                        rules={[
                                            { 
                                                required: true,
                                                message: 'Please input contact person' 
                                            },
                                        ]}
                                    >
                                        <Input
                                            name="emerg_contact_person" 
                                            
                                        />
                                    </Form.Item>
                                </Col>
                                <Col md={6} flex="auto">
                                    <Form.Item 
                                        name="emerg_mobile_number" 
                                        label="Contact Number:"
                                        initialValue={initialValues?.emerg_mobile_number} 
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
                    

                    {/* {children} */}
                    <Form.Item>
                        <div className='py-4'>
                            {children}
                        </div>
                    </Form.Item>
                </Form>
            </div>
            
        </div>
    )
}