import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { withRouter } from 'react-router-dom';

const { TextArea } = Input;

const Edit: React.FC = (props: any) => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card
            title="文章编辑"
            extra={<Button onClick={props.history.goBack}>返回</Button>}
        >
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="文章内容"
                    name="article"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your content!',
                        },
                    ]}
                >
                    <TextArea
                        rows={4}
                        placeholder="maxLength is 5000"
                        maxLength={5000}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default withRouter(Edit);
