import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';

type Status = "Shipped" | "Processing" | "Failed";
interface DataType { key: string; orderNumber: number; date: string; total: string; status: Status; }

const columns: TableProps<DataType>['columns'] = [
  { title: 'Order Number', dataIndex: 'orderNumber', key: 'orderNumber' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Total', dataIndex: 'total', key: 'total' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const data: DataType[] = [
  { key:'1', orderNumber:1001, date:'2025-08-01', total:'$250.00', status:'Shipped' },
  { key:'2', orderNumber:1002, date:'2025-08-03', total:'$180.50', status:'Processing' },
  { key:'3', orderNumber:1003, date:'2025-08-05', total:'$99.99', status:'Failed' },
];

const OrderInfo: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <Table<DataType>
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      size="middle"
      className="rounded-lg overflow-hidden"
    />
  </div>
);

export default OrderInfo;
