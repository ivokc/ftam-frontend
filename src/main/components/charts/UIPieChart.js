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




const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

export default class UIPieChart extends React.Component {
  state = {};

  render() {
    let data = this.props.data;
    return (
      <div>
        <PieChart style={UIPieChart.style.container} width={250} height={250} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={100}
            paddingAngle={2}
            label={renderCustomizedLabel}
          >
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          </Pie>
        </PieChart>
        {
          data.map((entry, index) =>
            <div style={UIPieChart.style.bb}>
              <Tag style={UIPieChart.style.tag} color={COLORS[index % COLORS.length]}>{entry.name}</Tag>:
              <span>  {entry.value}</span>
            </div>
          )
        }
      </div>
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
