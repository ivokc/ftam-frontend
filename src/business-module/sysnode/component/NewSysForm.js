import React from 'react';
import {Form, Input,Col,Row} from 'antd';

class NewSysForm extends React.Component {
  render() {
    const formItemLayout = {
          labelCol: {
             span: 10 ,
          },
          wrapperCol: {
             span: 14 ,
          },
        };
    const { getFieldDecorator } = this.props.form;
    global.Just.log('newsysform',this.props);
    return (
      <Form>
        <Row gutter={16}>
          <Col span={12}>
          <Form.Item {...formItemLayout} label="系统编码:">
              {getFieldDecorator('sysCode', {
                initialValue: this.props.record ? this.props.record.sysCode : null,
                rules: [{ required: true, message: '请填写系统编码!' }],
              })(
                <Input disabled={this.props.record ? true : false}/>
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="描述:">
              {getFieldDecorator('remark', {
                initialValue: this.props.record ? this.props.record.remark : null,
                rules: [{ required: true, message: '请填写描述!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="编号:">
              {getFieldDecorator('seqNo', {
                initialValue: this.props.record ? this.props.record.seqNo : null,
                rules: [{ required: true, message: '请填写编号!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="子序号:">
              {getFieldDecorator('subSeqNo', {
                initialValue: this.props.record ? this.props.record.subSeqNo : null,
                rules: [{ required: true, message: '请填写子序号!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
          <Form.Item {...formItemLayout} label="行内标准编码编码:">
              {getFieldDecorator('pasoCode', {
                initialValue: this.props.record ? this.props.record.pasoCode : null,
                rules: [{ required: true, message: '请填写行内标准编码编码!' }],
              })(
                <Input />
              )}
            </Form.Item>
           
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="系统名称:">
              {getFieldDecorator('sysName', {
                initialValue: this.props.record ? this.props.record.sysName : null,
                rules: [{ required: true, message: '请填写系统名称!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default Form.create()(NewSysForm);
