import { Button } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Payslip() {
    const payslipRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        content: () => payslipRef.current,
    });

    const downloadPDF = async () => {
        if (payslipRef.current) {
            // Capture the content of the div as a canvas

            const width = payslipRef.current.offsetWidth
            const height = payslipRef.current.offsetHeight

            const canvas = await html2canvas(payslipRef.current, { scale: 2 });

            const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data

            // Create a new jsPDF instance
            const pdf = new jsPDF({
                format: 'a4',
                orientation: 'portrait',
            });

            // Add the image to the PDF
            const pdfWidth = 210
            const pdfHeight = 297; // A4 height in mm

            pdf.addImage(imgData, 'PNG', 0, 0, width, height); // Fit image to A4 size

            // Save the PDF
            pdf.save('payslip.pdf');
        }
    };

    return (
        <div>
            <Button type="primary" onClick={handlePrint}>Print</Button>
            <Button type="primary" onClick={downloadPDF}>Download</Button>
            <div ref={payslipRef} className="p-4 h-[200mm] w-[50mm] bg-red-100">
                <p>Sample Content</p>
            </div>
        </div>
    );
}
