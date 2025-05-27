import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';


const menu = (
  <Menu
    items={[
      {
        label: <a href="#0">Weekly</a>,
        key: '0',
      },
      {
        label: <a href="#0">Monthly</a>,
        key: '1',
      },
      {
        label: <a href="#0">Monthly</a>,
        key: '2',
      },
    ]}
  />
);

const InvoiceListFilter = () => (
  <Dropdown overlay={menu} trigger={['click']}>
    <a href="#0" onClick={(e) => e.preventDefault()}>
      <Space className='flex items-center font-poppins text-black p-2 rounded-lg shadow-lg'>
        <span>Monthly</span>
        <DownOutlined className='text-[11px]'/>
      </Space>
    </a>
  </Dropdown>
);

export default InvoiceListFilter;