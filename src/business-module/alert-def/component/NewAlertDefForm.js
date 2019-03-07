import React from 'react';
import {Form, Input,Col,Row,Select,TimePicker} from 'antd';
import moment from 'moment';

const Option = Select.Option;
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
          <Form.Item {...formItemLayout} label="预警定义名称:">
              {getFieldDecorator('alertDefName', {
                initialValue: this.props.record ? this.props.record.alertDefName : null,
                rules: [{ required: true, message: '请填写预警定义名称!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              {getFieldDecorator('alertDefId', {
                initialValue: this.props.record ? this.props.record.alertDefId : null,
              })(
                <div/>
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="预警周期:">
              {getFieldDecorator('alertCycle', {
                initialValue: this.props.record ? this.props.record.alertCycle : null,
                rules: [{ required: true, message: '请填写预警周期!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="预警实现:">
              {getFieldDecorator('alertImpl', {
                initialValue: this.props.record ? this.props.record.alertImpl : null,
                rules: [{ required: true, message: '请填写预警实现!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
          <Form.Item {...formItemLayout} label="预警级别:">
              {getFieldDecorator('alertLevel', {
                initialValue: this.props.record ? this.props.record.alertLevel : null,
                rules: [{ required: true, message: '请填写预警级别!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="预警描述:">
              {getFieldDecorator('alertRemark', {
                initialValue: this.props.record ? this.props.record.alertRemark : null,
                rules: [{ required: true, message: '请填写任务定义编号!' }],
              })(
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
          <Form.Item {...formItemLayout} label="预警时间:">
              {getFieldDecorator('alertTime', {
                initialValue: this.props.record ? moment(this.props.record.alertTime, 'HH:mm:ss') : null,
                rules: [{ required: true, message: '请填写预警时间!' }],
              })(
                <TimePicker />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item {...formItemLayout} label="任务定义:">
              {getFieldDecorator('taskDefId', {
                initialValue: this.props.record ? this.props.record.taskDefId : null,
                rules: [{ required: true, message: '请填写任务定义编号!' }],
              })(
                <Select style={{width:520}} dropdownMatchSelectWidth={false}>
                  
                  {
                    this.props.taskdefList ? this.props.taskdefList.map((ele,i) => 
                    <Option key={i} value={ele.taskDef.taskDefId}>
                      名称:{ele.taskDef.taskDefName} | 源节点:{ele.taskDef.srcNode} | 目标节点:{ele.taskDef.destNode}
                    </Option>
                  ) : null
                  }
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default Form.create()(NewAlertDefForm);
