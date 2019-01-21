import React from 'react';
import {Form, Input ,Col,Row,DatePicker,Modal,Select} from 'antd';
import moment from 'moment';

const Option = Select.Option;

class UpdateTaskDefForm extends React.Component {

  handleCancelPress = () => {
    const form = this.props.form;
    form.resetFields();
    this.props.handleCancelPress();
  }
  handleSubmit = () => {
    const form = this.props.form;
    form.validateFields((err, values) => {
      if (err) {
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

    console.log('fadsddasds',this.props);
    return (

      <Modal
        width={700}
        visible={this.props.visible}
        title='修改任务定义'
        okText="提交"
        cancelText="取消"
        onCancel={this.handleCancelPress}
        onOk={this.handleSubmit}
      >
        <Form >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="任务定义编号:">
                {getFieldDecorator('taskDefId', {
                  initialValue: this.props.record ? this.props.record.taskDefId : null,
                })(
                  <Input disabled/>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="任务定义名称:">
                {getFieldDecorator('taskDefName', {
                  initialValue: this.props.record ? this.props.record.taskDefName : null,
                  rules: [{ required: true, message: '请填写 任务定义名称!' }],
                })(
                  <Input />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="目标节点:">
                {getFieldDecorator('destNode', {
                  initialValue: this.props.record ? this.props.record.destNode : null,
                  rules: [{ required: true, message: '请填写 目标节点!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="目标路径:">
                {getFieldDecorator('destPath', {
                  initialValue: this.props.record ? this.props.record.destPath : null,
                  rules: [{ required: true, message: '请填写 目标路径!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="生效起始时间:">
                {getFieldDecorator('startTime', {
                  initialValue: this.props.record ? moment(this.props.record.startTime, global.Just.dateFormat) : null,
                  rules: [{ required: true, message: '请填写 生效起始时间!' }],
                })(
                  <DatePicker
                    showTime
                    format={global.Just.dateFormat}
                    placeholder="请选择时间"
                    locale={{lang:{"ok": "👌","now": "现在","timeSelect": "兄dei,请选择🕙",}}}
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="生效结束时间:">
                {getFieldDecorator('endTime', {
                  initialValue: this.props.record ? moment(this.props.record.endTime, global.Just.dateFormat) : null,
                  rules: [{ required: true, message: '请填写 生效结束时间!' }],
                })(
                  <DatePicker
                    showTime
                    format={global.Just.dateFormat}
                    placeholder="请选择时间"
                    locale={{lang:{"ok": "👌","now": "现在","timeSelect": "兄dei,请选择🕙",}}}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="源节点:">
                {getFieldDecorator('srcNode', {
                  initialValue: this.props.record ? this.props.record.srcNode : null,
                  rules: [{ required: true, message: '请填写 源节点!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="源路径:">
                {getFieldDecorator('srcPath', {
                  initialValue: this.props.record ? this.props.record.srcPath : null,
                  rules: [{ required: true, message: '请填写 源路径!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="任务类型:">
                {getFieldDecorator('taskDefType', {
                  initialValue: this.props.record ? this.props.record.taskDefType : null,
                  rules: [{ required: true, message: '请填写 任务类型!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="任务选项:">
                {getFieldDecorator('options', {
                  initialValue: this.props.record ? this.props.record.options : null,
                  rules: [{ required: true, message: '请填写 任务选项!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
            
          </Row>
          
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="状态:">
                {getFieldDecorator('status', {
                  initialValue: this.props.record ? this.props.record.status.toString() : null,
                  rules: [{ required: true, message: '请填写 状态!' }],
                 
                })(
                  <Select>
                    {
                      this.props.dicts ? this.props.dicts.taskdef_status.items.map((ele,i) => 
                        <Option key={i} value={ele.code}>{ele.name}</Option>
                      ) : null
                    }
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="同步状态:">
                {getFieldDecorator('syncStatus', {
                  rules: [{ required: true, message: '请填写 同步状态!' }],
                  initialValue: this.props.record ? this.props.record.syncStatus.toString() : null,
                })(
                  <Select>
                    {
                      this.props.dicts ? this.props.dicts.taskdef_syncstatus.items.map((ele,i) => 
                        <Option key={i} value={ele.code}>{ele.name}</Option>
                      ): null
                    }
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="源文件规则:">
                {getFieldDecorator('srcFileRule', {
                  initialValue: this.props.record ? this.props.record.srcFileRule : null,
                  rules: [{ required: true, message: '请填写 源文件规则!' }],
                })(
                  <Input  />
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="备注:">
                {getFieldDecorator('defremark', {
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
export default Form.create()(UpdateTaskDefForm);
