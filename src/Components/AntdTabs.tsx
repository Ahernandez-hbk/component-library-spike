import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AntdTable from '../Components/AntdTable';
import AntdLoader from './AntdLoader';
import AntdTreeView from './AntdTreeView';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `TreeView`,
    children: <AntdTreeView />,
  },
  {
    key: '2',
    label: `Table/Form`,
    children: <AntdTable />,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: <AntdLoader />,
  },
];

function AntdTabs() {
  return (
    <Tabs className='antd_tabs' defaultActiveKey="1" items={items} onChange={onChange} />
  )
}

export default AntdTabs;