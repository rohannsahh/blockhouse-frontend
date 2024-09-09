import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface PieChartComponentProps {
  data: {
    labels: string[];
    data: number[];
  }| null;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  // Safety check to ensure data is valid
  if (!data || !data.labels || !data.data) {
    return <p>No data available to display the chart.</p>;
  }

  const formattedData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={formattedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {formattedData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
