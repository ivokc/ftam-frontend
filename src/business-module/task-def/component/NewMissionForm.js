import React from 'react';
import {Form, Input, Radio,Col,Row} from 'antd';

class NewMissionForm extends React.Component {
  render() {
    const formItemLayout = {
          labelCol: {
             span: 8 ,
          },
          wrapperCol: {
             span: 14 ,
          },
        };
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="BT编号:">
              {getFieldDecorator('btCode', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="项目需求名称:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="通配符:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="发送节点:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="发送目录:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="接收节点:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="接收目录:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="接收目录权限:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="接收失败后处理:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="生效日期:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="方式:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="申请人手机:">
              {getFieldDecorator('missionName')(<Input />)}
            </Form.Item>
          </Col>
        </Row>





      </Form>
    );
  }
}
export default Form.create()(NewMissionForm);
