import React from 'react';
import {Table,Icon,Input,Button } from 'antd';
import Highlighter from 'react-highlight-words';

export default class UITable extends React.Component {

  state = {
    searchText: '',
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: (params) => {
      let {setSelectedKeys, selectedKeys, confirm, clearFilters} = params;

      return (
        <div className="custom-filter-dropdown">
        <Input
            ref={node => { this.searchInput = node; }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
        >
            Search
        </Button>
        <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
        >
            Reset
        </Button>
        </div>
    )},
    filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex].toString().includes(value),
    onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
    },
    render: (text) => (
        <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
        />
    ),
  })

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  }

  render() {
    const columns = this.props.columns.map((ele) => {
      if (ele.searcher) {
        return {
          ...ele,
          ...this.getColumnSearchProps(ele.dataIndex)
        }
      } else {
        return ele;
      }
      
    });

    return (
      <Table
        title={this.props.title}
        dataSource={this.props.dataSource}
        columns={columns}
        expandedRowRender={this.props.expandedRowRender}
        locale={{filterConfirm:'确定',filterReset:'重置',emptyText:'暂无数据'}}
        size={this.props.size}
        pagination={this.props.pagination}
      />
    );
  }
}

