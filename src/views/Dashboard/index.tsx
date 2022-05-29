import React from 'react'
import { Card } from 'antd';

const Dashboard: React.FC = () => {
    return (
        <>
            <Card title="仪表盘" extra={<a href="#">More</a>}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </>
    )
}

export default Dashboard

