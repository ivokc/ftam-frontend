import React from 'react';
import {Table } from 'antd';
import Highlighter from 'react-highlight-words';

export default class UITable extends React.Component {

 

  getColumnSearchProps = (columnToFilter) => ({
    filteredValue:[this.props.searchText ? this.props.searchText : ''],
    onFilter: (value, record) => {
      if (columnToFilter.length === 0) {
        return true;
      }else{
        return columnToFilter.some((ele) => record[ele.dataIndex].toString().includes(value));
      }
    },
    render: (text) =>  (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.props.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    )
  })
   
  render() {
    let columnToFilter = this.props.columns.filter((ele) => ele.searcher);
    const columns = this.props.columns.map((ele) => {
      if (ele.searcher) {
        return {
          ...ele,
          ...this.getColumnSearchProps(columnToFilter)
        }
      } else {
        return ele;
      }
      
    });

    return (
      <Table
        {...this.props}
        title={() => this.props.title + `${this.props.searchText ? '(已按查询条件："' + this.props.searchText + '" 过滤)' :''}`}
        dataSource={this.props.dataSource}
        columns={columns}
        expandedRowRender={this.props.expandedRowRender}
        locale={{filterConfirm:'确定',filterReset:'重置',emptyText:'暂无数据'}}
        size={this.props.size}
        pagination={this.props.pagination}
        onChange={this.props.onChange}
      />
    );
  }
}

