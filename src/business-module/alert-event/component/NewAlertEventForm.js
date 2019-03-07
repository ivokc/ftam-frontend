import React from 'react';
import {Form, Input,Col,Row,Select} from 'antd';
const Option =Select.Option;
class NewAlertDefForm extends React.Component {
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
        <Row gutter={24}>
          <Col span={12}>
          <Form.Item {...formItemLayout} label="预警定义编号:">
              {getFieldDecorator('alertDefId', {
                initialValue: this.props.record ? this.props.record.alertDefId : null,
                rules: [{ required: true, message: '请填写预警定义编号!' }],
              })(
                <Input disabled style={{width:400}}/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
          <Form.Item {...formItemLayout} label="事件处理:">
              {getFieldDecorator('dealing', {
                initialValue: this.props.record ? this.props.record.dealing : null,
                rules: [{ required: true, message: '请填写事件处理!' }],
              })(
                <Select >
                  {
                    this.props.dicts ? this.props.dicts.alertevent_dealing.items.map((ele,i) => 
                      <Option key={i} value={ele.code}>{ele.name}</Option>
                    ) : null
                  }
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="事件描述:">
              {getFieldDecorator('eventRemark', {
                initialValue: this.props.record ? this.props.record.eventRemark : null,
                rules: [{ required: true, message: '请填写事件描述!' }],
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
export default Form.create()(NewAlertDefForm);
