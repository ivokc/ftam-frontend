import React from 'react';
import {Form, Input,Col,Row} from 'antd';

class NewVersionForm extends React.Component {
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
    return (
      <Form>
        <Row gutter={16}>
          <Col span={12}>
          <Form.Item {...formItemLayout} label="版本号:">
              {getFieldDecorator('version', {
                initialValue: this.props.record ? this.props.record.version : null,
                rules: [{ required: true, message: '请填写版本号!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="更新包:">
              {getFieldDecorator('filename', {
                initialValue: this.props.record ? this.props.record.filename : null,
                rules: [{ required: true, message: '请填写更新包!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
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
      </Form>
    );
  }
}
export default Form.create()(NewVersionForm);
