import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button, Form, Input } from 'antd';
  
function AntdTable() {
    const [ addRowPopupVisible, setAddRowPopupVisible ] = useState(false);
    const [ rowIndex, setRowIndex ] = useState(0)

    interface DataType {
        key: number;
        name: string;
        type: string;
        lastUpdatedBy: string;
        lastUpdated: string;
        division: string;
        platform: string;
        sub: string;
    }

    const getRowId = () => {
        setRowIndex(rowIndex +1)

        return (rowIndex)
    }

    const columns: ColumnsType<DataType> = [
        { title: 'Name', dataIndex: 'name' },
        { title: 'Type',  dataIndex: 'name' },
        { title: 'LastUpdatedBy', dataIndex: 'lastUpdatedBy' },
        { title: 'LastUpdated', dataIndex: 'lastUpdated' },
        { title: 'Division', dataIndex: 'division' },
        { title: 'Platform', dataIndex: 'platform' },
        { title: 'Sub', dataIndex: 'sub' },
    ]

    const [ rowData, setRowData ] =  useState([
        {
            key: 1,
            name: 'fmea-1',
            type: 'hardware',
            lastUpdatedBy: 'Angel Hernandez',
            lastUpdated: '25-Apr-2023',
            division: 'cars',
            platform: 'sedan', 
            sub: '...',
        },
        {
            key: 2,
            name: 'fmea-2',
            type: 'hardware',
            lastUpdatedBy: 'Angel Hernandez',
            lastUpdated: '25-Apr-2023',
            division: 'trucks',
            platform: 'pickup', 
            sub: '...',
        },
    ])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    
    const handleFormSubmit = (values: any) => {
        console.log(values.fmea)
        const newDataRow = {
            key: getRowId(),
            name: values.fmea.Name,
            type: values.fmea.Type,
            lastUpdatedBy: values.fmea.LastUpdatedBy,
            lastUpdated: values.fmea.LastUpdated,
            division: values.fmea.Division,
            platform: values.fmea.Platform,
            sub: values.fmea.Sub,
        }
        
        setRowData((pre) => {
            return [...pre, newDataRow]
        })
        setAddRowPopupVisible(!addRowPopupVisible)
        // console.log('Row data: ', rowData)
    };

    return (
        <>
        <div className='icon_container'>
            <img className='plusIcon'
            onClick={() => setAddRowPopupVisible(!addRowPopupVisible)}
            src='https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png'
            alt='' 
            />
            <img className='plusIcon'
            src='https://static-00.iconduck.com/assets.00/ps-play-station-button-x-icon-256x256-4v7p8xra.png'
            alt='' 
            />
            <img className='plusIcon'
            src='https://icons.veryicon.com/png/o/internet--web/prejudice/down-arrow-5.png'
            alt='' 
            />
        </div>

        {addRowPopupVisible == true ?
            <Form
            {...layout}
            name="nest-messages"
            onFinish={handleFormSubmit}
            style={{ maxWidth: 600 }}
            >
                <Form.Item name={['fmea', 'Name']} label="Name" >
                    <Input />
                </Form.Item>
                <Form.Item name={['fmea', 'Type']} label="Type">
                    <Input />
                </Form.Item>
                <Form.Item name={['fmea', 'LastUpdatedBy']} label="LastUpdatedBy" >
                    <Input />
                </Form.Item>
                <Form.Item name={['fmea', 'LastUpdated']} label="LastUpdated">
                    <Input />
                </Form.Item>
                <Form.Item name={['fmea', 'Division']} label="Division">
                    <Input />
                </Form.Item>
                <Form.Item name={['fmea', 'Platform']} label="Platform">
                    <Input />
                </Form.Item>
                <Form.Item name={['fmea', 'Sub']} label="Sub">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button htmlType="button" onClick={() => setAddRowPopupVisible(!addRowPopupVisible)} style={{ margin: '10px' }}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" style={{ margin: '10px' }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        : ''}

        <Table columns={columns} dataSource={rowData} />
    </>
    )
}
  
export default AntdTable;