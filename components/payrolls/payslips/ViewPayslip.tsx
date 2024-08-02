import GovernmentContribution from '@/components/employees/GovernmentContribution';
import { useModalStore } from '@/store/modalStore';
import { Button, Col, Modal, Row } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEffect, useReducer, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';


interface Props {
    payslip_id: number | null
}
export default function ViewPayslip(props: Props) {

    const { payslip_id } = props
    const {showPayslipModal, setModal} = useModalStore(state => state)
    const payslipRef = useRef<HTMLDivElement>(null);

    const [payslipData, setPayslipData] = useState<any>({
        employeeDetails: {
            "Employee Name": "Boyax Yarn",
            "Work Hours": 100
        },
        salaryDetails: {
            "Basic Pay": 10000,
            "Allowance Pay": 10000,
            "Overtime Pay": 10000,
            "Night Diff Pay": 1000,
            "SL Encashment": 10000,
            "VL Encashment": 100000,
            "Bonus": 10000,
            "Total Income": 900000,
        },
        paymentDetails: {
            "Cut Off Period": "Jan 10 - Feb 25"
        },
        deductionDetails: {
            "SSS": 2323,
            "Pag-Ibig": 232323,
            "Philhealth":1232,
            "With Holding Tax": 122112,
            "Total Decution":21232323
        },
    });

    const handlePrint = useReactToPrint({
        content: () => payslipRef.current,
    });

    useEffect(() => {
        fetchPayslipData()
    },[payslip_id])

    const handleClose = () => {
        setModal("showPayslipModal", false)
    }

    const fetchPayslipData = () => {
        return
    }

    const footer = [
        <Button key="download">
          Download
        </Button>,
        <Button key="print" type="primary" onClick={() => handlePrint()}>
          Print
        </Button>,
    ]
    
    return (
        <Modal
            open={showPayslipModal}
            maskClosable={true}
            onOk={handlePrint}
            // onClose={handleClose}
            onCancel={handleClose}
            footer={footer}
            width={800}
        >
            {/* <Button type="primary" onClick={downloadPDF}>Download</Button> */}
            <Row ref={payslipRef} className="border-black border my-8 overflow-x-auto">
                <Col span={8} className='border-black border'>

                    <Row className='bg-slate-200 font-bold bg-blue-100 '>Company Name</Row>

                    <Row className='border-black border-y'>
                        <Row gutter={12} className='w-full'>
                            <Col span={12}>Employee Name:</Col>
                            <Col span={12}>Boyaxasss ssass</Col>
                        </Row>
                        <Row gutter={12} className='w-full'>
                            <Col span={12}>Work Hours:</Col>
                            <Col span={12}>10000</Col>
                        </Row>
                    </Row>

                    <Row className='w-full border-black border-y '>
                        <Row gutter={16} className='w-full'>
                            <Col span={12}>Basic Pay:</Col>
                            <Col span={12}>1000.00</Col>
                        </Row>

                        <Row className='w-full'>
                            <Col span={12}>Allowances:</Col>
                            <Col span={12}>9000.00</Col>
                        </Row>

                        <Row className='w-full'>
                            <Col span={12}>Overtime Pay:</Col>
                            <Col span={12}>5000.00</Col>
                        </Row>

                        <Row className='w-full'>
                            <Col span={12}>Overtime Pay:</Col>
                            <Col span={12}>5000.00</Col>
                        </Row>

                        <Row className='w-full'>
                            <Col span={12}>SL Encashment:</Col>
                            <Col span={12}>5000.00</Col>
                        </Row>

                        <Row className='w-full'>
                            <Col span={12}>VL Encashment:</Col>
                            <Col span={12}>2000.00</Col>
                        </Row>

                        <Row className='w-full'>
                            <Col span={12}>Bonus:</Col>
                            <Col span={12}>2200.00</Col>
                        </Row>
                    </Row>

                    <Row className='w-full border-black border-y'>
                        <Row className='w-full bg-blue-100'>
                            <Col span={12}>Total:</Col>
                            <Col span={12}>1000000.00</Col>
                        </Row>
                    </Row>
                </Col>
                <Col span={8} className='border-black border'>
                
                </Col>
                <Col span={8} className='border-black border'>
                
                </Col>
            </Row>
        </Modal>
    );
}
