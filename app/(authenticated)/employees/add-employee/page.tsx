"use client";

import React, { useEffect, useState } from 'react';
import { Select, Space, Tabs } from 'antd';
import PersonalInformation from '@/components/add-employee/PersonalInformation';
import type { TabsProps } from 'antd';

export default function AddNewEmployee() {

    const [currSection, setCurrSection] = useState<string>('personal-info');
    
    const handleChange = (value: string) => {
        setCurrSection(curr => value)
    };

    const onChange = (key: string) => {
        console.log(key);
      };
      
      const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Personal Information',
          children: <PersonalInformation />,
        },
        {
          key: '2',
          label: 'Payroll Information',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Family Background',
          children: 'Content of Tab Pane 3',
        },
        
      ];

    return (
        <div className='p-4 w-full flex justify-center'>

          {/* center this div */}
          <div className='w-full md:max-w-6xl bg-white p-4 shadow-xl'>
            <Tabs 
              defaultActiveKey="1"  
              items={items} 
              onChange={onChange}
              className='w-full'
            />
          </div>

        </div>
    )
}