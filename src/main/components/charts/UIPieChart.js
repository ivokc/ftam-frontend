import React from 'react';
import { PieChart, Pie,Cell } from 'recharts';
import { Tag } from 'antd';



const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};



//0088FE蓝
//00C49F绿
//FFBB28黄
//FF8042红

const RADIAN = Math.PI / 180;

export default class UIPieChart extends React.Component {
  state = {};

  render() {
    let data = this.props.data;
    return (
        data == null || data.length === 0 ? <p style={{textAlign:'center'}}>暂无数据</p> : (
          <div>
            <PieChart style={UIPieChart.style.container} width={250} height={250} onMouseEnter={this.onPieEnter}>
              <Pie
                dataKey="value"
                nameKey="name"
                data={data}
                cx='50%'
                cy='50%'
                labelLine={false}
                outerRadius={100}
                paddingAngle={2}
                label={renderCustomizedLabel}
              >
              {
                data.map((entry, index) => {
                  
                  return(
                    <Cell key={index} fill={entry.color}/>
                  );
                
                })
              }
              </Pie>
            </PieChart>
            {
              data.map((entry, index) =>
                <div key={index} style={UIPieChart.style.bb}>
                  <Tag style={UIPieChart.style.tag} color={entry.color}>{entry.name}</Tag>:
                  <span>  {entry.value}</span>
                </div>
              )
            }
          </div>
        )
    );
  }
  static style = {
    container: {
      margin: 'auto',
    },
    bb: {
      width:'40%',
      margin: 'auto',
    }
  }
}
