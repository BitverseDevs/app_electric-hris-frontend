"use client";

import React, { useEffect, useState } from 'react';
import { Select, Space } from 'antd';
import PersonalInformation from '@/components/add-employee/PersonalInformation';

export default function AddNewEmployee() {

    const [currSection, setCurrSection] = useState<string>('personal-info');
    
    const handleChange = (value: string) => {
        setCurrSection(curr => value)
    };

    return (
        <Space className='p-4 w-full' direction="vertical" wrap>
            <Select
                defaultValue="personal-info"
                onChange={handleChange}
                options={[
                    { value: 'personal-info', label: 'Personal Information' },
                    { value: 'payroll-info', label: 'Payroll Information' },
                ]}
            />

            <PersonalInformation />
        </Space>
    )
}