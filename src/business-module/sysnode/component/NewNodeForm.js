import React from 'react';
import {Form, Input,Col,Row} from 'antd';

class NewNodeForm extends React.Component {
  render() {
    const formItemLayout = {
          labelCol: {
             span: 8 ,
          },
          wrapperCol: {
             span: 16 ,
          },
        };
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="节点名称:">
              {getFieldDecorator('nodeName1', {
                initialValue: this.props.record.nodeCode ? this.props.record.nodeName : null,
                rules: [{ required: true, message: '请填写节点名称!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            
            <Form.Item>
              {getFieldDecorator('nodeCode', {
                initialValue: this.props.record.nodeCode ? this.props.record.nodeCode : null,
              })(
              <div/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="节点序号:">
              {getFieldDecorator('seqNo', {
                initialValue: this.props.record.nodeCode ? this.props.record.seqNo : null,
                rules: [{ required: true, message: '请填写节点序号!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="用户名:">
              {getFieldDecorator('user', {
                initialValue: this.props.record.nodeCode ? this.props.record.user : null,
                rules: [{ required: true, message: '请填写用户名!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="主机地址:">
              {getFieldDecorator('host', {
                initialValue: this.props.record.nodeCode ? this.props.record.host : null,
                rules: [{ required: true, message: '请填写主机地址' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="端口:">
              {getFieldDecorator('port', {
                initialValue: this.props.record.nodeCode ? this.props.record.port : null,
                rules: [{ required: true, message: '请填写端口!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="当前版本:">
              {getFieldDecorator('version', {
                initialValue: this.props.record.nodeCode ? this.props.record.version : null,
                rules: [{ required: true, message: '请填写当前版本!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="备注:">
              {getFieldDecorator('remark', {
                initialValue: this.props.record.nodeCode ? this.props.record.remark : null,
                rules: [{ required: true, message: '请填写备注!' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item {...formItemLayout}>
              {getFieldDecorator('sysCode', {
                initialValue: this.props.record.sysCode ? this.props.record.sysCode : null,
              })(<div/>)}
            </Form.Item>
          </Col>
        </Row>
     
        
      </Form>
    );
  }
}
export default Form.create()(NewNodeForm);
