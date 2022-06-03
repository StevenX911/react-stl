import React, { useEffect, useState } from 'react';
import { Card, Button, Table, Space, Tag, Tooltip, Modal } from 'antd';

import { getTopics } from '../../api';
import ButtonGroup from 'antd/lib/button/button-group';
import { withRouter } from 'react-router';

const mapFildToCN: any = {
    key: '序号',
    title: '标题',
    visit_count: '访问数',
    reply_count: '回复数',
    create_at: '创建时间',
    author: '作者',
};
// Table 训练
// TODO: TS类型
const Article: React.FC = (props: any) => {
    const [DataSource, setDataSource] = useState([]);
    const [Columns, setColumns] = useState([]);
    const [Total, setTotal] = useState(0);

    const editHandler = (text: any, record: any, index: any) => {
        console.log(text, record, index);
        // 修改路由
        props.history.push('/admin/article/edit/' + record.key);
    };

    const deleteHandler = (text: any, record: any, index: any) => {
        Modal.confirm({ title: '删除' });
        console.log(text, record, index);
    };

    useEffect(() => {
        getTopics()
            .then(response => {
                // TODO: 后台数据处理封装
                const data: any = response.data.data.map(
                    (item: any, index: any) => {
                        const {
                            title,
                            reply_count,
                            visit_count,
                            create_at,
                            author,
                        } = item;
                        // console.log(author);
                        return {
                            key: index + 1,
                            title,
                            visit_count,
                            reply_count,
                            create_at,
                            author: author.loginname,
                        };
                    }
                );
                const columns: any = Object.keys(data[0]).map(item => {
                    if (item == 'visit_count') {
                        return {
                            title: mapFildToCN[item],
                            dataIndex: item,
                            key: item,
                            render: (text: any, record: any, index: any) => {
                                return (
                                    <Tag
                                        color={
                                            record.visit_count > 1000
                                                ? 'red'
                                                : 'green'
                                        }
                                    >
                                        {record.visit_count}
                                    </Tag>
                                );
                            },
                        };
                    }
                    if (item == 'reply_count') {
                        return {
                            title: mapFildToCN[item],
                            dataIndex: item,
                            key: item,
                            render: (text: any, record: any, index: any) => {
                                return (
                                    <Tooltip title="回复数">
                                        <Tag color="blue">
                                            {record.reply_count}
                                        </Tag>
                                    </Tooltip>
                                );
                            },
                        };
                    }
                    return {
                        title: mapFildToCN[item],
                        dataIndex: item,
                        key: item,
                    };
                });

                // actions
                columns.push({
                    title: '操作',
                    dataIndex: 'action',
                    key: 'action',
                    render: (text: any, record: any, index: any) => {
                        return (
                            <ButtonGroup>
                                <Button
                                    size="small"
                                    type="primary"
                                    onClick={() =>
                                        editHandler(text, record, index)
                                    }
                                >
                                    修改
                                </Button>
                                <Button
                                    size="small"
                                    type="primary"
                                    danger
                                    onClick={() =>
                                        deleteHandler(text, record, index)
                                    }
                                >
                                    删除
                                </Button>
                            </ButtonGroup>
                        );
                    },
                });

                setColumns(columns);
                setDataSource(data);
                setTotal(data.length);
            })
            .catch(reason => {
                console.warn(reason);
            });
    }, []);

    return (
        <>
            <Card
                title="文章管理"
                extra={<Button type="dashed">导出文章</Button>}
            >
                <Table
                    dataSource={DataSource}
                    columns={Columns}
                    pagination={{ total: Total, pageSize: 8 }}
                />
            </Card>
        </>
    );
};

export default withRouter(Article);
