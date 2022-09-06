import {
  SearchOutlined,
  FieldTimeOutlined,
  MessageOutlined,
  StarOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { PageHeader } from 'antd';
import React from 'react';
import '../styles/HeaderTop.css';

const routes = [
    {
      path: 'index',
      breadcrumbName: 'Главная',
    },
    {
      path: 'first',
      breadcrumbName: 'Что-то один',
    },
    {
      path: 'second',
      breadcrumbName: 'Что-то два',
    },
  ];

const HeaderTop = () => (
    <PageHeader
      className="site-page-header"
      title="Главная"
      breadcrumb={{
        routes,
      }}
      extra={[
        <div key="5"><SearchOutlined /></div>,
        <div key="4"><FieldTimeOutlined /></div>,
        <div key="3"><MessageOutlined /></div>,
        <div key="2"><StarOutlined /></div>,
        <div key="1"><SettingOutlined /></div>,
      ]}
    />


);

export default HeaderTop