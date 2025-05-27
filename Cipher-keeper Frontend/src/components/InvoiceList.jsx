import { Table, Badge } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css';

const columns = [
  {
    title: 'No',
    dataIndex: 'key',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    sorter: {
      compare: (a, b) => a.customerName - b.customerName,
      multiple: 1,
    },
  },
  {
    title: 'Location',
    dataIndex: 'location',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: {
      compare: (a, b) => a.amount - b.amount,
      multiple: 1,
    },
  },
  {
    title: 'Status order',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const data = [
  {
    key: '1',
    id: '02',
    date: '01-01-20',
    customerName: 'John Brown',
    location: 'Lagos',
    amount: 1500,
    status: <div className='w-[50%] px-1 text-center shadow-md rounded-lg'><Badge status='success'/> -</div>,
    action: ''
  },
  {
    key: '2',
    id: '03',
    date: '01-01-20',
    customerName: 'Tobi Brown',
    location: 'Oyo',
    amount: 3400,
    status: <div className='w-[50%] px-1 text-center shadow-md rounded-lg'><Badge status='warning' /> -</div>,
    action: '',
  },
  {
    key: '3',
    id: '04',
    date: '01-01-20',
    customerName: 'Ade Yellow',
    location: 'Lagos',
    amount: 2000,
    status: <div className='w-[50%] px-1 text-center shadow-md rounded-lg'><Badge status='success' /> -</div>,
    action: '',
  },
  {
    key: '4',
    id: '05',
    date: '01-01-20',
    customerName: 'John Jeff',
    location: 'Abuja',
    amount: 1000,
    status: <div className='w-[50%] px-1 text-center shadow-md rounded-lg'><Badge status='warning' /> -</div>,
    action: '',
  },
  {
    key: '5',
    id: '02',
    date: '01-01-20',
    customerName: 'John Brown',
    location: 'Lagos',
    amount: 1500,
    status: <div className='w-[50%] px-1 text-center shadow-md rounded-lg'><Badge status='success' /> -</div>,
    action: ''
  },
  {
    key: '6',
    id: '03',
    date: '01-01-20',
    customerName: 'Tobi Brown',
    location: 'Oyo',
    amount: 3400,
    status: <div className='w-[50%] px-1 text-center shadow-md rounded-lg'><Badge status='warning' /> -</div>,
    action: '',
  },
  {
    key: '7',
    id: '04',
    date: '01-01-20',
    customerName: 'Ade Yellow',
    location: 'Lagos',
    amount: 2000,
    status: <div className='w-[50%] px-1 text-center shadow-md rounded-lg'><Badge status='success' /> -</div>,
    action: '',
  },
  {
    key: '8',
    id: '05',
    date: '01-01-20',
    customerName: 'John Jeff',
    location: 'Abuja',
    amount: 1000,
    status: <div className='w-[50%] px-1 text-center shadow-md rounded-lg'><Badge status='warning' /> -</div>,
    action: '',
  },
  {
    key: '10',
    id: '05',
    date: '01-01-20',
    customerName: 'John Jeff',
    location: 'Abuja',
    amount: 1000,
    status: <div className='w-[50%] px-1 text-center shadow-md rounded-lg'><Badge status='warning' /> -</div>,
    action: '',
  },
];

const onChange = (pagination, filters, sorter, extra, badge) => {
};

const InvoiceList = () => {
    return (
        <div className='text-[10px] font-poppins font-[500]'>
        <Table columns={columns} dataSource={data} onChange={onChange} pagination={{
            pageSize: 4,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }} />
        </div>
    );
};

export default InvoiceList;