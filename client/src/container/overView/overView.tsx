import React, { useState, useEffect } from 'react';
import { apiCaller } from 'service/apiCaller';
import { getAllDevicelog } from 'api/deviceDirectory'
import { Table } from "antd";

export const OverView: React.FC = () => {
    const [list, setList] = useState<any[]>();

    const getList = () => {
        apiCaller(getAllDevicelog,
            {},
            (res: any) => {
                const caseRows: any[] = res.data.data;
                console.log(7777, res)
                setList(caseRows)
                // setList(caseRows);
            },
            (error: any) => { console.log(error); }
        )
    }

    useEffect(() => {
        getList();
    }, []);

    const columns = [
        {
            title: 'deviceId',
            dataIndex: 'device_id',
        },
        {
            title: 'eventType',
            dataIndex: 'event_type',
        },
        {
            title: 'description',
            dataIndex: 'description',
        }
    ]

    return (
        <div className='main' >
            <Table columns={columns} dataSource={list} />
        </div>)
}