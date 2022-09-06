import { Carousel, Card, Col, Row, Button } from 'antd';
import React from 'react';
import '../styles/Mainstart.css';

const Mainstart = () => (
  <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Курсы" bordered={true}>
          <Button className='btn-card' shape='round'>Перейти</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card className='card-c' title="Справочники" bordered={true}>
          <Button className='btn-card' shape='round'>Перейти</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Распоряжения" bordered={true}>
          <Button className='btn-card' shape='round'>Перейти</Button>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Mainstart