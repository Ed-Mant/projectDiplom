import {
    QuestionCircleOutlined,
    MessageOutlined,
    InboxOutlined,
    AuditOutlined,
    ToolOutlined,
  } from '@ant-design/icons';
  import { Menu, Layout } from 'antd';
  import React, { useState } from 'react';
  import '../styles/Sidemenu.css';

  const { Sider } = Layout;

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Разработка', '1', <ToolOutlined style={{ fontSize:'20px' }} />, [
        getItem('Проекты/решения', '1.2', null, [
            getItem('Проект №1', '1.2.1'),
            getItem('Проект №2', '1.2.2'),
            getItem('Проект №3', '1.2.3'),
            getItem('Проект №4', '1.2.4'),
            getItem('Проект №5', '1.2.5'),
            getItem('Проект №6', '1.2.6'),
            getItem('Проект №7', '1.2.7'),
            getItem('Проект №8', '1.2.8'),
            getItem('Проект №9', '1.2.9'),
        ]),
        getItem('Справочники', '1.3'),
        getItem('Правки и доработки', '1.4'),
    ]),
    getItem('Информация', '2', <AuditOutlined style={{ fontSize:'20px' }} />, [
      getItem('Настройка рабочих мест', '2.1'),
      getItem('Инциденты НН', '2.2'),
      getItem('Распоряжения', '2.3'),
      getItem('Сотрудники', '2.4'),
    ]),
    getItem('Обучение', '3', <InboxOutlined style={{ fontSize:'22px' }} />, [
      getItem('Курсы', '3.1'),
      getItem('База знаний', '3.2'),
    ]),
    getItem('Форум', '4', <MessageOutlined style={{ fontSize:'20px' }} />),
    getItem('Вопрос/ответ', '5', <QuestionCircleOutlined style={{ fontSize:'20px' }} />),
  ];

const Sidemenu = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };

  return (
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="light"
            inlineCollapsed={collapsed}
            items={items}
        />
      </Sider>
  );
};

export default Sidemenu