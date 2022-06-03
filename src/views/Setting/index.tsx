import React from 'react';
import { Card } from 'antd';

const Setting: React.FC = () => {
    return (
        <>
            <Card title="Setting" extra={<a href="#">More</a>}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </>
    );
};

export default Setting;
