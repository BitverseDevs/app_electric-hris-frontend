import { Col, Form, Input, Row } from "antd";

export default function FormPayrollGroupInfo(){
    return (
        <div className="form-wrapper">
            <Row gutter={[16,16]}>
                <Col span={24}>
                    <Form.Item
                        name="payroll_name"
                        label="Payroll Name"
                        rules={[
                            {
                                required:true
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={24}>
                    <Form.Item
                        name="frequency"
                        label="Frequency"
                        rules={[
                            {
                                required:true
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>

                <Col span={24}>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                            {
                                required:true
                            }
                        ]}
                    >
                        <Input.TextArea autoSize/>
                    </Form.Item>
                </Col>
            </Row>
        </div>
    )
}