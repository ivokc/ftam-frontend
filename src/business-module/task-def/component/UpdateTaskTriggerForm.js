import React from 'react';
import {Form, Input ,Col,Row,Modal,Select} from 'antd';
const Option = Select.Option;
class UpdateTaskTriggerForm extends React.Component {

  handleCancelPress = () => {
    const form = this.props.form;
    form.resetFields();
    this.props.handleCancelPress();
  }
  handleSubmit = () => {
    const form = this.props.form;
    form.validateFields((err, values) => {
      if (err) {

        let errors = Object.keys(err);
        let triggerErrors = this.triggerFields.filter((ele) => errors.indexOf(ele) !== -1).length;

        this.setState({
          triggerErrors,
        });
        return;
      }
      this.props.handleSubmit(values);
      form.resetFields();
      
    });
  }
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

      <Modal
        width={700}
        visible={this.props.visible}
        title='修改任务触发'
        okText="提交"
        cancelText="取消"
        onCancel={this.handleCancelPress}
        onOk={this.handleSubmit}
      >
        <Form >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="任务触发编号:">
                {getFieldDecorator('trigerId', {
                  initialValue: this.props.record ? this.props.record.trigerId : null,
                })(
                  <Input disabled/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="Cron表达式:">
                {getFieldDecorator('cronCause', {
                  initialValue: this.props.record ? this.props.record.cronCause : null,
                  rules: [{ required: true, message: '请填写 Cron表达式!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="时间间隔:">
                {getFieldDecorator('interval', {
                  initialValue: this.props.record ? this.props.record.interval : null,
                  rules: [{ required: true, message: '请填写 时间间隔!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="间隔单位:">
                {getFieldDecorator('intervalUnit', {
                  initialValue: this.props.record ? this.props.record.intervalUnit : null,
                  rules: [{ required: true, message: '请填写 间隔单位!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="触发类型:">
                {getFieldDecorator('trigerType', {
                  initialValue: this.props.record ? this.props.record.trigerType : null,
                  rules: [{ required: true, message: '请填写 触发类型!' }],
                })(
                  <Select>
                        {
                          this.props.dicts ? this.props.dicts.tasktrigger_trigertype.items.map((ele,i) => 
                            <Option key={i} value={ele.code}>{ele.name}</Option>
                          ) : null
                        }
                      </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="备注:">
                {getFieldDecorator('triggerremark', {
                  initialValue: this.props.record ? this.props.record.remark : null,
                  rules: [{ required: true, message: '请填写 备注!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(UpdateTaskTriggerForm);
