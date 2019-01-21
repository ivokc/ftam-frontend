import React from 'react';
import {Form, Input ,Col,Row,Tabs,DatePicker,Badge,Modal,Select} from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class NewTaskDefForm extends React.Component {

  
  state = {
    defErrors:0,
    triggerErrors:0
  }
  
  defFields = ['destNode','destPath','endTime','options','defremark','srcFileRule','srcNode','srcPath','startTime','status','syncStatus','taskDefName','taskDefType'];

  triggerFields = ['cronCause','interval','intervalUnit','triggerremark','taskDefId','trigerType'];


  handleCancelPress = () => {
    const form = this.props.form;
    form.resetFields();
    this.setState({defErrors:0,triggerErrors:0});
    this.props.handleCancelPress();
  }
  handleSubmit = () => {
    const form = this.props.form;
    form.validateFields((err, values) => {
      if (err) {

        let errors = Object.keys(err);
        let defErrors = this.defFields.filter((ele) => errors.indexOf(ele) !== -1).length;
        let triggerErrors = this.triggerFields.filter((ele) => errors.indexOf(ele) !== -1).length;

        this.setState({
          defErrors,
          triggerErrors,
        });
        return;
      }
      this.props.handleSubmit(values);
      this.setState({defErrors:0,triggerErrors:0});
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
        title='新增'
        okText="提交"
        cancelText="取消"
        onCancel={this.handleCancelPress}
        onOk={this.handleSubmit}
      >
        <Form >
          <Tabs defaultActiveKey="1">
          
            <TabPane key="1" tab={<Badge count={this.state.defErrors} offset={[13,0]}><span>任务定义</span></Badge>} >
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="任务定义名称:">
                    {getFieldDecorator('taskDefName', {
                      rules: [{ required: true, message: '请填写 任务定义名称!' }],
                    })(
                      <Input />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="任务类型:">
                    {getFieldDecorator('taskDefType', {
                      rules: [{ required: true, message: '请填写 任务类型!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="目标节点:">
                    {getFieldDecorator('destNode', {
                      rules: [{ required: true, message: '请填写 目标节点!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="目标路径:">
                    {getFieldDecorator('destPath', {
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
                      rules: [{ required: true, message: '请填写 生效起始时间!' }],
                    })(
                      <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder="请选择时间"
                        locale={{lang:{"ok": "👌","now": "现在","timeSelect": "兄dei,请选择🕙",}}}
                      />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="生效结束时间:">
                    {getFieldDecorator('endTime', {
                      rules: [{ required: true, message: '请填写 生效结束时间!' }],
                    })(
                      <DatePicker
                        showTime
                        format="YYYY-MM-DD HH:mm:ss"
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
                      rules: [{ required: true, message: '请填写 源节点!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="源路径:">
                    {getFieldDecorator('srcPath', {
                      rules: [{ required: true, message: '请填写 源路径!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="任务选项:">
                    {getFieldDecorator('options', {
                      rules: [{ required: true, message: '请填写 任务选项!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="备注:">
                    {getFieldDecorator('defremark', {
                      rules: [{ required: true, message: '请填写 备注!' }],
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
                      rules: [{ required: true, message: '请填写 状态!' }],
                      initialValue:'0'
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
                      initialValue:'0'
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
                      rules: [{ required: true, message: '请填写 源文件规则!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab={<Badge count={this.state.triggerErrors} offset={[13,0]}><span>任务触发</span></Badge>} key="2">
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="Cron表达式:">
                    {getFieldDecorator('cronCause', {
                      rules: [{ required: true, message: '请填写 Cron表达式!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="时间间隔:">
                    {getFieldDecorator('interval', {
                      rules: [{ required: true, message: '请填写 时间间隔!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="间隔单位:">
                    {getFieldDecorator('intervalUnit', {
                      rules: [{ required: true, message: '请填写 间隔单位!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="触发类型:">
                    {getFieldDecorator('trigerType', {
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
              </Row>
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item {...formItemLayout} label="备注:">
                    {getFieldDecorator('triggerremark', {
                      rules: [{ required: true, message: '请填写 备注!' }],
                    })(
                      <Input  />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(NewTaskDefForm);
