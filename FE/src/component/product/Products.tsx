import React, { useState } from 'react';
import Table from 'antd/lib/table';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import Tag from 'antd/lib/tag';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Radio from 'antd/lib/radio';

import { PlusOutlined, UserOutlined } from '@ant-design/icons';

interface IAddNewProduct {
  visibility: boolean;
  onClose: () => void;
}

const AddNewProduct = ({ visibility, onClose }: IAddNewProduct) => (
  <Modal
    title="Please add a new product"
    onCancel={() => {
      onClose();
    }}
    visible={visibility}
  >
    <Form>
      <Form.Item
        name="name"
        rules={[{ required: true }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="details"
        rules={[{ required: true }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Details"
        />
      </Form.Item>
      <Form.Item
        name="price"
        rules={[{ required: true }]}
      >
        <InputNumber
          prefix={<UserOutlined />}
          placeholder="price"
        />
      </Form.Item>
      <Form.Item
        name="type"
        rules={[{ required: true }]}
      >
        <Radio.Group>
          <Radio key="sell">Sell</Radio>
          <Radio key="rent">Rent</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  </Modal>
);

const Products = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Laptop',
      details: 'MacBook 2020',
      categories: ['tag1', 'tag2'],
    },
    {
      key: '2',
      name: 'Mobile',
      details: 'iPhone 1',
      categories: ['tag3'],
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
    },
    {
      title: 'Categories',
      dataIndex: 'categories',
      key: 'categories',
      render: (_:any, { categories }:any) =>
        categories.map((category:string) => <Tag>{category}</Tag>),
    },
    {
      title: 'Actions',
      render: () => <><Button danger>Delete</Button> <Button type="primary">Edit</Button></>,
    },
  ];
  const [addModalVisibility, setAddModalVisibility] = useState(false);

  const openAddModal = () => setAddModalVisibility(true);
  const closeAddModal = () => setAddModalVisibility(false);

  return (
    <div className="m-12">
      <div className="w-full flex">
        <div className="flex-1" />
        <Button
          className="m-2"
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => {
            openAddModal();
          }}
        >
          Add
        </Button>
      </div>
      <AddNewProduct
        visibility={addModalVisibility}
        onClose={() => closeAddModal()}
      />
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export { Products };
