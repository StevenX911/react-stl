import React from 'react'
import { Card, Button } from 'antd';

const Article: React.FC = () => {
    return (
        <>
            <Card title="文章管理" extra={<Button type="dashed">导出文章</Button>}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </>
    )
}

export default Article
